"use client"

const exps = [
  {
    title: "Cloud Engineer",
    company: "Macview - Contract",
    location: "Remote",
    period: "APR 2026 - PRESENT",
    type: "Contract",
    bullets: [
      "Design and deploy cloud infrastructure across AWS and Azure, with emphasis on reliability, scalability, security, and operational efficiency.",
      "Automate infrastructure provisioning and deployment workflows using Terraform and CI/CD practices.",
      "Build and support containerized workloads using Docker and cloud-native services.",
      "Troubleshoot infrastructure and deployment issues and contribute to improving platform reliability and delivery efficiency.",
    ],
    tags: ["AWS", "Azure", "Terraform", "Docker", "CI/CD"],
  },
  {
    title: "Cloud Infrastructure & DevOps Engineering Trainee",
    company: "Digital Career Institute (DCI)",
    location: "Berlin, Germany",
    period: "NOV 2024 - MAR 2026",
    type: "Training",
    bullets: [
      "Built CI/CD pipelines with Jenkins and GitHub Actions for repeatable software delivery.",
      "Developed infrastructure as code with Terraform and worked hands-on with EC2, S3, IAM, VPC, Lambda, and RDS.",
      "Deployed ECS/Fargate workloads using Blue/Green deployment strategies.",
    ],
    tags: ["AWS", "Jenkins", "Terraform", "Docker", "GitHub Actions", "ECS/Fargate"],
  },
  {
    title: "Cloud & DevOps Consultant / Freelancer",
    company: "Independent",
    location: "Remote",
    period: "JUL 2023 - AUG 2024",
    type: "Freelance",
    bullets: [
      "Automated cloud provisioning and deployment processes for client environments using AWS, Docker, and scripting.",
      "Diagnosed Linux, infrastructure, and deployment issues to maintain system reliability.",
      "Supported CI/CD workflow implementation and Oracle E-Business Suite operational environments.",
    ],
    tags: ["AWS", "Docker", "CI/CD", "Linux", "Python", "Bash", "Oracle EBS"],
  },
  {
    title: "E-Commerce & Digital Marketing Specialist",
    company: "Paper & Tea",
    location: "Berlin, Germany",
    period: "MAR 2020 - APR 2023",
    type: "Full-time",
    bullets: [
      "Automated reporting workflows with Bash and Python and improved website performance and operational efficiency.",
      "Supported technical website optimization and digital operations.",
    ],
    tags: ["Python", "Bash", "Analytics", "Digital Operations"],
  },
]

const typeColor: Record<string, { color: string; border: string; bg: string }> = {
  Contract: { color: "#4ade80", border: "rgba(74,222,128,.3)", bg: "rgba(74,222,128,.05)" },
  Training: { color: "#60a5fa", border: "rgba(96,165,250,.3)", bg: "rgba(96,165,250,.05)" },
  Freelance: { color: "#c084fc", border: "rgba(192,132,252,.3)", bg: "rgba(192,132,252,.05)" },
  "Full-time": { color: "#34d399", border: "rgba(52,211,153,.3)", bg: "rgba(52,211,153,.05)" },
}

export default function Experience() {
  return (
    <section id="experience" className="section-pad" style={{ background: "var(--bg-section)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "48px" }}>
          <div style={{ fontFamily: "monospace", fontSize: "11px", color: "#3b82f6", letterSpacing: "4px", marginBottom: "12px" }}>// EXPERIENCE</div>
          <h2 style={{ fontSize: "clamp(24px,4vw,38px)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>Career Timeline</h2>
          <div style={{ width: "40px", height: "2px", background: "#3b82f6" }} />
        </div>

        <div style={{ position: "relative", paddingLeft: "32px" }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "1px", background: "linear-gradient(to bottom,#3b82f6,var(--border))" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {exps.map((exp, i) => {
              const tc = typeColor[exp.type]
              return (
                <div key={i} style={{ position: "relative", padding: "24px", borderRadius: "12px", border: "1px solid var(--border)", background: "var(--bg-card)" }}>
                  <div style={{ position: "absolute", left: "-40px", top: "28px", width: "16px", height: "16px", borderRadius: "50%", border: `2px solid ${i === 0 ? "#4ade80" : "#3b82f6"}`, background: "var(--bg-primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: i === 0 ? "#4ade80" : "#3b82f6" }} />
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px", flexWrap: "wrap" }}>
                        <h3 style={{ fontSize: "17px", fontWeight: 700, color: "var(--text-primary)" }}>{exp.title}</h3>
                        {i === 0 && <span style={{ fontSize: "11px", fontFamily: "monospace", padding: "2px 8px", borderRadius: "999px", color: "#4ade80", border: "1px solid rgba(74,222,128,.3)", background: "rgba(74,222,128,.05)" }}>CURRENT</span>}
                      </div>
                      <div style={{ fontSize: "13px", color: "var(--text-secondary)" }}>{exp.company} | {exp.location}</div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px" }}>
                      <span style={{ fontFamily: "monospace", fontSize: "12px", color: "#3b82f6" }}>{exp.period}</span>
                      <span style={{ fontFamily: "monospace", fontSize: "10px", padding: "2px 8px", borderRadius: "4px", color: tc.color, border: `1px solid ${tc.border}`, background: tc.bg }}>{exp.type}</span>
                    </div>
                  </div>

                  <ul style={{ listStyle: "none", marginBottom: "16px" }}>
                    {exp.bullets.map((b, j) => (
                      <li key={j} style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text-secondary)", marginBottom: "8px", lineHeight: 1.6 }}>
                        <span style={{ color: "#3b82f6", flexShrink: 0 }}>-</span>{b}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {exp.tags.map(t => (
                      <span key={t} style={{ padding: "2px 10px", fontSize: "11px", borderRadius: "4px", border: "1px solid var(--border)", color: "var(--text-muted)", fontFamily: "monospace" }}>{t}</span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
