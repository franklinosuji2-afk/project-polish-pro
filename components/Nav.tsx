"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "./ThemeContext"
import { site } from "./site"

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#credentials", label: "Credentials" },
  { href: "#contact", label: "Contact" },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")
  const { theme, toggle } = useTheme()
  const menuButton = useRef<HTMLButtonElement>(null)

  // Highlight the link of the section that is currently in the middle band of the viewport.
  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
          else setActive((current) => (current === entry.target.id ? "" : current))
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // The mobile menu closes with Escape (focus goes back to the button) and when the window grows past the breakpoint.
  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
        menuButton.current?.focus()
      }
    }
    const wide = window.matchMedia("(min-width: 961px)")
    const onWide = () => wide.matches && setOpen(false)
    document.addEventListener("keydown", onKey)
    wide.addEventListener("change", onWide)
    return () => {
      document.removeEventListener("keydown", onKey)
      wide.removeEventListener("change", onWide)
    }
  }, [open])

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="nav-brand" href="#top" aria-label={`${site.name}, back to top`}>{site.name}</a>
        <button
          ref={menuButton}
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
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href.slice(1) ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a className="btn btn-small" href={site.cvEn} download>Download CV</a>
          <button className="theme-toggle" type="button" onClick={toggle}>
            {theme === "dark" ? "Light theme" : "Dark theme"}
          </button>
        </nav>
      </div>
    </header>
  )
}
