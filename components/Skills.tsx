type Skill = { name: string; where: string }
type Group = { title: string; skills: Skill[] }

const groups: Group[] = [
  {
    title: "Cloud",
    skills: [
      { name: "AWS", where: "EC2, S3, VPC, IAM, Lambda, API Gateway, ECS/Fargate, RDS, CloudFormation, Route 53. Used at Macview, DCI, Bridge IT and in freelance work." },
      { name: "Azure", where: "Used at Macview." },
    ],
  },
  {
    title: "Infrastructure as code and automation",
    skills: [
      { name: "Terraform", where: "Macview, DCI, freelance work and PlatformOps-Lab." },
      { name: "Ansible", where: "Personal projects." },
      { name: "Python, Bash", where: "Freelance work, Bridge IT scripting, ChaosForge and CloudPulse." },
      { name: "PowerShell", where: "ChaosForge." },
    ],
  },
  {
    title: "Containers and platform",
    skills: [
      { name: "Docker, Docker Compose", where: "Macview, DCI, Bridge IT and all four projects." },
      { name: "Kubernetes, Helm, Kustomize, Kind", where: "PlatformOps-Lab. RBAC, Ingress, HPA and cluster upgrades in lab projects." },
      { name: "ECS/Fargate", where: "DCI, with Blue/Green deployments." },
      { name: "Argo CD, Flux", where: "PlatformOps-Lab." },
    ],
  },
  {
    title: "CI/CD",
    skills: [
      { name: "GitHub Actions", where: "DCI, PlatformOps-Lab, LocalCloud Control Plane and this site." },
      { name: "Jenkins", where: "DCI." },
      { name: "GitLab CI", where: "Personal projects." },
    ],
  },
  {
    title: "Observability and reliability",
    skills: [
      { name: "Prometheus, Grafana", where: "PlatformOps-Lab and ChaosForge." },
      { name: "Loki", where: "PlatformOps-Lab." },
      { name: "CloudWatch", where: "Bridge IT and freelance work." },
      { name: "OpenTelemetry", where: "Personal projects." },
      { name: "SLOs, MTTR, chaos engineering", where: "ChaosForge." },
    ],
  },
  {
    title: "Security and secrets",
    skills: [
      { name: "Trivy", where: "PlatformOps-Lab and this site's pipeline." },
      { name: "Snyk", where: "PlatformOps-Lab." },
      { name: "AWS KMS, Secrets Manager", where: "Personal projects." },
    ],
  },
  {
    title: "Programming and data",
    skills: [
      { name: "FastAPI", where: "ChaosForge and CloudPulse." },
      { name: "Node.js, JavaScript", where: "LocalCloud Control Plane." },
      { name: "PostgreSQL, SQL", where: "CloudPulse." },
      { name: "Linux administration", where: "Bridge IT and freelance work." },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section section-alt" aria-labelledby="skills-title">
      <div className="container">
        <h2 id="skills-title">Skills</h2>
        <p className="section-intro">
          Each skill names where I used it, so you can check it against the experience and projects above.
        </p>

        <div className="skill-groups">
          {groups.map((group) => (
            <section className="skill-group" key={group.title} aria-label={group.title}>
              <h3>{group.title}</h3>
              <dl>
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <dt>{skill.name}</dt>
                    <dd>{skill.where}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>

        <p className="also">Also working knowledge: DynamoDB, Git, GitHub, JSON persistence.</p>
      </div>
    </section>
  )
}
