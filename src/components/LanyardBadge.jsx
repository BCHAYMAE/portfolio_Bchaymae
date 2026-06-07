import { useEffect, useMemo, useRef, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import badgeArt from "../assets/p-cutout-short.png";
import styles from "./LanyardBadge.module.css";

const DEFAULT_LINKS = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  email: "mailto:",
};

function getNameLines(name) {
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

export default function LanyardBadge({
  name = "Chaymae Bellahcene",
  title = "full stack developer",
  tagline = "slogan to add later",
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

  const animateBackToCenter = () => {
    stopAnimation();

    let lastTimestamp = performance.now();

    const step = (timestamp) => {
      const delta = Math.min((timestamp - lastTimestamp) / 16.67, 2.25);
      lastTimestamp = timestamp;

      velocityRef.current += -angleRef.current * 0.094 * delta;
      velocityRef.current *= Math.pow(0.912, delta);
      angleRef.current += velocityRef.current * delta;

      if (Math.abs(angleRef.current) < 0.025 && Math.abs(velocityRef.current) < 0.018) {
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
    if (event.button !== 0) {
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
    if (!dragRef.current.active || dragRef.current.pointerId !== event.pointerId) {
      return;
    }

    const nextAngle = Math.max(
      -16,
      Math.min(16, dragRef.current.startAngle + (event.clientX - dragRef.current.startX) * 0.14)
    );
    const now = performance.now();
    const deltaX = event.clientX - dragRef.current.lastX;
    const deltaTime = Math.max(now - dragRef.current.lastTime, 1);

    angleRef.current = nextAngle;
    velocityRef.current = Math.max(-2.1, Math.min(2.1, (deltaX / deltaTime) * 1.15));
    dragRef.current.lastX = event.clientX;
    dragRef.current.lastTime = now;
    setRotation(nextAngle);
  };

  const releaseDrag = (event) => {
    if (!dragRef.current.active || dragRef.current.pointerId !== event.pointerId) {
      return;
    }

    dragRef.current.active = false;
    dragRef.current.pointerId = null;
    badgeRef.current?.releasePointerCapture(event.pointerId);
    setIsDragging(false);
    animateBackToCenter();
  };

  const resolvedLinks = {
    ...DEFAULT_LINKS,
    ...links,
  };

  const iconLinks = [
    { key: "github", href: resolvedLinks.github, label: "GitHub", Icon: FaGithub },
    { key: "linkedin", href: resolvedLinks.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
    { key: "email", href: resolvedLinks.email, label: "Email", Icon: FaEnvelope },
  ];

  const stopDragPropagation = (event) => {
    event.stopPropagation();
  };

  const tiltAbs = Math.abs(rotation);
  const swingScale = 1 + tiltAbs * 0.002;
  const swingLift = tiltAbs * 0.32;
  const shadowOffset = rotation * -0.85;
  const shadowBlur = 18 + tiltAbs * 0.55;

  return (
    <div className={styles.stage}>
      <div className={styles.entry}>
        <div
          ref={badgeRef}
          className={`${styles.assembly} ${isDragging ? styles.dragging : ""}`}
          style={{
            "--badge-rotate": `${rotation}deg`,
            "--badge-scale": swingScale.toFixed(3),
            "--badge-lift": `${swingLift.toFixed(2)}px`,
            "--holder-shadow-x": `${shadowOffset.toFixed(2)}px`,
            "--holder-shadow-blur": `${shadowBlur.toFixed(2)}px`,
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={releaseDrag}
          onPointerCancel={releaseDrag}
          onLostPointerCapture={releaseDrag}
          role="presentation"
        >
          
          <div className={styles.artWrap}>
            
            <img className={styles.badgeArt} src={badgeArt} alt="" draggable="false" />

            <div className={styles.cardContent}>
              <div className={styles.avatarWrap}>
                {avatarUrl ? (
                  <img
                    className={styles.avatarImage}
                    src={avatarUrl}
                    alt={`${name} avatar`}
                    draggable="false"
                  />
                ) : (
                  <div className={styles.placeholderAvatar} aria-hidden="true" />
                )}
              </div>

              <div className={styles.nameBlock}>
                {nameLines.map((line) => (
                  <span key={line} className={styles.nameLine}>
                    {line}
                  </span>
                ))}
              </div>

              <p className={styles.title}>{title}</p>

              <div className={styles.iconRow}>
                {iconLinks.map(({ key, href, label, Icon }) => (
                  <a
                    key={key}
                    className={styles.iconLink}
                    href={href}
                    aria-label={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    onPointerDown={stopDragPropagation}
                    onClick={stopDragPropagation}
                  >
                    <Icon />
                  </a>
                  
                ))}
              </div>
              <p className={styles.tagline}>{tagline}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
