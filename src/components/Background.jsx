import "./Background.css";
import { useEffect, useMemo, useState } from "react";

export default function Background() {
  const techChars = useMemo(
    () => ["0", "1", "Docker", "Nginx", "JS", "CI/CD", "CSS", "DB", "Node", "React"],
    []
  );

  const colors = useMemo(
    () => ["#aaff4a", "#ffea4a", "#88ffff", "#ff6b9d"],
    []
  );

  const [symbols, setSymbols] = useState([]);

  useEffect(() => {
    const generate = () => {
      const width = window.innerWidth;

      const count =
        width < 640 ? 80 : width < 1024 ? 120 : 160; 

      const temp = [];
      for (let i = 0; i < count; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        temp.push({
          id: i,
          left: Math.random() * width,
          char: techChars[Math.floor(Math.random() * techChars.length)],
          size: Math.random() * 6 + 10, 
          delay: Math.random() * 8,
          speed: Math.random() * 10 + 10, 
          drift: (Math.random() * 60 - 30).toFixed(0), 
          color
        });
      }
      setSymbols(temp);
    };

    generate();
    window.addEventListener("resize", generate);
    return () => window.removeEventListener("resize", generate);
  }, [colors, techChars]);

  return (
    <div className="background" aria-hidden="true">
      {symbols.map((s) => (
        <div
          key={s.id}
          className="binary"
          style={{
            left: s.left,
            fontSize: s.size,
            animationDuration: `${s.speed}s`,
            animationDelay: `${s.delay}s`,
            color: s.color,
            "--drift": `${s.drift}px`,
            textShadow: `0 0 6px ${s.color}`
          }}
        >
          {s.char}
        </div>
      ))}

      {/* overlays */}
      <div className="bgOverlay" />
      <div className="vignette" />
    </div>
  );
}