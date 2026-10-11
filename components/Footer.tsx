"use client"

const links = [
  { label: "GitHub", href: "https://github.com/franklinosuji2-afk" },
  { label: "LinkedIn", href: "https://linkedin.com/in/franklin-osuji-a96003321" },
  { label: "Email", href: "mailto:franklin.osuji2@gmail.com" },
  { label: "CV", href: "/Franklin_Osuji_Resume.pdf" },
  { label: "Lebenslauf (DE)", href: "/Franklin_Osuji_Lebenslauf_DE.pdf" },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <strong>Franklin Chinonso Osuji</strong>
          <p>Cloud Infrastructure &amp; DevOps Engineer · Berlin</p>
        </div>
        <div className="footer-links">
          {links.map((link) => (
            <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Franklin Chinonso Osuji</span>
        <span>Infrastructure as code. Reliability by design.</span>
      </div>
    </footer>
  )
}
