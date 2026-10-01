"use client"

const practices = [
  "least privilege",
  "secrets should not be hardcoded",
  "network exposure should be minimized",
  "encryption should be considered for sensitive data",
  "CI/CD credentials should use appropriate identity mechanisms",
  "dependencies and container images should be reviewed where applicable",
]

export default function Security() {
  return (
    <section id="security" className="section-pad" style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "30px" }}>
          <div style={{ fontFamily: "monospace", fontSize: "11px", color: "#ef4444", letterSpacing: "4px", marginBottom: "12px" }}>// SECURITY</div>
          <h2 style={{ fontSize: "clamp(24px,4vw,38px)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>How I approach security</h2>
        </div>
        <ul style={{ display: "grid", gap: "12px", paddingLeft: "20px", color: "var(--text-secondary)", lineHeight: 1.8 }}>
          {practices.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
