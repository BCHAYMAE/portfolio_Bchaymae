"use client"

import { useState } from "react"
import "./Navbar.css"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ]

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* desktop  */}
        <div className="navbar-links-desktop">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
              <span className="underline"></span>
            </a>
          ))}
        </div>

        {/* mobile  */}
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="navbar-links-mobile">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={handleLinkClick} className="nav-link-mobile">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

