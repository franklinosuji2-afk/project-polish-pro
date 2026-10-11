"use client"

const exps = [
  {
    title: "Cloud Engineer",
    company: "Macview",
    location: "Remote",
    period: "APR 2026 - PRESENT",
    type: "Contract",
    bullets: [
      "Design and deploy cloud infrastructure across AWS and Azure with an emphasis on reliability, scalability, security and operational efficiency.",
      "Automate infrastructure provisioning and deployment workflows using Terraform and CI/CD practices.",
      "Build and support containerized workloads with Docker and cloud-native services across multiple environments.",
      "Diagnose and resolve infrastructure and deployment issues, contributing to platform reliability and delivery efficiency.",
    ],
    tags: ["AWS", "Azure", "Terraform", "Docker", "CI/CD"],
  },
  {
    title: "Cloud & DevOps Engineer",
    company: "DCI Digital Career Institute",
    location: "Berlin, Germany",
    period: "NOV 2024 - MAR 2026",
    type: "Work Study",
    bullets: [
      "Built CI/CD pipelines with Jenkins and GitHub Actions for repeatable, automated build and deployment.",
      "Developed infrastructure as code with Terraform and worked hands-on with EC2, S3, IAM, VPC, Lambda and RDS.",
      "Delivered containerized workloads on AWS ECS/Fargate using Terraform and Docker, applying multiple deployment strategies, including Blue/Green.",
    ],
    tags: ["AWS", "Jenkins", "Terraform", "Docker", "GitHub Actions", "ECS/Fargate"],
  },
  {
    title: "DevOps Engineer",
    company: "Bridge IT Engineering",
    location: "Berlin, Germany",
    period: "NOV 2022 - NOV 2024",
    type: "Contract",
    bullets: [
      "Automated AWS provisioning and deployment workflows with Docker and scripting to make client and team environments repeatable.",
      "Operated and supported Linux infrastructure and CI/CD pipelines day to day, troubleshooting issues and keeping environments stable.",
    ],
    tags: ["AWS", "EC2", "S3", "Lambda", "API Gateway", "CloudWatch", "Python", "Terraform", "Bash"],
  },
  {
    title: "Consultant / Freelancer Cloud & DevOps Engineer",
    company: "Basecamp: Outdoor Jobs, Freelance Gigs, Networking",
    location: "Berlin, Germany",
    period: "AUG 2021 - NOV 2022",
    type: "Freelance",
    bullets: [
      "Delivered cloud infrastructure and deployment automation for client environments on AWS using Terraform, Python and Bash, and supported their Linux systems.",
    ],
    tags: ["AWS", "EC2", "S3", "Lambda", "API Gateway", "CloudWatch", "Python", "Terraform", "Bash"],
  },
  {
    title: "Cloud Support Engineer",
    company: "Cisco Networking Academy",
    location: "Berlin, Germany",
    period: "MAR 2019 - AUG 2021",
    type: "Apprenticeship",
    bullets: [
      "Supported cloud infrastructure, containers, networking and CI/CD in a hands-on role; handled technical troubleshooting.",
    ],
    tags: ["Cloud", "Containers", "Networking", "CI/CD", "Troubleshooting"],
  },
]

const typeColor: Record<string, string> = {
  Contract: "#4ade80",
  Freelance: "#c084fc",
  "Full-time": "#34d399",
  "Work Study": "#60a5fa",
  Apprenticeship: "#a78bfa",
}

export default function Experience() {
  return (
    <section id="experience" className="section-pad" aria-labelledby="experience-title">
      <div className="container">
        <div className="section-heading">
          <div className="eyebrow">// EXPERIENCE</div>
          <h2 id="experience-title">Career Timeline</h2>
          <p>Cloud and DevOps roles from apprenticeship to current contract work, followed by a note on earlier experience.</p>
        </div>

        <div className="timeline">
          {exps.map((exp, index) => (
            <article key={exp.company} className="experience-card">
              <div className="timeline-dot" aria-hidden="true" />
              <div className="experience-header">
                <div>
                  <div className="experience-title-row">
                    <h3>{exp.title}</h3>
                    {index === 0 && <span className="current-badge">CURRENT</span>}
                  </div>
                  <p className="company-line">{exp.company} · {exp.location}</p>
                </div>
                <div className="experience-meta">
                  <span>{exp.period}</span>
                  <b style={{ color: typeColor[exp.type] }}>{exp.type}</b>
                </div>
              </div>
              <ul>
                {exp.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
              <div className="tag-list">
                {exp.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>

        <div className="earlier-experience">
          <span>EARLIER EXPERIENCE</span>
          <p>PAPER &amp; TEA — E-commerce &amp; Digital Marketing (Aug 2017–Feb 2019) · Modulor GmbH — Salesperson (Aug 2016–Aug 2017)</p>
        </div>
      </div>
    </section>
  )
}
