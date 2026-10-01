"use client"

const groups = [
  { title: "Cloud", items: ["AWS", "Azure", "EC2", "S3", "VPC", "IAM", "Lambda", "RDS", "Route 53", "CloudWatch"] },
  { title: "Infrastructure", items: ["Terraform", "Infrastructure as code", "Linux", "PowerShell", "Bash"] },
  { title: "Containers", items: ["Docker", "Docker Compose", "Kubernetes", "Helm", "Kustomize"] },
  { title: "CI/CD", items: ["GitHub Actions", "Jenkins", "Git", "GitHub"] },
  { title: "Observability", items: ["Prometheus", "Grafana", "Loki", "CloudWatch", "Monitoring", "Incident response"] },
  { title: "Programming", items: ["Python", "FastAPI", "Node.js", "JavaScript", "SQL", "PostgreSQL"] },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="section-pad" style={{ background: "var(--bg-primary)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "32px" }}>
          <div style={{ fontFamily: "monospace", fontSize: "11px", color: "#3b82f6", letterSpacing: "4px", marginBottom: "12px" }}>// TECH_STACK</div>
          <h2 style={{ fontSize: "clamp(24px,4vw,38px)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>Tooling and practices</h2>
          <div style={{ width: "40px", height: "2px", background: "#3b82f6" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "18px" }}>
          {groups.map((group) => (
            <div key={group.title} style={{ padding: "20px", borderRadius: "12px", border: "1px solid var(--border)", background: "var(--bg-card)" }}>
              <div style={{ fontFamily: "monospace", fontSize: "10px", color: "#60a5fa", letterSpacing: "2px", marginBottom: "12px" }}>{group.title.toUpperCase()}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {group.items.map((item) => (
                  <span key={item} style={{ padding: "4px 8px", borderRadius: "999px", border: "1px solid var(--border)", fontSize: "11px", color: "var(--text-secondary)", fontFamily: "monospace" }}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

