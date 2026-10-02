"use client"
import { useEffect, useRef, useState } from "react"
import { useTheme } from "./ThemeContext"
const LINKEDIN_URL = "https://linkedin.com/in/franklin-osuji-a96003321"
const RESUME_URL = "/Franklin_Osuji_Resume.pdf"
const links = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const
const css = `
.fo-nav{position:fixed;top:0;left:0;right:0;z-index:50;background:transparent;border-bottom:1px solid transparent;-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);transition:background .3s,border-color .3s}
.fo-nav[data-solid="true"]{background:var(--nav-bg);border-bottom-color:var(--border)}
.fo-bar{max-width:1200px;margin:0 auto;padding:0 24px;height:68px;display:flex;align-items:center;justify-content:space-between;gap:16px}
.fo-brand{display:flex;align-items:center;gap:8px;text-decoration:none;border-radius:6px}
.fo-logo{width:32px;height:32px;display:flex;align-items:center;justify-content:center;background:rgba(59,130,246,.1);border:1px solid rgba(59,130,246,.3);border-radius:6px;font-family:monospace;font-size:13px;font-weight:700;color:#60a5fa}
.fo-brand-name{font-family:monospace;font-size:13px;font-weight:600;color:var(--text-primary)}
.fo-links,.fo-mobile{list-style:none;margin:0;padding:0}
.fo-links{display:flex;align-items:center;gap:2px}
.fo-link{display:block;padding:5px 10px;font-size:13px;color:var(--text-secondary);text-decoration:none;border-radius:5px;transition:color .15s,background .15s}
.fo-link:hover{color:var(--text-primary)}
.fo-link[aria-current="true"]{color:var(--text-primary);background:var(--bg-card2)}
.fo-linkedin{margin-left:8px;color:#0a66c2;border:1px solid rgba(10,102,194,.2);font-weight:600}
.fo-linkedin:hover{color:#0a66c2;background:rgba(10,102,194,.1)}
.fo-resume{margin-left:6px;padding:5px 14px;color:#fff;background:#2563eb;font-weight:600}
.fo-resume:hover{color:#fff;background:#1d4ed8}
.fo-nav a:focus-visible,.fo-nav button:focus-visible{outline:2px solid #60a5fa;outline-offset:2px}
.fo-actions{display:flex;gap:8px;align-items:center}
.fo-theme,.fo-menu-btn{height:32px;border:1px solid var(--border);border-radius:6px;background:var(--bg-card2);color:var(--text-secondary);cursor:pointer;transition:color .2s,background .2s}
.fo-theme{min-width:68px;padding:0 10px;font-family:monospace;font-size:10px;font-weight:600;letter-spacing:.5px}
.fo-menu-btn{display:none;width:34px;align-items:center;justify-content:center;padding:0;background:transparent}
.fo-theme:hover,.fo-menu-btn:hover{color:var(--text-primary)}
.fo-mobile{display:none;max-height:calc(100vh - 68px);overflow-y:auto;background:var(--nav-bg);border-top:1px solid var(--border);padding:8px 24px 16px}
.fo-mobile[data-open="true"]{display:block}
.fo-mobile a{display:block;padding:12px 8px;font-size:15px;color:var(--text-secondary);text-decoration:none;border-bottom:1px solid var(--border)}
.fo-mobile a[aria-current="true"]{color:var(--text-primary)}
.fo-mobile .fo-linkedin{margin:0;color:#0a66c2;font-weight:600;border:0;border-bottom:1px solid var(--border);border-radius:0}
.fo-mobile .fo-resume{margin:0;padding:12px 8px;background:transparent;color:var(--text-primary);font-weight:600;border-radius:0}
.fo-sr{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
@media (max-width:768px){.fo-links{display:none}.fo-menu-btn{display:flex}}
@media (min-width:769px){.fo-mobile{display:none!important}}
@media (prefers-reduced-motion:reduce){.fo-nav,.fo-link,.fo-theme,.fo-menu-btn{transition:none}}
`
export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>("home")
  const menuBtn = useRef<HTMLButtonElement>(null)
  const { theme, toggle } = useTheme()
  const dark = theme === "dark"
  // Solid background after the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  // Highlight the section currently in view
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null)
    if (sections.length === 0 || !("IntersectionObserver" in window)) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px" }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])
  // Close the mobile menu with Escape, or when the viewport becomes wide
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false)
        menuBtn.current?.focus()
      }
    }
    const mq = window.matchMedia("(min-width: 769px)")
    const onChange = () => mq.matches && setOpen(false)
    document.addEventListener("keydown", onKey)
    mq.addEventListener("change", onChange)
    return () => {
      document.removeEventListener("keydown", onKey)
      mq.removeEventListener("change", onChange)
    }
  }, [open])
  const close = () => setOpen(false)
  const current = (href: string) => (active === href.slice(1) ? "true" : undefined)
  const external = (cls: string) => (
    <a
      href={LINKEDIN_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cls}
      onClick={close}
    >
      LinkedIn<span className="fo-sr"> (opens in a new tab)</span>
    </a>
  )
  return (
    <nav className="fo-nav" data-solid={scrolled || open} aria-label="Main navigation">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="fo-bar">
        <a href="#home" className="fo-brand" aria-label="Franklin Osuji, back to top">
          <span className="fo-logo" aria-hidden="true">FO</span>
          <span className="fo-brand-name" aria-hidden="true">franklin.osuji</span>
        </a>
        <ul className="fo-links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="fo-link" aria-current={current(l.href)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>{external("fo-link fo-linkedin")}</li>
          <li>
            <a href={RESUME_URL} className="fo-link fo-resume">
              Resume
            </a>
          </li>
        </ul>
        <div className="fo-actions">
          <button
            type="button"
            className="fo-theme"
            onClick={toggle}
            title={dark ? "Switch to light mode" : "Switch to dark mode"}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? "LIGHT" : "DARK"}
          </button>
          <button
            ref={menuBtn}
            type="button"
            className="fo-menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" focusable="false">
              {open ? (
                <path d="M4 4l10 10M14 4L4 14" />
              ) : (
                <path d="M3 5h12M3 9h12M3 13h12" />
              )}
            </svg>
          </button>
        </div>
      </div>
      <ul id="mobile-menu" className="fo-mobile" data-open={open}>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={close} aria-current={current(l.href)}>
              {l.label}
            </a>
          </li>
        ))}
        <li>{external("fo-linkedin")}</li>
        <li>
          <a href={RESUME_URL} className="fo-resume" onClick={close}>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  )
}
