"use client"

const skillGroups = [
  { title: "Cloud", skills: ["AWS", "Azure", "EC2", "S3", "VPC", "IAM", "Lambda", "ECS/Fargate", "RDS", "CloudFormation", "Route 53", "CloudWatch"] },
  { title: "IaC", skills: ["Terraform", "AWS CloudFormation"] },
  { title: "Containers", skills: ["Docker", "Kubernetes", "Helm", "ECS/Fargate", "Kustomize", "GitOps concepts"] },
  { title: "CI/CD", skills: ["GitHub Actions", "Jenkins", "PowerShell", "Bash", "Deployment automation"] },
  { title: "Observability", skills: ["CloudWatch", "Prometheus", "Grafana", "Loki", "Incident Response", "SRE", "Chaos Engineering", "SLOs", "MTTR"] },
  { title: "Programming", skills: ["Python", "FastAPI", "Node.js", "JavaScript", "Bash", "SQL", "Linux"] },
  { title: "Data", skills: ["PostgreSQL", "DynamoDB", "JSON", "Git", "GitHub"] },
]

const howIWork = [
  "I prefer infrastructure that can be reproduced and reviewed through code.",
  "I automate repetitive deployment and operational work where it provides clear value.",
  "I use observability to understand system behaviour and troubleshoot failures.",
  "I treat reliability and security as design considerations rather than afterthoughts.",
  "I favour local, repeatable environments when experimenting or validating infrastructure.",
]

export default function Skills() {
  return (
    <section id="skills" className="section-pad" style={{ background: "#0a0e17" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "40px" }}>
          <div style={{ fontFamily: "monospace", fontSize: "11px", color: "#3b82f6", letterSpacing: "4px", marginBottom: "12px" }}>// SKILLS</div>
          <h2 style={{ fontSize: "clamp(24px,4vw,38px)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>Skills</h2>
          <div style={{ width: "40px", height: "2px", background: "#3b82f6" }} />
        </div>

        <div className="grid-3col" style={{ marginBottom: "40px" }}>
          {skillGroups.map((group) => (
            <div key={group.title} style={{ padding: "20px", borderRadius: "12px", border: "1px solid rgba(96,165,250,0.2)", background: "rgba(96,165,250,0.04)" }}>
              <h3 style={{ fontSize: "11px", fontWeight: 600, fontFamily: "monospace", color: "#60a5fa", marginBottom: "14px", letterSpacing: "2px" }}>{group.title.toUpperCase()}</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {group.skills.map((skill) => (
                  <span key={skill} style={{ padding: "3px 8px", fontSize: "11px", borderRadius: "4px", border: "1px solid var(--border)", color: "var(--text-secondary)", background: "rgba(255,255,255,0.02)", fontFamily: "monospace" }}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ padding: "24px", borderRadius: "12px", border: "1px solid var(--border)", background: "var(--bg-card)" }}>
          <div style={{ fontFamily: "monospace", fontSize: "11px", color: "#3b82f6", letterSpacing: "2px", marginBottom: "14px" }}>HOW_I_WORK</div>
          <div style={{ display: "grid", gap: "10px" }}>
            {howIWork.map((item) => (
              <div key={item} style={{ display: "flex", gap: "12px", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                <span style={{ color: "#3b82f6", flexShrink: 0 }}>â€¢</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
