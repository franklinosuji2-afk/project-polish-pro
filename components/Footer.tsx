"use client"

export default function Footer() {
  const links = [
    { label: "GitHub", href: "https://github.com/franklinosuji2-afk" },
    { label: "LinkedIn", href: "https://linkedin.com/in/franklin-osuji-a96003321" },
    { label: "Email", href: "mailto:franklin.osuji2@gmail.com" },
    { label: "CV / Resume", href: "/Franklin_Osuji_Resume.pdf" },
  ]

  return (
    <footer style={{ borderTop: "1px solid var(--border)", background: "var(--bg-primary)", padding: "40px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "24px", marginBottom: "32px" }}>
          <div>
            <div style={{ fontFamily: "monospace", fontSize: "14px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px" }}>Franklin Chinonso Osuji</div>
            <div style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "8px" }}>Cloud Infrastructure & DevOps Engineer | AWS Certified | Berlin</div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
              <span style={{ fontSize: "12px", color: "#4ade80", fontFamily: "monospace" }}>Open to opportunities</span>
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {links.map((lnk) => (
              <a key={lnk.label} href={lnk.href} target={lnk.href.startsWith("http") ? "_blank" : undefined} rel={lnk.href.startsWith("http") ? "noreferrer" : undefined} aria-label={lnk.label} style={{ fontSize: "13px", color: "var(--text-muted)", textDecoration: "none", fontFamily: "monospace", padding: "6px 12px", border: "1px solid var(--border)", borderRadius: "5px", transition: "color 0.2s" }}>
                {lnk.label}
              </a>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "24px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <div style={{ fontFamily: "monospace", fontSize: "11px", color: "var(--text-muted)", fontStyle: "italic" }}>&ldquo;Infrastructure as code. Reliability by design. Automation at scale.&rdquo;</div>
          <div style={{ fontFamily: "monospace", fontSize: "11px", color: "var(--text-muted)" }}>© 2026 Franklin Chinonso Osuji</div>
        </div>
      </div>
    </footer>
  )
}
