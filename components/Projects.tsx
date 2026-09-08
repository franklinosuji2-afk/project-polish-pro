"use client"

import { useState } from "react"

const projects = [
  {
    id: 1,
    number: "01",
    title: "PlatformOps-Lab",
    category: "KUBERNETES & PLATFORM ENGINEERING",
    description:
      "A production-inspired local Kubernetes platform demonstrating infrastructure automation, container orchestration, GitOps-style workflows, and observability without requiring a paid cloud environment.",
    architecture:
      "Terraform provisions the platform foundation while Kind runs the Kubernetes cluster. Kustomize manages environment configuration, Helm packages workloads, and GitHub Actions validates the delivery workflow.",
    pipeline: [
      "Terraform",
      "Kind",
      "Kubernetes",
      "Helm",
      "Kustomize",
      "GitHub Actions",
    ],
    monitoring: [
      "Prometheus metrics",
      "Grafana dashboards",
      "Loki log aggregation",
      "Application visibility",
    ],
    value: [
      "Reusable Kubernetes deployment patterns",
      "Infrastructure-as-Code workflow",
      "Integrated observability stack",
      "Local platform engineering laboratory",
    ],
    tags: [
      "Kubernetes",
      "Terraform",
      "Docker",
      "Kind",
      "Helm",
      "Kustomize",
      "Prometheus",
      "Grafana",
    ],
    github: "https://github.com/franklinosuji2-afk/PlatformOps-Lab",
    color: "#8b5cf6",
  },
  {
    id: 2,
    number: "02",
    title: "LocalCloud Control Plane",
    category: "PLATFORM ENGINEERING",
    description:
      "A local-first cloud control-plane simulation demonstrating service lifecycle management, orchestration, persistence, operational events, and platform engineering concepts without cloud spend.",
    architecture:
      "A React + Vite dashboard communicates with a Node.js/Express control-plane API. Service management, orchestration, lifecycle events, logging, metrics simulation, and state persistence are separated into clear platform components.",
    pipeline: [
      "React Dashboard",
      "REST API",
      "Service Manager",
      "Orchestrator",
      "Lifecycle Events",
      "State Persistence",
    ],
    monitoring: [
      "Service lifecycle events",
      "Deployment state tracking",
      "Operational event logging",
      "Metrics simulation",
    ],
    value: [
      "Demonstrates control-plane architecture",
      "Separates platform and application concerns",
      "Runs completely locally",
      "Foundation for Kubernetes-style extensions",
    ],
    tags: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "Docker",
      "GitHub Actions",
    ],
    github: "https://github.com/franklinosuji2-afk/LocalCloud-Control-Plane",
    color: "#3b82f6",
  },
  {
    id: 3,
    number: "03",
    title: "ChaosForge",
    category: "SRE & CHAOS ENGINEERING",
    description:
      "A controlled reliability engineering laboratory that introduces failures into containerized workloads and measures detection, recovery, MTTR, SLO compliance, and error-budget impact.",
    architecture:
      "PowerShell orchestrates controlled failure experiments across Docker workloads. FastAPI provides the workload/API layer while Prometheus and Grafana capture and visualize reliability behaviour.",
    pipeline: [
      "Chaos Injection",
      "Failure Detection",
      "Incident Creation",
      "Recovery",
      "MTTR Measurement",
      "SLO Evaluation",
    ],
    monitoring: [
      "Prometheus metrics",
      "Grafana dashboards",
      "Incident history",
      "MTTR tracking",
    ],
    value: [
      "Turns reliability assumptions into experiments",
      "Measures recovery performance",
      "Supports SLO and error-budget analysis",
      "Provides a local SRE laboratory",
    ],
    tags: [
      "Python",
      "FastAPI",
      "Docker",
      "PowerShell",
      "Prometheus",
      "Grafana",
      "SRE",
    ],
    github: "https://github.com/franklinosuji2-afk/chaosforge",
    color: "#ef4444",
  },
  {
    id: 4,
    number: "04",
    title: "CloudPulse",
    category: "CLOUD OBSERVABILITY",
    description:
      "A portable cloud-operations observability platform focused on metric ingestion, anomaly detection, health insights, operational APIs, and actionable infrastructure visibility.",
    architecture:
      "Containerized FastAPI services ingest and process operational metrics, persist data in PostgreSQL, and expose REST APIs for dashboards and alerting integrations.",
    pipeline: [
      "Metric Ingestion",
      "Processing",
      "Anomaly Detection",
      "Health Insights",
      "PostgreSQL",
      "REST API",
    ],
    monitoring: [
      "Metric ingestion",
      "Health signals",
      "Anomaly detection",
      "Operational API visibility",
    ],
    value: [
      "Portable cloud operations platform",
      "Actionable health signals",
      "Reusable REST API",
      "Demonstrates observability thinking",
    ],
    tags: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "REST API",
      "Observability",
    ],
    github: "https://github.com/franklinosuji2-afk/cloudpulse",
    color: "#22c55e",
  },
]

export default function Projects() {
  const [active, setActive] = useState(0)
  const project = projects[active]

  return (
    <section
      id="projects"
      className="section-pad"
      style={{
        background: "var(--bg-section)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* HEADER */}
        <div style={{ marginBottom: "42px" }}>
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
            Selected platform engineering, Kubernetes, SRE, cloud
            infrastructure, automation, and observability projects built to
            demonstrate production-oriented engineering practices.
          </p>
        </div>

        {/* PROJECT NAVIGATION */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
            marginBottom: "24px",
          }}
          className="projects-nav"
        >
          {projects.map((p, index) => (
            <button
              key={p.id}
              onClick={() => setActive(index)}
              style={{
                textAlign: "left",
                padding: "15px 16px",
                borderRadius: "10px",
                border:
                  active === index
                    ? `1px solid ${p.color}66`
                    : "1px solid var(--border)",
                background:
                  active === index ? `${p.color}12` : "var(--bg-card2)",
                color:
                  active === index ? p.color : "var(--text-secondary)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: "10px",
                  marginBottom: "7px",
                  opacity: 0.75,
                }}
              >
                PROJECT {p.number}
              </div>

              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  lineHeight: 1.4,
                }}
              >
                {p.title}
              </div>
            </button>
          ))}
        </div>

        {/* FEATURED PROJECT */}
        <div
          style={{
            border: `1px solid ${project.color}45`,
            borderRadius: "16px",
            background: "var(--bg-card2)",
            overflow: "hidden",
            boxShadow: `0 20px 70px ${project.color}0d`,
          }}
        >
          {/* PROJECT HEADER */}
          <div
            style={{
              padding: "28px 30px",
              borderBottom: "1px solid var(--border)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "10px",
                }}
              >
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: "11px",
                    color: project.color,
                    letterSpacing: "2px",
                  }}
                >
                  {project.number} /
                </span>

                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: "11px",
                    color: project.color,
                    letterSpacing: "2px",
                  }}
                >
                  {project.category}
                </span>
              </div>

              <h3
                style={{
                  fontSize: "clamp(22px, 3vw, 30px)",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                }}
              >
                {project.title}
              </h3>
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 16px",
                border: `1px solid ${project.color}55`,
                borderRadius: "8px",
                color: project.color,
                textDecoration: "none",
                fontFamily: "monospace",
                fontSize: "12px",
                background: `${project.color}0b`,
              }}
            >
              View on GitHub ↗
            </a>
          </div>

          {/* PROJECT CONTENT */}
          <div
            style={{
              padding: "30px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "18px",
            }}
            className="project-content-grid"
          >
            {/* DESCRIPTION */}
            <div
              style={{
                gridColumn: "1 / -1",
                padding: "22px",
                borderRadius: "12px",
                border: "1px solid var(--border)",
                background: "rgba(59,130,246,0.035)",
              }}
            >
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: "10px",
                  color: "#60a5fa",
                  letterSpacing: "2px",
                  marginBottom: "10px",
                }}
              >
                PROJECT OVERVIEW
              </div>

              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "14px",
                  lineHeight: 1.8,
                }}
              >
                {project.description}
              </p>
            </div>

            {/* ARCHITECTURE */}
            <div
              style={{
                padding: "22px",
                borderRadius: "12px",
                border: "1px solid var(--border)",
                background: "rgba(59,130,246,0.035)",
              }}
            >
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: "10px",
                  color: "#60a5fa",
                  letterSpacing: "2px",
                  marginBottom: "12px",
                }}
              >
                ARCHITECTURE
              </div>

              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "13px",
                  lineHeight: 1.8,
                }}
              >
                {project.architecture}
              </p>
            </div>

            {/* WORKFLOW */}
            <div
              style={{
                padding: "22px",
                borderRadius: "12px",
                border: "1px solid var(--border)",
                background: "rgba(139,92,246,0.035)",
              }}
            >
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: "10px",
                  color: "#a78bfa",
                  letterSpacing: "2px",
                  marginBottom: "14px",
                }}
              >
                ENGINEERING WORKFLOW
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "7px",
                }}
              >
                {project.pipeline.map((step, index) => (
                  <span
                    key={step}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "6px 9px",
                      borderRadius: "6px",
                      border: "1px solid rgba(139,92,246,0.2)",
                      background: "rgba(139,92,246,0.08)",
                      color: "#a78bfa",
                      fontFamily: "monospace",
                      fontSize: "10px",
                    }}
                  >
                    {step}
                    {index < project.pipeline.length - 1 && " →"}
                  </span>
                ))}
              </div>
            </div>

            {/* MONITORING */}
            <div
              style={{
                padding: "22px",
                borderRadius: "12px",
                border: "1px solid var(--border)",
                background: "rgba(6,182,212,0.035)",
              }}
            >
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: "10px",
                  color: "#06b6d4",
                  letterSpacing: "2px",
                  marginBottom: "12px",
                }}
              >
                OBSERVABILITY
              </div>

              {project.monitoring.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    gap: "9px",
                    marginBottom: "8px",
                    color: "var(--text-secondary)",
                    fontSize: "12px",
                  }}
                >
                  <span style={{ color: "#06b6d4" }}>●</span>
                  {item}
                </div>
              ))}
            </div>

            {/* ENGINEERING VALUE */}
            <div
              style={{
                padding: "22px",
                borderRadius: "12px",
                border: "1px solid var(--border)",
                background: "rgba(34,197,94,0.035)",
              }}
            >
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: "10px",
                  color: "#22c55e",
                  letterSpacing: "2px",
                  marginBottom: "12px",
                }}
              >
                ENGINEERING VALUE
              </div>

              {project.value.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    gap: "9px",
                    marginBottom: "8px",
                    color: "var(--text-secondary)",
                    fontSize: "12px",
                  }}
                >
                  <span style={{ color: "#22c55e" }}>+</span>
                  {item}
                </div>
              ))}
            </div>

            {/* TECH STACK */}
            <div style={{ gridColumn: "1 / -1" }}>
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: "10px",
                  color: "var(--text-muted)",
                  letterSpacing: "2px",
                  marginBottom: "12px",
                }}
              >
                TECHNOLOGY STACK
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "6px 10px",
                      borderRadius: "6px",
                      border: `1px solid ${project.color}35`,
                      background: `${project.color}0c`,
                      color: project.color,
                      fontFamily: "monospace",
                      fontSize: "10px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 850px) {
          .projects-nav {
            grid-template-columns: 1fr 1fr !important;
          }

          .project-content-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 520px) {
          .projects-nav {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
