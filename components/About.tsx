"use client"

const roleFocus = [
  "Cloud Infrastructure Engineer",
  "DevOps Engineer",
  "Cloud Engineer",
  "Platform Engineer",
  "Site Reliability Engineer (SRE)",
  "Cloud Platform Engineer",
  "Infrastructure Automation Engineer",
  "Cloud Architect / Infrastructure Architect",
  "Cloud Consultant",
  "Cloud Migration Engineer",
  "FinOps Engineer",
  "Technical Account Manager (TAM)",
  "Solutions Engineer",
]

export default function About() {
  return (
    <section id="about" className="section-pad" style={{ background: "var(--bg-section)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "40px" }}>
          <div style={{ fontFamily: "monospace", fontSize: "11px", color: "#3b82f6", letterSpacing: "4px", marginBottom: "12px" }}>
            // ABOUT_ME
          </div>
          <h2 style={{ fontSize: "clamp(24px,4vw,38px)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>
            Professional Summary
          </h2>
          <div style={{ width: "40px", height: "2px", background: "#3b82f6" }} />
        </div>

        <div style={{ maxWidth: "1000px" }}>
          <p style={{ color: "var(--text-secondary)", fontSize: "clamp(14px,2vw,17px)", lineHeight: 1.8, marginBottom: "20px" }}>
            <strong style={{ color: "var(--text-primary)" }}>Cloud Infrastructure & DevOps Engineer</strong> with 4+ years of combined engineering, consulting, and digital operations experience. Hands-on with AWS infrastructure, Terraform, Docker, Kubernetes, ECS/Fargate, Linux, and CI/CD automation.
          </p>

          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "20px" }}>
            Builds repeatable infrastructure and deployment workflows with a focus on reliability, security, performance, and cost efficiency. Experienced across AWS and Azure cloud infrastructure, infrastructure-as-code, containerized workloads, deployment automation, troubleshooting, and operational reliability.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "28px" }}>
            <span className="about-badge">Berlin, Germany</span>
            <span className="about-badge">Niederlassungserlaubnis (Permanent)</span>
            <span className="about-badge">Available Immediately</span>
            <span className="about-badge">English - Fluent</span>
            <span className="about-badge">German - B2</span>
          </div>

          <div style={{ padding: "18px 20px", borderRadius: "12px", border: "1px solid var(--border)", background: "var(--bg-card)" }}>
            <div style={{ fontFamily: "monospace", fontSize: "10px", color: "#3b82f6", marginBottom: "14px", letterSpacing: "2px" }}>ROLE_FOCUS</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: "8px" }}>
              {roleFocus.map((role) => (
                <div key={role} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 10px", borderRadius: "7px", background: "#111820", border: "1px solid #182535", color: "#c9d1d9", fontSize: "11px", lineHeight: 1.4 }}>
                  <span style={{ color: "#3b82f6", fontSize: "10px" }}></span>{role}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-badge { padding: 6px 10px; border: 1px solid var(--border); border-radius: 6px; color: var(--text-muted); font: 11px monospace; }
      `}</style>
    </section>
  )
}
