import { useEffect, useMemo, useRef, useState } from "react";
import {
  FaEnvelope,
  FaFileDownload,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import styles from "./LanyardBadge.module.css";

const DEFAULT_LINKS = {
  github: "https://github.com/ChaymaeBellahcene",
  linkedin: "https://www.linkedin.com/in/chaymae-bellahcene/",
  email: "mailto:bellahcene.chaymae@gmail.com",
  resume: "/CV-BELLAHCENE%20Chaymae.pdf",
};

function getNameLines(name = "") {
  const trimmedName = name.trim();

  if (!trimmedName) {
    return ["Your", "Name"];
  }

  if (trimmedName.includes("\n")) {
    return trimmedName
      .split("\n")
      .map((part) => part.trim())
      .filter(Boolean)
      .slice(0, 2);
  }

  const parts = trimmedName.split(/\s+/);

  if (parts.length === 1) {
    return [parts[0]];
  }

  return [parts[0], parts.slice(1).join(" ")];
}

function isExternalLink(href) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export default function LanyardBadge({
  name = "Chaymae Bellahcene",
  title = "Full-Stack Developer",
  tagline = "Building web apps from idea to deployment",
  avatarUrl = "",
  links = DEFAULT_LINKS,
}) {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const badgeRef = useRef(null);
  const frameRef = useRef(null);
  const angleRef = useRef(0);
  const velocityRef = useRef(0);

  const dragRef = useRef({
    active: false,
    pointerId: null,
    startX: 0,
    startAngle: 0,
    lastX: 0,
    lastTime: 0,
  });

  const nameLines = useMemo(() => getNameLines(name), [name]);
  const initials = useMemo(
    () =>
      nameLines
        .map((line) => line.charAt(0))
        .join("")
        .slice(0, 2)
        .toUpperCase(),
    [nameLines]
  );

  const resolvedLinks = useMemo(
    () => ({
      ...DEFAULT_LINKS,
      ...links,
    }),
    [links]
  );

  const iconLinks = useMemo(
    () => [
      {
        key: "github",
        href: resolvedLinks.github,
        label: "GitHub profile",
        Icon: FaGithub,
      },
      {
        key: "linkedin",
        href: resolvedLinks.linkedin,
        label: "LinkedIn profile",
        Icon: FaLinkedinIn,
      },
      {
        key: "email",
        href: resolvedLinks.email,
        label: "Send email",
        Icon: FaEnvelope,
      },
      {
        key: "resume",
        href: resolvedLinks.resume,
        label: "Download resume",
        Icon: FaFileDownload,
        download: true,
      },
    ],
    [resolvedLinks]
  );

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const stopAnimation = () => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
  };

  const setBadgeRotation = (nextRotation) => {
    angleRef.current = nextRotation;
    setRotation(nextRotation);
  };

  const animateBackToCenter = () => {
    stopAnimation();

    let lastTimestamp = performance.now();

    const step = (timestamp) => {
      const delta = Math.min((timestamp - lastTimestamp) / 16.67, 2.25);
      lastTimestamp = timestamp;

      velocityRef.current += -angleRef.current * 0.094 * delta;
      velocityRef.current *= Math.pow(0.912, delta);
      angleRef.current += velocityRef.current * delta;

      if (
        Math.abs(angleRef.current) < 0.025 &&
        Math.abs(velocityRef.current) < 0.018
      ) {
        angleRef.current = 0;
        velocityRef.current = 0;
        setRotation(0);
        frameRef.current = null;
        return;
      }

      setRotation(angleRef.current);
      frameRef.current = requestAnimationFrame(step);
    };

    frameRef.current = requestAnimationFrame(step);
  };

  const handlePointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    stopAnimation();
    setIsDragging(true);

    dragRef.current = {
      active: true,
      pointerId: event.pointerId,
      startX: event.clientX,
      startAngle: angleRef.current,
      lastX: event.clientX,
      lastTime: performance.now(),
    };

    badgeRef.current?.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (
      !dragRef.current.active ||
      dragRef.current.pointerId !== event.pointerId
    ) {
      return;
    }

    const distance = event.clientX - dragRef.current.startX;
    const nextAngle = Math.max(
      -15,
      Math.min(15, dragRef.current.startAngle + distance * 0.12)
    );

    const now = performance.now();
    const deltaX = event.clientX - dragRef.current.lastX;
    const deltaTime = Math.max(now - dragRef.current.lastTime, 1);

    velocityRef.current = Math.max(
      -2,
      Math.min(2, (deltaX / deltaTime) * 1.1)
    );

    dragRef.current.lastX = event.clientX;
    dragRef.current.lastTime = now;

    setBadgeRotation(nextAngle);
  };

  const releaseDrag = (event) => {
    if (
      !dragRef.current.active ||
      dragRef.current.pointerId !== event.pointerId
    ) {
      return;
    }

    dragRef.current.active = false;
    dragRef.current.pointerId = null;

    if (badgeRef.current?.hasPointerCapture?.(event.pointerId)) {
      badgeRef.current.releasePointerCapture(event.pointerId);
    }

    setIsDragging(false);
    animateBackToCenter();
  };

  const stopDragPropagation = (event) => {
    event.stopPropagation();
  };

  const tiltAbs = Math.abs(rotation);
  const swingScale = 1 + tiltAbs * 0.0016;
  const swingLift = tiltAbs * 0.24;
  const shadowOffset = rotation * -0.9;
  const shadowBlur = 24 + tiltAbs * 0.55;

  return (
    <div className={styles.stage}>
      <div className={styles.entry}>
        <div
          ref={badgeRef}
          className={`${styles.assembly} ${
            isDragging ? styles.dragging : ""
          }`}
          style={{
            "--badge-rotate": `${rotation}deg`,
            "--badge-scale": swingScale.toFixed(3),
            "--badge-lift": `${swingLift.toFixed(2)}px`,
            "--badge-shadow-x": `${shadowOffset.toFixed(2)}px`,
            "--badge-shadow-blur": `${shadowBlur.toFixed(2)}px`,
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={releaseDrag}
          onPointerCancel={releaseDrag}
          onLostPointerCapture={releaseDrag}
          aria-label={`${name} profile badge`}
        >
          <div className={styles.strap} aria-hidden="true">
            <span className={styles.strapBandLeft}></span>
            <span className={styles.strapBandRight}></span>
            <span className={styles.ring}></span>
            <span className={styles.connector}></span>
            <span className={styles.clip}></span>
          </div>

          <div className={styles.badge}>
            <div className={styles.badgeTop} aria-hidden="true">
              <span className={styles.slot}></span>
              <span className={styles.slot}></span>
            </div>

            <div className={styles.badgeBody}>
              <div className={styles.cardContent}>
                <div className={styles.identityRow}>
                  <div className={styles.avatarWrap}>
                    {avatarUrl ? (
                      <img
                        className={styles.avatarImage}
                        src={avatarUrl}
                        alt={name}
                        draggable="false"
                      />
                    ) : (
                      <div
                        className={styles.placeholderAvatar}
                        aria-hidden="true"
                      >
                        {initials}
                      </div>
                    )}
                  </div>

                  <div className={styles.textBlock}>
                    <div className={styles.nameBlock}>
                      {nameLines.map((line, index) => (
                        <span
                          key={`${line}-${index}`}
                          className={styles.nameLine}
                        >
                          {line}
                        </span>
                      ))}
                    </div>

                    <p className={styles.title}>{title}</p>
                  </div>
                </div>

                <p className={styles.tagline}>{tagline}</p>

                <div className={styles.iconRow}>
                  {iconLinks
                    .filter(({ href }) => Boolean(href))
                    .map(({ key, href, label, Icon, download }) => (
                      <a
                        key={key}
                        className={styles.iconLink}
                        href={href}
                        aria-label={label}
                        title={label}
                        download={download ? true : undefined}
                        target={isExternalLink(href) ? "_blank" : undefined}
                        rel={isExternalLink(href) ? "noreferrer" : undefined}
                        onPointerDown={stopDragPropagation}
                        onPointerMove={stopDragPropagation}
                        onClick={stopDragPropagation}
                      >
                        <Icon />
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
