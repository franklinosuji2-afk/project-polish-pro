"use client"

import { useState, useEffect } from "react"

const lines = [
  "franklin@portfolio:~",
  "ready",
  "// What I work on",
  "focus INFRASTRUCTURE",
  "work AUTOMATION",
  "interest RELIABILITY",
  "location BERLIN",
]

export default function Hero() {
  const [displayed, setDisplayed] = useState<string[]>([])
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [current, setCurrent] = useState("")

  useEffect(() => {
    if (lineIdx >= lines.length) return
    if (charIdx < lines[lineIdx].length) {
      const t = setTimeout(() => {
        setCurrent((p) => p + lines[lineIdx][charIdx])
        setCharIdx((c) => c + 1)
      }, lines[lineIdx].startsWith("//") ? 20 : 30)
      return () => clearTimeout(t)
    }

    const t = setTimeout(() => {
      setDisplayed((p) => [...p, lines[lineIdx]])
      setCurrent("")
      setCharIdx(0)
      setLineIdx((l) => l + 1)
    }, 260)
    return () => clearTimeout(t)
  }, [lineIdx, charIdx])

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px 24px 48px",
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.04) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle,rgba(59,130,246,0.06) 0%,transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "5px 12px",
              borderRadius: "6px",
              border: "1px solid rgba(249,115,22,0.4)",
              background: "rgba(249,115,22,0.06)",
            }}
          >
            <div
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                background: "linear-gradient(135deg,#f97316,#ea580c)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "#fff", fontWeight: 900, fontSize: "7px", fontFamily: "monospace" }}>AWS</span>
            </div>
            <span style={{ fontSize: "12px", color: "#f97316", fontFamily: "monospace" }}>AWS Certified</span>
          </div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "5px 12px",
              borderRadius: "6px",
              border: "1px solid var(--border)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <span style={{ fontSize: "12px", color: "var(--text-secondary)", fontFamily: "monospace" }}>Berlin, Germany</span>
          </div>
        </div>

        <div className="hero-grid">
          <div>
            <h1 style={{ fontSize: "clamp(28px,4.5vw,54px)", fontWeight: 800, color: "var(--text-primary)", lineHeight: 1.1, marginBottom: "20px", letterSpacing: "-0.5px" }}>
              Cloud & DevOps Engineer â€” AWS, Terraform, Kubernetes
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "clamp(14px,2vw,17px)", lineHeight: 1.8, marginBottom: "32px", maxWidth: "520px" }}>
              I design, automate, and support cloud infrastructure and deployment workflows across AWS, Azure, Terraform, Docker, Kubernetes, Linux, and CI/CD tooling.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(110px, 1fr))", gap: "12px", marginBottom: "32px" }}>
              <div style={{ padding: "14px", borderRadius: "8px", border: "1px solid var(--border)", background: "rgba(255,255,255,0.02)", textAlign: "center" }}>
                <div style={{ fontSize: "clamp(20px,3vw,28px)", fontWeight: 800, color: "#3b82f6", marginBottom: "2px" }}>5+</div>
                <div style={{ fontSize: "11px", color: "var(--text-secondary)", fontFamily: "monospace" }}>Years</div>
              </div>
              <div style={{ padding: "14px", borderRadius: "8px", border: "1px solid var(--border)", background: "rgba(255,255,255,0.02)", textAlign: "center" }}>
                <div style={{ fontSize: "clamp(20px,3vw,28px)", fontWeight: 800, color: "#3b82f6", marginBottom: "2px" }}>AWS</div>
                <div style={{ fontSize: "11px", color: "var(--text-secondary)", fontFamily: "monospace" }}>Cloud</div>
              </div>
              <div style={{ padding: "14px", borderRadius: "8px", border: "1px solid var(--border)", background: "rgba(255,255,255,0.02)", textAlign: "center" }}>
                <div style={{ fontSize: "clamp(20px,3vw,28px)", fontWeight: 800, color: "#3b82f6", marginBottom: "2px" }}>Berlin</div>
                <div style={{ fontSize: "11px", color: "var(--text-secondary)", fontFamily: "monospace" }}>Location</div>
              </div>
            </div>
          </div>

          <div style={{ padding: "22px", borderRadius: "18px", border: "1px solid var(--border)", background: "rgba(6,10,15,0.75)", boxShadow: "0 0 0 1px rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", borderBottom: "1px solid var(--border)", paddingBottom: "10px", marginBottom: "16px" }}>
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444" }} />
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f59e0b" }} />
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#22c55e" }} />
              <span style={{ marginLeft: "10px", fontSize: "11px", color: "var(--text-muted)", fontFamily: "monospace" }}>portfolio</span>
            </div>

            <div style={{ fontFamily: "JetBrains Mono, monospace", color: "#c6d4f1", fontSize: "13px", lineHeight: 1.9 }}>
              {displayed.map((line, index) => (
                <div key={index} style={{ whiteSpace: "pre-wrap" }}>{line}</div>
              ))}
              {lineIdx < lines.length && <div style={{ whiteSpace: "pre-wrap" }}>{current || ""}</div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
