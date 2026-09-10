"use client"

const projects = [
  {
    number: "01",
    title: "PlatformOps-Lab",
    category: "KUBERNETES & PLATFORM ENGINEERING",
    description:
      "A production-inspired local Kubernetes platform demonstrating infrastructure automation, container orchestration, GitOps-style workflows, and observability without requiring a paid cloud environment.",
    architecture:
      "Terraform provisions the platform foundation while Kind runs the Kubernetes cluster. Kustomize manages environment configuration, Helm packages workloads, and GitHub Actions validates the delivery workflow.",
    pipeline: ["Terraform", "Kind", "Kubernetes", "Helm", "Kustomize", "GitHub Actions"],
    monitoring: ["Prometheus metrics", "Grafana dashboards", "Loki log aggregation", "Application visibility"],
    value: [
      "Reusable Kubernetes deployment patterns",
      "Infrastructure-as-Code workflow",
      "Integrated observability stack",
      "Local platform engineering laboratory",
    ],
    tags: ["Kubernetes", "Terraform", "Docker", "Kind", "Helm", "Kustomize", "Prometheus", "Grafana"],
    github: "https://github.com/franklinosuji2-afk/PlatformOps-Lab",
    color: "#8b5cf6",
  },
  {
    number: "02",
    title: "LocalCloud Control Plane",
    category: "PLATFORM ENGINEERING",
    description:
      "A local-first cloud control-plane simulation demonstrating service lifecycle management, orchestration, persistence, operational events, and platform engineering concepts without cloud spend.",
    architecture:
      "A React + Vite dashboard communicates with a Node.js/Express control-plane API. Service management, orchestration, lifecycle events, logging, metrics simulation, and state persistence are separated into clear platform components.",
    pipeline: ["React Dashboard", "REST API", "Service Manager", "Orchestrator", "Lifecycle Events", "State Persistence"],
    monitoring: ["Service lifecycle events", "Deployment state tracking", "Operational event logging", "Metrics simulation"],
    value: [
      "Demonstrates control-plane architecture",
      "Separates platform and application concerns",
      "Runs completely locally",
      "Foundation for Kubernetes-style extensions",
    ],
    tags: ["React", "Vite", "Node.js", "Express", "Docker", "GitHub Actions"],
    github: "https://github.com/franklinosuji2-afk/LocalCloud-Control-Plane",
    color: "#3b82f6",
  },
  {
    number: "03",
    title: "ChaosForge",
    category: "SRE & CHAOS ENGINEERING",
    description:
      "A controlled reliability engineering laboratory that introduces failures into containerized workloads and measures detection, recovery, MTTR, SLO compliance, and error-budget impact.",
    architecture:
      "PowerShell orchestrates controlled failure experiments across Docker workloads. FastAPI provides the workload/API layer while Prometheus and Grafana capture and visualize reliability behaviour.",
    pipeline: ["Chaos Injection", "Failure Detection", "Incident Creation", "Recovery", "MTTR Measurement", "SLO Evaluation"],
    monitoring: ["Prometheus metrics", "Grafana dashboards", "Incident history", "MTTR tracking"],
    value: [
      "Turns reliability assumptions into experiments",
      "Measures recovery performance",
      "Supports SLO and error-budget analysis",
      "Provides a local SRE laboratory",
    ],
    tags: ["Python", "FastAPI", "Docker", "PowerShell", "Prometheus", "Grafana", "SRE"],
    github: "https://github.com/franklinosuji2-afk/chaosforge",
    color: "#ef4444",
  },
  {
    number: "04",
    title: "CloudPulse",
    category: "CLOUD OBSERVABILITY",
    description:
      "A portable cloud-operations observability platform focused on metric ingestion, anomaly detection, health insights, operational APIs, and actionable infrastructure visibility.",
    architecture:
      "Containerized FastAPI services ingest and process operational metrics, persist data in PostgreSQL, and expose REST APIs for dashboards and alerting integrations.",
    pipeline: ["Metric Ingestion", "Processing", "Anomaly Detection", "Health Insights", "PostgreSQL", "REST API"],
    monitoring: ["Metric ingestion", "Health signals", "Anomaly detection", "Operational API visibility"],
    value: [
      "Portable cloud operations platform",
      "Actionable health signals",
      "Reusable REST API",
      "Demonstrates observability thinking",
    ],
    tags: ["Python", "FastAPI", "PostgreSQL", "Docker", "REST API", "Observability"],
    github: "https://github.com/franklinosuji2-afk/cloudpulse",
    color: "#22c55e",
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-pad"
      style={{
        background: "var(--bg-section)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <div style={{ marginBottom: "48px" }}>
          <div
            style={{
              fontFamily: "monospace",
              fontSize: "11px",
              color: "#3b82f6",
              letterSpacing: "4px",
              marginBottom: "12px",
            }}
          >
            // PROJECTS
          </div>

          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "12px",
            }}
          >
            Engineering Projects
          </h2>

          <div
            style={{
              width: "42px",
              height: "2px",
              background: "#3b82f6",
              marginBottom: "18px",
            }}
          />

          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "15px",
              maxWidth: "720px",
              lineHeight: 1.8,
            }}
          >
            Selected platform engineering, Kubernetes, SRE, cloud infrastructure,
            automation, and observability projects built to demonstrate
            production-oriented engineering practices.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              key={project.number}
              className="project-card"
              style={{
                borderColor: `${project.color}55`,
              }}
            >
              <div
                className="project-header"
                style={{
                  borderBottom: `1px solid ${project.color}30`,
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "monospace",
                      fontSize: "10px",
                      color: project.color,
                      letterSpacing: "2px",
                      marginBottom: "10px",
                    }}
                  >
                    PROJECT {project.number}
                  </div>

                  <div
                    style={{
                      fontFamily: "monospace",
                      fontSize: "10px",
                      color: "var(--text-muted)",
                      letterSpacing: "1.5px",
                      marginBottom: "10px",
                    }}
                  >
                    {project.category}
                  </div>

                  <h3
                    style={{
                      fontSize: "clamp(22px, 3vw, 30px)",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      margin: 0,
                    }}
                  >
                    {project.title}
                  </h3>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-button"
                  style={{
                    color: project.color,
                    borderColor: `${project.color}66`,
                  }}
                >
                  GitHub ↗
                </a>
              </div>

              <div className="project-body">

                <div className="project-overview">
                  <Label color={project.color}>PROJECT OVERVIEW</Label>
                  <p>{project.description}</p>
                </div>

                <div className="project-columns">

                  <div className="project-info">
                    <Label color="#60a5fa">ARCHITECTURE</Label>
                    <p>{project.architecture}</p>
                  </div>

                  <div className="project-info">
                    <Label color="#a78bfa">ENGINEERING WORKFLOW</Label>

                    <div className="tags">
                      {project.pipeline.map((step, index) => (
                        <span key={step} className="workflow-tag">
                          {step}
                          {index < project.pipeline.length - 1 && " →"}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-info">
                    <Label color="#06b6d4">OBSERVABILITY</Label>

                    {project.monitoring.map((item) => (
                      <div key={item} className="list-item">
                        <span style={{ color: "#06b6d4" }}>●</span>
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="project-info">
                    <Label color="#22c55e">ENGINEERING VALUE</Label>

                    {project.value.map((item) => (
                      <div key={item} className="list-item">
                        <span style={{ color: "#22c55e" }}>+</span>
                        {item}
                      </div>
                    ))}
                  </div>

                </div>

                <div className="technology">
                  <Label color="var(--text-muted)">TECHNOLOGY STACK</Label>

                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tech-tag"
                        style={{
                          color: project.color,
                          borderColor: `${project.color}35`,
                          background: `${project.color}0c`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>

      <style jsx>{`

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        .project-card {
          border: 1px solid;
          border-radius: 16px;
          background: var(--bg-card2);
          overflow: hidden;
          transition: transform .2s ease, box-shadow .2s ease;
        }

        .project-card:hover {
          transform: translateY(-3px);
        }

        .project-header {
          padding: 26px 28px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .github-button {
          display: inline-flex;
          align-items: center;
          padding: 9px 15px;
          border: 1px solid;
          border-radius: 8px;
          text-decoration: none;
          font-family: monospace;
          font-size: 11px;
          white-space: nowrap;
        }

        .project-body {
          padding: 28px;
        }

        .project-overview {
          padding: 22px;
          border: 1px solid var(--border);
          border-radius: 12px;
          margin-bottom: 16px;
        }

        .project-overview p,
        .project-info p {
          color: var(--text-secondary);
          font-size: 13px;
          line-height: 1.8;
          margin: 0;
        }

        .project-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .project-info {
          padding: 22px;
          border: 1px solid var(--border);
          border-radius: 12px;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .workflow-tag,
        .tech-tag {
          padding: 6px 9px;
          border-radius: 6px;
          border: 1px solid var(--border);
          font-family: monospace;
          font-size: 10px;
        }

        .list-item {
          display: flex;
          gap: 9px;
          margin-bottom: 8px;
          color: var(--text-secondary);
          font-size: 12px;
        }

        .technology {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid var(--border);
        }

        @media (max-width: 700px) {
          .project-header {
            align-items: flex-start;
            flex-direction: column;
          }

          .project-body {
            padding: 20px;
          }

          .project-columns {
            grid-template-columns: 1fr;
          }
        }

      `}</style>
    </section>
  )
}

function Label({
  children,
  color,
}: {
  children: React.ReactNode
  color: string
}) {
  return (
    <div
      style={{
        fontFamily: "monospace",
        fontSize: "10px",
        color,
        letterSpacing: "2px",
        marginBottom: "12px",
      }}
    >
      {children}
    </div>
  )
}
