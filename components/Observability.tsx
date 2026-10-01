"use client"

export default function Observability() {
  return (
    <section id="observability" className="section-pad" style={{ background: "var(--bg-section)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ fontFamily: "monospace", fontSize: "11px", color: "#06b6d4", letterSpacing: "4px", marginBottom: "12px" }}>// OBSERVABILITY</div>
        <h2 style={{ fontSize: "clamp(24px,4vw,38px)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>Observability & reliability practice</h2>
        <div style={{ width: "40px", height: "2px", background: "#06b6d4", marginBottom: "16px" }} />
        <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
          I use monitoring and troubleshooting workflows to understand system behaviour, identify issues, and support recovery planning. Where a real dashboard or measurable result is available, I include it; otherwise I leave a placeholder for later review.
        </p>
        <div style={{ marginTop: "20px", fontFamily: "monospace", color: "var(--text-muted)" }}>[ADD: real Grafana dashboard screenshot from ChaosForge or PlatformOps-Lab]</div>
      </div>
    </section>
  )
}
