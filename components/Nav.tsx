"use client"

import { useState } from "react"
import { useTheme } from "./ThemeContext"

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#pipeline", label: "How this site is built" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#credentials", label: "Credentials" },
  { href: "#contact", label: "Contact" },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="nav-brand" href="#top">Franklin Osuji</a>
        <button
          className="nav-menu"
          type="button"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav id="nav-links" className={open ? "nav-links open" : "nav-links"} aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
          ))}
          <a className="btn btn-small" href="/Franklin_Osuji_Resume.pdf" download>Download CV</a>
          <button className="theme-toggle" type="button" onClick={toggle}>
            {theme === "dark" ? "Light theme" : "Dark theme"}
          </button>
        </nav>
      </div>
    </header>
  )
}
