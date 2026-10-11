"use client"

import { useEffect, useState } from "react"
import { useTheme } from "./ThemeContext"

const links = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#how-i-work", label: "How I work" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()
  const dark = theme === "dark"

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

  return (
    <nav className={`site-nav ${scrolled || open ? "nav-scrolled" : ""}`} aria-label="Primary navigation">
      <div className="nav-inner">
        <a className="brand" href="#home" aria-label="Franklin Osuji home">
          <span className="brand-mark" aria-hidden="true">FO</span>
          <span>franklin.osuji</span>
        </a>

        <div className="nav-links">
          {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          <a href="https://linkedin.com/in/franklin-osuji-a96003321" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="resume-button" href="/Franklin_Osuji_Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        </div>

        <div className="nav-actions">
          <button
            className="theme-button"
            onClick={toggle}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? "LIGHT" : "DARK"}
          </button>
          <button
            className="menu-button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? "open" : ""}`}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
        ))}
        <a href="https://linkedin.com/in/franklin-osuji-a96003321" target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="resume-button" href="/Franklin_Osuji_Resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
      </div>
    </nav>
  )
}
