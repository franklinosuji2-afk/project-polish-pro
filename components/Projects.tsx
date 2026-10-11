"use client"

type Project = {
  number: string
  title: string
  category: string
  problem: string
  approach: string
  stack: string[]
  shows: string
  image: string
  caption: string
  github: string
  color: string
}

const projects: Project[] = [
  {
    number: "01",
    title: "PlatformOps-Lab",
    category: "KUBERNETES & PLATFORM ENGINEERING",
    problem: "Platform engineering workflows need a repeatable environment for practicing infrastructure, deployment, and observability without relying on paid cloud resources.",
    approach: "Use Terraform and Kind for the platform foundation, then combine Kubernetes, Helm, Kustomize, GitHub Actions, Prometheus, Grafana, and Loki, with Git-based GitOps practices and Trivy and Snyk scanning.",
    stack: ["Terraform", "Kind", "Kubernetes", "Helm", "Kustomize", "Docker Compose", "GitHub Actions", "Prometheus", "Grafana", "Loki", "Argo CD", "Flux", "Trivy", "Snyk"],
    shows: "Reproducible cluster setup, declarative configuration with Kustomize, and metrics and log observability in a local environment.",
    image: "/projects/platformops-lab.png",
    caption: "Architecture diagram — PlatformOps-Lab",
    github: "https://github.com/franklinosuji2-afk/PlatformOps-Lab",
    color: "#8b5cf6",
  },
  {
    number: "02",
    title: "LocalCloud Control Plane",
    category: "PLATFORM ENGINEERING",
    problem: "A local platform needs a clear control plane for services, deployments, lifecycle events, and simulated operational state.",
    approach: "Separate the React dashboard, Node.js/Express API, service management, orchestration, lifecycle events, state persistence, and metrics simulation into clear components.",
    stack: ["React", "Vite", "Node.js", "Express", "Docker", "Docker Compose", "GitHub Actions"],
    shows: "Control-plane design with service lifecycle, deployment state, and event logging separated into clear components, running fully locally.",
    image: "/projects/localcloud-control-plane.png",
    caption: "Architecture diagram — LocalCloud Control Plane",
    github: "https://github.com/franklinosuji2-afk/LocalCloud-Control-Plane",
    color: "#3b82f6",
  },
  {
    number: "03",
    title: "ChaosForge",
    category: "SRE & CHAOS ENGINEERING",
    problem: "Reliability assumptions are difficult to validate without deliberately introducing controlled failures.",
    approach: "Run local failure experiments against containerized workloads, observe detection and recovery, and use reliability signals to inspect the experiment.",
    stack: ["Python", "FastAPI", "Docker", "PowerShell", "Prometheus", "Grafana"],
    shows: "Controlled failure injection with detection, recovery, MTTR, and SLO evaluation built into the experiment workflow.",
    image: "/projects/chaosforge.png",
    caption: "Architecture diagram — ChaosForge",
    github: "https://github.com/franklinosuji2-afk/chaosforge",
    color: "#ef4444",
  },
  {
    number: "04",
    title: "CloudPulse",
    category: "CLOUD OBSERVABILITY",
    problem: "Operational metrics become more useful when they can be ingested, processed, persisted, and exposed through a consistent interface.",
    approach: "Use containerized FastAPI services to process metrics, surface anomaly and health signals, persist data in PostgreSQL, and expose REST endpoints.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Docker", "REST API"],
    shows: "Backend development, data handling, and containerized delivery of an observability tool.",
    image: "/projects/cloudpulse.png",
    caption: "Architecture diagram — CloudPulse",
    github: "https://github.com/franklinosuji2-afk/cloudpulse",
    color: "#22c55e",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-pad" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-heading">
          <div className="eyebrow">// PROJECTS</div>
          <h2 id="projects-title">Selected Engineering Work</h2>
          <p>Personal projects covering platform engineering, Kubernetes, SRE, cloud operations, and observability.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.number} className="project-card" style={{ "--accent": project.color } as React.CSSProperties}>
              <div className="project-top">
                <div>
                  <div className="project-number">PROJECT {project.number}</div>
                  <div className="project-category">{project.category}</div>
                  <h3>{project.title}</h3>
                </div>
                <a className="repo-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} GitHub repository`}>
                  GitHub →
                </a>
              </div>

              <div className="project-grid">
                <div className="project-fact">
                  <span>PROBLEM</span>
                  <p>{project.problem}</p>
                </div>
                <div className="project-fact">
                  <span>APPROACH</span>
                  <p>{project.approach}</p>
                </div>
                <div className="project-fact">
                  <span>STACK</span>
                  <div className="tag-list">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
                <div className="project-fact">
                  <span>DEMONSTRATES</span>
                  <p>{project.shows}</p>
                </div>
              </div>

              <figure className="architecture">
                <img src={project.image} alt={`${project.title} architecture diagram`} loading="lazy" />
                <figcaption>{project.caption}</figcaption>
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
