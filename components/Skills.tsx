"use client"

const groups = [
  { title: "Cloud", items: ["AWS", "Azure", "EC2", "S3", "VPC", "IAM", "Lambda", "API Gateway", "ECS/Fargate", "RDS", "CloudFormation", "Route 53"] },
  { title: "IaC & Automation", items: ["Terraform", "Ansible", "Bash", "PowerShell", "Deployment automation"] },
  { title: "Containers & Platform", items: ["Docker", "Docker Compose", "Kubernetes", "Helm", "Kustomize", "Kind", "ECS/Fargate", "Argo CD", "Flux", "GitOps concepts", "Kubernetes RBAC (lab)", "Ingress (lab)", "HPA (lab)", "Cluster upgrades (lab)"] },
  { title: "CI/CD & Version Control", items: ["GitHub Actions", "Jenkins", "GitLab CI", "Git", "GitHub", "Code review"] },
  { title: "Observability & Reliability", items: ["CloudWatch", "Prometheus", "Grafana", "Loki", "OpenTelemetry", "Incident response", "SRE", "Chaos engineering", "SLOs/SLIs", "MTTR"] },
  { title: "Security & Secrets (project experience)", items: ["Trivy", "Snyk", "AWS KMS", "AWS Secrets Manager"] },
  { title: "Programming & Scripting", items: ["Python", "FastAPI", "Node.js", "JavaScript", "Bash", "SQL"] },
  { title: "Data & Systems", items: ["PostgreSQL", "DynamoDB", "JSON persistence", "Linux administration"] },
]

export default function Skills() {
  return (
    <section id="skills" className="section-pad" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-heading">
          <div className="eyebrow">// SKILLS</div>
          <h2 id="skills-title">Technical Skills</h2>
          <p>Tools and technologies I use across client work, training, and personal projects.</p>
        </div>
        <div className="skills-grid">
          {groups.map((group) => (
            <article className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tag-list">
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
