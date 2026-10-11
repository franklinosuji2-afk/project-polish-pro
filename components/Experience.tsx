const roles = [
  {
    title: "Cloud Engineer",
    company: "Macview",
    place: "Remote",
    when: "Apr 2026 – present",
    type: "Contract",
    bullets: [
      "Design and deploy cloud infrastructure across AWS and Azure with an emphasis on reliability, scalability, security and operational efficiency.",
      "Automate infrastructure provisioning and deployment workflows using Terraform and CI/CD practices.",
      "Build and support containerized workloads with Docker and cloud-native services across multiple environments.",
      "Diagnose and resolve infrastructure and deployment issues, contributing to platform reliability and delivery efficiency.",
    ],
  },
  {
    title: "Cloud & DevOps Engineer",
    company: "DCI Digital Career Institute",
    place: "Berlin, Germany",
    when: "Nov 2024 – Mar 2026",
    type: "Work-study alongside the DevOps & Cloud Engineering program",
    bullets: [
      "Built CI/CD pipelines with Jenkins and GitHub Actions for repeatable, automated build and deployment.",
      "Developed infrastructure as code with Terraform and worked hands-on with EC2, S3, IAM, VPC, Lambda and RDS.",
      "Delivered containerized workloads on AWS ECS/Fargate using Terraform and Docker, applying multiple deployment strategies, including Blue/Green.",
    ],
  },
  {
    title: "DevOps Engineer",
    company: "Bridge IT Engineering",
    place: "Berlin, Germany",
    when: "Nov 2022 – Nov 2024",
    type: "Contract",
    bullets: [
      "Automated AWS provisioning and deployment workflows with Docker and scripting to make client and team environments repeatable.",
      "Operated and supported Linux infrastructure and CI/CD pipelines day to day, troubleshooting issues and keeping environments stable.",
    ],
  },
  {
    title: "Consultant / Freelancer Cloud & DevOps Engineer",
    company: "Basecamp: Outdoor Jobs, Freelance Gigs, Networking",
    place: "Berlin, Germany",
    when: "Aug 2021 – Nov 2022",
    type: "Freelance",
    bullets: [
      "Delivered cloud infrastructure and deployment automation for client environments on AWS using Terraform, Python and Bash, and supported their Linux systems.",
    ],
  },
  {
    title: "Cloud Support Engineer",
    company: "Cisco Networking Academy",
    place: "Berlin, Germany",
    when: "Mar 2019 – Aug 2021",
    type: "Apprenticeship",
    bullets: [
      "Supported cloud infrastructure, containers, networking and CI/CD in a hands-on role; handled technical troubleshooting.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <h2 id="experience-title">Experience</h2>

        {roles.map((role) => (
          <article className="role" key={role.company}>
            <div className="role-when">
              <p className="dates">{role.when}</p>
              <p className="role-type">{role.type}</p>
            </div>
            <div className="role-body">
              <h3>{role.title}</h3>
              <p className="company">{role.company}, {role.place}</p>
              <ul className="plain-list">
                {role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </div>
          </article>
        ))}

        <p className="earlier">
          Earlier: E-commerce &amp; Digital Marketing at PAPER &amp; TEA (Aug 2017 – Feb 2019) and Salesperson at Modulor GmbH
          (Aug 2016 – Aug 2017), both in Berlin.
        </p>
      </div>
    </section>
  )
}
