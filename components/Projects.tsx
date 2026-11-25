import FloatingFigure from "./FloatingFigure"
import { site } from "./site"

type Project = {
  id: string
  title: string
  lead: string
  built: string[]
  // What was tested and what was not. Taken from each repository's own README.
  limits: string
  // A real problem met along the way, only where the README records one.
  problem?: string
  stack: string
  image: string
  width: number
  height: number
  // Omitted for a private repository, so the page never links to a 404.
  github?: string
  // Replaces the default diagram caption when the diagram shows something the copy says is not built.
  diagramNote?: string
  result?: string
  demo?: string
  proof?: { image: string; alt: string; caption: string; width: number; height: number }[]
}

const projects: Project[] = [
  {
    id: "aws-terraform-platform",
    title: "AWS Terraform Platform",
    lead: "A small AWS platform in Terraform, planned, reviewed and deployed from GitHub Actions without any stored AWS keys.",
    built: [
      "Modules for a VPC, a Lambda service behind a function URL, and an optional ECS Fargate service behind an ALB.",
      "Remote state in S3 with native locking, and two IAM roles: a read-only one for plans and a scoped one for apply.",
      "GitHub Actions that sign in through OIDC. Pull requests run fmt, validate, TFLint and Trivy, then post the plan as a comment.",
      "Apply and destroy run by hand, only from main, and only after a reviewer approves them in a protected environment.",
      "Defaults are cost-aware: no NAT gateway, and the ALB and Fargate stack sits behind a switch.",
    ],
    limits:
      "Applied end to end on a real AWS account, and the Lambda page it created is served from AWS. Not yet tested: the destroy workflow and the ECS and ALB stack. Trivy reports findings without failing the build, and the apply role is limited by service, not by individual resource.",
    problem:
      "GitHub now puts the owner and repository IDs into the OIDC token subject for newer repositories. Without both IDs in the bootstrap, the IAM trust policies never match and every workflow run is rejected.",
    stack: "Terraform, AWS (IAM, S3, VPC, Lambda), GitHub Actions, OIDC, TFLint, Trivy",
    image: "/projects/aws-terraform-platform-v2.png",
    width: 1800,
    height: 1000,
    github: "https://github.com/franklinosuji2-afk/aws-terraform-platform",
  },
  {
    id: "platformops-lab",
    title: "PlatformOps-Lab",
    lead: "A local Kubernetes platform for practising infrastructure, deployment and observability without paid cloud resources.",
    built: [
      "A Kind cluster with Kustomize base and overlay manifests, plus a Terraform example for the namespace.",
      "Argo CD syncing the overlay from this repository, so the app deploys and stays healthy from Git.",
      "A Docker Compose observability stack: Prometheus scraping the API, a Grafana dashboard, and Loki logs through promtail.",
      "GitHub Actions that validate Compose, Kustomize and Terraform, build the images and report Trivy findings.",
    ],
    limits:
      "Argo CD has run on a local Kind cluster; the Flux manifests have not been run. Prometheus, Grafana and Loki run in Docker Compose, not inside the cluster yet. The Terraform example deploys stock nginx, Trivy reports without failing the build, and there is no Helm chart yet.",
    stack: "Terraform, Kind, Kubernetes, Kustomize, Argo CD, Docker Compose, GitHub Actions, Prometheus, Grafana, Loki, promtail, Trivy",
    image: "/projects/platformops-lab-v2.png",
    width: 1800,
    height: 1000,
    github: "https://github.com/franklinosuji2-afk/PlatformOps-Lab",
    proof: [
      { image: "/projects/platformops-lab-grafana.png", alt: "Grafana dashboard for the PlatformOps API showing request rate, latency, memory, CPU and logs from Loki", caption: "Grafana: request rate, p95 latency, memory, CPU and API logs from Loki", width: 1500, height: 745 },
      { image: "/projects/platformops-lab-argocd.png", alt: "Argo CD application platformops, Healthy and Synced to main, with its namespace, services, deployments and pods", caption: "Argo CD: platformops is Healthy and Synced to main", width: 1500, height: 742 },
    ],
  },
  {
    id: "kubesentinel",
    title: "KubeSentinel",
    lead: "A local Kubernetes security lab. CI checks manifests and images, and admission policies reject insecure workloads.",
    built: [
      "GitHub Actions gates: yamllint and kubeconform, an image build, and Trivy image and config scans for HIGH and CRITICAL findings.",
      "Four OPA Gatekeeper policies: no root containers, no privileged containers, no latest tag, and resource limits required.",
      "Scripts that set up a kind cluster with Argo CD, Gatekeeper, Prometheus, Grafana and Falco.",
    ],
    limits:
      "A learning lab, not a production setup. On a local kind cluster, Gatekeeper rejected all four deliberately insecure example manifests. The Argo CD, Prometheus, Grafana and Falco bootstrap is scripted but not yet run end to end. Not built yet: conftest policies in CI, SBOMs, image signing and alert rules for Falco and Gatekeeper.",
    problem:
      "The Trivy image scan found three HIGH CVEs in Starlette, pulled in by FastAPI 0.115.0. I fixed them by upgrading FastAPI and requiring Starlette 1.3.1 or later, and the scan now passes.",
    stack: "Kubernetes, kind, Argo CD, OPA Gatekeeper, Trivy, Falco, Prometheus, Grafana, GitHub Actions, Python, FastAPI",
    image: "/projects/kubesentinel-v2.png",
    width: 1800,
    height: 1000,
    github: "https://github.com/franklinosuji2-afk/kubesentinel",
  },
  {
    id: "chaosforge",
    title: "ChaosForge",
    lead: "A local reliability lab. It breaks its own Docker containers on purpose, then measures how long recovery takes and checks it against an SLO.",
    built: [
      "A PowerShell command line, forge.ps1, that starts the stack and runs CPU, memory and container-kill experiments.",
      "A full experiment records the incident, injects a failure into the API, restarts the service, waits for health to recover and calculates MTTR.",
      "Incident history, a reliability report and an SLO and error-budget check come from the same command line.",
      "Prometheus and Grafana show the API and exporter metrics.",
    ],
    limits:
      "This is a lab, not a production chaos platform. Experiments only run against the project's own containers on one machine. CI checks Python syntax, the Compose file and PowerShell syntax; it does not run the experiments.",
    stack: "PowerShell, Python, FastAPI, Docker Compose, Prometheus, Grafana",
    image: "/projects/chaosforge-v2.png",
    width: 1800,
    height: 1000,
    github: "https://github.com/franklinosuji2-afk/chaosforge",
  },
  {
    id: "securescope",
    title: "SecureScope",
    lead: "A multi-tenant web security scanner with a React dashboard and a FastAPI backend. It runs passive checks only, and only against domains the organization has proven it controls.",
    built: [
      "Accounts, organizations and five roles, with server-side authorization and tenant isolation tested across accounts.",
      "Domain ownership verification by DNS TXT record or a file on the website, with expiring challenges. Scans of unverified domains are refused.",
      "A fetcher that blocks private addresses, pins DNS, revalidates every redirect and limits time and size, covered by SSRF regression tests.",
      "GitHub Actions runs 217 backend tests on PostgreSQL, Vitest, Playwright browser tests with axe accessibility checks, Bandit, Semgrep, pip-audit, npm audit and Trivy.",
    ],
    limits:
      "Still in development. It has run end to end against my own site and produced a report. There is no real email delivery and no PDF reports yet, and the DNS verification path is tested with mocks only. The repository is private.",
    stack: "Python, FastAPI, PostgreSQL, Alembic, React, TypeScript, Docker Compose, GitHub Actions, Playwright, Bandit, Semgrep, Trivy",
    image: "/projects/securescope-v2.png",
    width: 1800,
    height: 1000,
  },
  {
    id: "cloudpulse",
    title: "CloudPulse",
    lead: "A local-first observability and FinOps platform. Containerized Python services collect infrastructure metrics, flag anomalies and expose operational metrics.",
    built: [
      "Six FastAPI services behind an API gateway: ingestion, anomaly detection, root-cause analysis, FinOps cost analysis and AI-assisted analysis.",
      "Anomaly detection scores each reading with a z-score against the historical mean and standard deviation.",
      "REST endpoints to collect telemetry, run detection, submit events, run analysis and expose Prometheus-compatible metrics.",
      "Docker Compose runs the services together with PostgreSQL. GitHub Actions compiles the Python services and validates the Compose file.",
    ],
    limits:
      "An early MVP. Alerting, Prometheus alert rules, Grafana dashboards, SLO tracking and distributed tracing are listed as future work in the README.",
    stack: "Python, FastAPI, PostgreSQL, Docker Compose, GitHub Actions",
    image: "/projects/cloudpulse-v2.png",
    width: 1800,
    height: 1000,
    diagramNote: "Architecture of CloudPulse. The dashboards and alerts box is planned and not built yet. Select to open full size.",
    github: "https://github.com/franklinosuji2-afk/cloudpulse",
  },
]

const webp = (png: string) => png.replace(/\.png$/, ".webp")

function Figure({ index, href, src, alt, width, height, caption, label }: {
  index: number; href: string; src: string; alt: string; width: number; height: number; caption: string; label: string
}) {
  return (
    <FloatingFigure index={index}>
      <figure className="project-figure">
        <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
          <picture>
            <source srcSet={webp(src)} type="image/webp" />
            <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" />
          </picture>
        </a>
        <figcaption>{caption}</figcaption>
      </figure>
    </FloatingFigure>
  )
}

export default function Projects() {
  let figureIndex = 0

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <h2 id="projects-title">Projects</h2>
        <p className="section-intro">
          Six projects, all built by me. Each one says what it does, what I tested and what I did not. Five link to
          public source on GitHub.
        </p>

        {projects.map((project) => (
          <article className="project" id={project.id} key={project.id} aria-labelledby={`${project.id}-title`}>
            <div className="project-text">
              <h3 id={`${project.id}-title`}>
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer">{project.title}</a>
                ) : (
                  project.title
                )}
              </h3>
              <p className="project-lead">{project.lead}</p>

              <h4>What I built</h4>
              <ul className="plain-list">
                {project.built.map((item) => <li key={item}>{item}</li>)}
              </ul>

              <h4>Status and limits</h4>
              <p>{project.limits}</p>

              {project.problem && (
                <>
                  <h4>A problem I hit</h4>
                  <p>{project.problem}</p>
                </>
              )}

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
              {project.github && (
                <p>
                  <a className="text-link" href={project.github} target="_blank" rel="noreferrer">View source on GitHub</a>
                </p>
              )}
            </div>
            <div className="project-visuals">
              <Figure
                index={figureIndex++}
                href={project.image}
                src={project.image}
                alt={`${project.title} architecture diagram`}
                width={project.width}
                height={project.height}
                caption={project.diagramNote ?? `Architecture of ${project.title}. Select to open full size.`}
                label={`Open the ${project.title} architecture diagram full size`}
              />
              {project.proof?.map((shot) => (
                <Figure
                  key={shot.image}
                  index={figureIndex++}
                  href={shot.image}
                  src={shot.image}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  caption={shot.caption}
                  label={`Open full size: ${shot.caption}`}
                />
              ))}
            </div>
          </article>
        ))}

        <div className="also-built">
          <h3>Also built</h3>
          <p>
            <a href={`${site.github}/LocalCloud-Control-Plane`} target="_blank" rel="noreferrer">LocalCloud Control Plane</a>
            , a local-first platform engineering simulation with a React and Vite dashboard, a Node.js and Express API,
            service lifecycle management and deployment state. The repository is now archived.
          </p>
        </div>
      </div>
    </section>
  )
}
