import "../background.css";
import { useEffect, useState } from "react";

export default function Background() {
  const [symbols, setSymbols] = useState([]);

  useEffect(() => {
    const temp = [];
    const techChars = ["0", "1", "{ }", "< />", "JS", "HTML", "CSS", "DB", "Node", "React"];
    const colors = ["#ffffff", "#aaff4a", "#f0f", "#0ff"];

    for (let i = 0; i < 300; i++) {
      temp.push({
        id: i,
        left: Math.random() * window.innerWidth,
        char: techChars[Math.floor(Math.random() * techChars.length)],
        size: Math.random() * 4 + 12,
        delay: Math.random() * 10,
        speed: Math.random() * 8 + 5,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    setSymbols(temp);
  }, []);

  return (
    <div className="background">
      {symbols.map(s => (
        <div
          key={s.id}
          className="binary"
          style={{
            left: s.left,
            fontSize: s.size,
            animationDuration: `${s.speed}s`,
            animationDelay: `${s.delay}s`,
            color: s.color,
            textShadow: `0 0 5px ${s.color}, 0 0 10px ${s.color}, 0 0 15px ${s.color}`
          }}
        >
          {s.char}
        </div>
      ))}
    </div>
  );
}
