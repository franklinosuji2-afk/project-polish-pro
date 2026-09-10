"use client"

import { useState, useEffect } from "react"
import { useTheme } from "./ThemeContext"

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#overview", label: "Stacks" },
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

  const navBg = scrolled || open ? "var(--nav-bg)" : "transparent"
  const navBorder = scrolled || open ? "1px solid var(--border)" : "none"

  return (
    <nav
      style={{
        position:"fixed",
        top:0,
        left:0,
        right:0,
        zIndex:50,
        background:navBg,
        borderBottom:navBorder,
        backdropFilter:"blur(16px)",
        transition:"all 0.3s"
      }}
    >
      <div
        style={{
          maxWidth:"1200px",
          margin:"0 auto",
          padding:"0 24px",
          height:"68px",
          display:"flex",
          alignItems:"center",
          justifyContent:"space-between"
        }}
      >
        <div style={{display:"flex",alignItems:"center",gap:"16px"}}>
          <a
            href="#home"
            style={{
              display:"flex",
              alignItems:"center",
              gap:"8px",
              textDecoration:"none"
            }}
          >
            <div
              style={{
                width:"32px",
                height:"32px",
                background:"rgba(59,130,246,0.1)",
                border:"1px solid rgba(59,130,246,0.3)",
                borderRadius:"6px",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                fontFamily:"monospace",
                fontSize:"13px",
                fontWeight:700,
                color:"#60a5fa"
              }}
            >
              FO
            </div>
            <span
              style={{
                fontFamily:"monospace",
                fontSize:"13px",
                fontWeight:600,
                color:"var(--text-primary)"
              }}
            >
              franklin.osuji
            </span>
          </a>

          <div
            className="nav-phone"
            style={{
              paddingLeft:"12px",
              borderLeft:"1px solid var(--border)",
              flexDirection:"column",
              gap:"3px"
            }}
          >
            
          </div>
        </div>

        <div className="nav-links">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              style={{
                padding:"5px 10px",
                fontSize:"13px",
                color:"var(--text-secondary)",
                textDecoration:"none",
                borderRadius:"5px",
                transition:"all 0.15s"
              }}
              onMouseEnter={e => e.currentTarget.style.color="var(--text-primary)"}
              onMouseLeave={e => e.currentTarget.style.color="var(--text-secondary)"}
            >
              {l.label}
            </a>
          ))}

          <a
            href="https://linkedin.com/in/franklin-osuji-a96003321"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginLeft:"8px",
              padding:"5px 12px",
              fontSize:"13px",
              color:"#0a66c2",
              border:"1px solid rgba(10,102,194,0.2)",
              borderRadius:"5px",
              textDecoration:"none",
              fontWeight:600
            }}
          >
            LinkedIn
          </a>

          <a
            href="/cv.html"
            target="_blank"
            style={{
              marginLeft:"6px",
              padding:"5px 14px",
              fontSize:"13px",
              fontWeight:600,
              color:"#fff",
              background:"#2563eb",
              borderRadius:"5px",
              textDecoration:"none"
            }}
          >
            Resume
          </a>
        </div>

        <div style={{display:"flex",gap:"8px",alignItems:"center"}}>
          <button
            onClick={toggle}
            title={dark ? "Switch to light mode" : "Switch to dark mode"}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            style={{
              minWidth:"68px",
              height:"32px",
              padding:"0 10px",
              borderRadius:"6px",
              border:"1px solid var(--border)",
              background:"var(--bg-card2)",
              cursor:"pointer",
              fontSize:"10px",
              fontFamily:"monospace",
              fontWeight:600,
              letterSpacing:"0.5px",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              color:"var(--text-secondary)",
              transition:"all 0.2s ease"
            }}
          >
            {dark ? "LIGHT" : "DARK"}
          </button>

          <button
            className="nav-mobile-btn"
            onClick={() => setOpen(!open)}
            style={{
              background:"transparent",
              border:"1px solid var(--border)",
              borderRadius:"6px",
              padding:"7px",
              cursor:"pointer",
              color:"var(--text-secondary)",
              fontSize:"16px",
              lineHeight:1
            }}
          >
            {open ? "x" : "="}
          </button>
        </div>
      </div>

      <div
        className={`mobile-menu${open ? " open" : ""}`}
        style={{
          background:"var(--nav-bg)",
          borderTop:"1px solid var(--border)",
          padding:"16px 24px",
          gap:"4px"
        }}
      >
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            style={{
              padding:"12px 8px",
              fontSize:"15px",
              color:"var(--text-secondary)",
              textDecoration:"none",
              borderBottom:"1px solid var(--border)",
              display:"block"
            }}
          >
            {l.label}
          </a>
        ))}

        <a
          href="https://linkedin.com/in/franklin-osuji-a96003321"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding:"12px 8px",
            fontSize:"15px",
            color:"#0a66c2",
            textDecoration:"none",
            borderBottom:"1px solid var(--border)",
            display:"block",
            fontWeight:600
          }}
        >
          LinkedIn
        </a>

        

        <a
          href="/cv.html"
          target="_blank"
          onClick={() => setOpen(false)}
          style={{
            marginTop:"12px",
            padding:"12px",
            fontSize:"15px",
            fontWeight:600,
            color:"#fff",
            background:"#2563eb",
            borderRadius:"6px",
            textDecoration:"none",
            textAlign:"center",
            display:"block"
          }}
        >
          Download Resume
        </a>
      </div>
    </nav>
  )
}

