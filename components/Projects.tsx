type Project = {
  title: string
  lead: string
  shows: string[]
  stack: string
  image: string
  width: number
  height: number
  github: string
  // Optional. They only render when you fill them in, so the page never shows empty placeholders.
  result?: string
  demo?: string
  proof?: { image: string; alt: string; caption: string; width: number; height: number }[]
}

const projects: Project[] = [
  {
    title: "PlatformOps-Lab",
    lead: "A local Kubernetes platform for practising infrastructure, deployment and observability without paid cloud resources.",
    shows: [
      "A Kind cluster with Kustomize base and overlay manifests, plus a Terraform example for the namespace.",
      "Argo CD syncing the overlay from this repository, so the app deploys and stays healthy from Git.",
      "A Docker Compose observability stack: Prometheus scraping the API, a Grafana dashboard and Loki logs through promtail.",
      "GitHub Actions that validate Compose, Kustomize and Terraform, build the images and report Trivy findings.",
    ],
    stack: "Terraform, Kind, Kubernetes, Kustomize, Argo CD, Docker Compose, GitHub Actions, Prometheus, Grafana, Loki, promtail, Trivy",
    image: "/projects/platformops-lab.png",
    width: 1800,
    height: 900,
    github: "https://github.com/franklinosuji2-afk/PlatformOps-Lab",
    proof: [
      { image: "/projects/platformops-lab-grafana.png", alt: "Grafana dashboard for the PlatformOps API showing request rate, latency, memory, CPU and logs from Loki", caption: "Grafana: request rate, p95 latency, memory, CPU and API logs from Loki", width: 1500, height: 745 },
      { image: "/projects/platformops-lab-argocd.png", alt: "Argo CD application platformops, Healthy and Synced to main, with its namespace, services, deployments and pods", caption: "Argo CD: platformops is Healthy and Synced to main", width: 1500, height: 742 },
    ],
  },
  {
    title: "ChaosForge",
    lead: "A local reliability lab that injects controlled failures into containerized workloads and measures detection, recovery, MTTR and SLO impact.",
    shows: [
      "Failure experiments run from PowerShell against Docker workloads.",
      "Detection and recovery tracked with Prometheus and Grafana.",
      "MTTR measurement and SLO evaluation built into the workflow.",
    ],
    stack: "Python, FastAPI, Docker, PowerShell, Prometheus, Grafana",
    image: "/projects/chaosforge.png",
    width: 1800,
    height: 840,
    github: "https://github.com/franklinosuji2-afk/chaosforge",
  },
  {
    title: "CloudPulse",
    lead: "A cloud operations project that ingests metrics, detects anomalies and exposes health information through a REST API.",
    shows: [
      "Containerized FastAPI services that ingest and process operational metrics.",
      "Anomaly detection and health signals persisted in PostgreSQL.",
      "A reusable REST API for dashboards and alerting integrations.",
    ],
    stack: "Python, FastAPI, PostgreSQL, Docker, REST API",
    image: "/projects/cloudpulse.png",
    width: 1800,
    height: 840,
    github: "https://github.com/franklinosuji2-afk/cloudpulse",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <h2 id="projects-title">Projects</h2>
        <p className="section-intro">
          Three projects I would walk you through. Each one links to its source and shows its architecture.
        </p>

        {projects.map((project) => (
          <article className="project" key={project.title}>
            <div className="project-text">
              <h3>
                <a href={project.github} target="_blank" rel="noreferrer">{project.title}</a>
              </h3>
              <p className="project-lead">{project.lead}</p>

              <h4>What it shows</h4>
              <ul className="plain-list">
                {project.shows.map((item) => <li key={item}>{item}</li>)}
              </ul>

              <h4>Built with</h4>
              <p className="stack">{project.stack}</p>

              {project.result && (
                <>
                  <h4>Result</h4>
                  <p>{project.result}</p>
                </>
              )}
              {project.demo && (
                <p><a className="text-link" href={project.demo} target="_blank" rel="noreferrer">Watch the demo</a></p>
              )}
              <p>
                <a className="text-link" href={project.github} target="_blank" rel="noreferrer">View source on GitHub</a>
              </p>
            </div>
            <div className="project-visuals">
              <figure className="project-figure">
                <a href={project.image} target="_blank" rel="noreferrer" aria-label={`Open the ${project.title} architecture diagram full size`}>
                  <img src={project.image} alt={`${project.title} architecture diagram`} width={project.width} height={project.height} loading="lazy" />
                </a>
                <figcaption>Architecture of {project.title}. Select to open full size.</figcaption>
              </figure>
              {project.proof?.map((shot) => (
                <figure className="project-figure" key={shot.image}>
                  <a href={shot.image} target="_blank" rel="noreferrer" aria-label={`Open full size: ${shot.caption}`}>
                    <img src={shot.image} alt={shot.alt} width={shot.width} height={shot.height} loading="lazy" />
                  </a>
                  <figcaption>{shot.caption}</figcaption>
                </figure>
              ))}
            </div>
          </article>
        ))}

        <div className="also-built">
          <h3>Also built</h3>
          <p>
            <a href="https://github.com/franklinosuji2-afk/LocalCloud-Control-Plane" target="_blank" rel="noreferrer">LocalCloud Control Plane</a>
            , a local-first platform engineering simulation with a React and Vite dashboard, a Node.js and Express API,
            service lifecycle management and deployment state.
          </p>
        </div>
      </div>
    </section>
  )
}
