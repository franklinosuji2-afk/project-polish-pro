"use client"

const principles = [
  "I prefer infrastructure that can be reproduced and reviewed through code.",
  "I automate repetitive deployment and operational work where it provides clear value.",
  "I use observability to understand system behaviour and troubleshoot failures.",
  "I treat reliability and security as design considerations rather than afterthoughts.",
  "I favour local, repeatable environments when experimenting or validating infrastructure.",
]

export default function Overview() {
  return (
    <section id="overview" className="section-pad" style={{ background: "var(--bg-section)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "40px" }}>
          <div style={{ fontFamily: "monospace", fontSize: "11px", color: "#3b82f6", letterSpacing: "4px", marginBottom: "12px" }}>// HOW_I_WORK</div>
          <h2 style={{ fontSize: "clamp(24px,4vw,38px)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>How I work</h2>
          <div style={{ width: "40px", height: "2px", background: "#3b82f6" }} />
        </div>

        <div style={{ display: "grid", gap: "14px" }}>
          {principles.map((item, index) => (
            <div key={index} style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "18px 20px", border: "1px solid var(--border)", borderRadius: "10px", background: "var(--bg-card)" }}>
              <span style={{ color: "#3b82f6", fontWeight: 700 }}>0{index + 1}</span>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
