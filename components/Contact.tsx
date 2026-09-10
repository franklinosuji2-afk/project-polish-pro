"use client"

export default function Contact() {
  const contacts = [
    { label: "Email", value: "franklin.osuji2@gmail.com", href: "mailto:franklin.osuji2@gmail.com", icon: "@" },
    { label: "Phone", value: "+49 152 59380812", href: "tel:+4915259380812", icon: "â˜Ž" },
    { label: "GitHub", value: "github.com/franklinosuji2-afk", href: "https://github.com/franklinosuji2-afk", icon: "â—‰" },
    { label: "LinkedIn", value: "linkedin.com/in/franklin-osuji-a96003321", href: "https://linkedin.com/in/franklin-osuji-a96003321", icon: "in" },
  ]

  return (
    <section id="contact" className="section-pad" style={{ background: "var(--bg-section)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "42px" }}>
          <div style={{ fontFamily: "monospace", fontSize: "11px", color: "#3b82f6", letterSpacing: "4px", marginBottom: "12px" }}>// CONTACT</div>
          <h2 style={{ fontSize: "clamp(30px,4vw,44px)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>Get in touch</h2>
          <div style={{ width: "40px", height: "2px", background: "#3b82f6", marginBottom: "16px" }} />
          <p style={{ color: "var(--text-secondary)", fontSize: "15px", maxWidth: "680px", lineHeight: 1.8 }}>
            I&apos;m currently open to Cloud Infrastructure, DevOps, Platform, and SRE opportunities in Berlin or remote across Europe.
          </p>
        </div>

        <div className="contact-grid">
          <div style={{ display: "grid", gap: "12px" }}>
            {contacts.map(item => (
              <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined} className="contact-card">
                <span className="contact-icon">{item.icon}</span>
                <span>
                  <span className="contact-label">{item.label}</span>
                  <strong>{item.value}</strong>
                </span>
                <span className="arrow">â†—</span>
              </a>
            ))}
            <a href="/cv.html" target="_blank" rel="noreferrer" className="contact-card">
              <span className="contact-icon">â–¤</span>
              <span><span className="contact-label">Resume</span><strong>Download PDF</strong></span>
              <span className="arrow">â†—</span>
            </a>
          </div>

          <div className="contact-panel">
            <div className="location">
              <span className="contact-icon">â—Ž</span>
              <div><span className="contact-label">Location</span><strong>Berlin, Germany</strong></div>
            </div>

            <div className="availability">
              <div><span>âœ“</span><strong>Niederlassungserlaubnis</strong><small>Permanent work authorisation</small></div>
              <div><span>â—·</span><strong>Available immediately</strong><small>Open to Berlin, hybrid and remote opportunities</small></div>
            </div>

            <div className="languages">
              <span className="contact-label">Languages</span>
              <strong>English â€” Fluent Â· German â€” B2</strong>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-grid { display:grid; grid-template-columns:1fr 1fr; gap:28px; }
        .contact-card { min-height:76px; display:flex; align-items:center; gap:14px; padding:18px 20px; border:1px solid var(--border); border-radius:12px; background:var(--bg-card2); color:inherit; text-decoration:none; transition:.2s ease; }
        .contact-card:hover { border-color:#3b82f655; transform:translateY(-1px); }
        .contact-icon { width:44px; height:44px; flex-shrink:0; display:flex; align-items:center; justify-content:center; border-radius:9px; background:rgba(59,130,246,.09); color:#60a5fa; font-family:monospace; }
        .contact-label { display:block; color:#7f95b5; font-size:11px; margin-bottom:4px; }
        .contact-card strong, .location strong { color:var(--text-primary); font-size:14px; overflow-wrap:anywhere; }
        .arrow { margin-left:auto; color:#536681; }
        .contact-panel { padding:28px; border:1px solid var(--border); border-radius:14px; background:var(--bg-card2); }
        .location { display:flex; gap:14px; align-items:center; margin-bottom:28px; }
        .availability { display:grid; gap:18px; padding:20px; border-radius:11px; background:rgba(59,130,246,.045); border:1px solid rgba(59,130,246,.08); }
        .availability div { display:grid; grid-template-columns:27px 1fr; column-gap:10px; align-items:center; }
        .availability div span { color:#22c55e; font-size:18px; grid-row:span 2; }
        .availability strong { color:var(--text-primary); font-size:13px; }
        .availability small { color:var(--text-secondary); font-size:11px; line-height:1.5; }
        .languages { margin-top:26px; padding-top:20px; border-top:1px solid var(--border); }
        .languages strong { color:var(--text-primary); font-size:13px; }
        @media (max-width:800px) { .contact-grid { grid-template-columns:1fr; } }
      `}</style>
    </section>
  )
}
