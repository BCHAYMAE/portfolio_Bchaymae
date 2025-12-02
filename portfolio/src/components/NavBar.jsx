import "./navbar.css";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className={`links ${open ? "show" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="menu" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
}
