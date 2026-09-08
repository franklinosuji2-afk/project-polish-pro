"use client"
import { useState } from "react"

const projects = [
  {
    id: 0,
    title: "LocalCloud Control Plane",
    tag: "PLATFORM ENGINEERING",
    problem:
      "Cloud platforms abstract complex orchestration behind control planes. This project recreates those concepts locally to demonstrate service lifecycle management, orchestration, persistence, and platform engineering without cloud spend.",
    architecture:
      "React + Vite dashboard communicates with a Node.js/Express control-plane API. Service management, orchestration, logging, metrics simulation, and local state persistence are separated into clear platform components.",
    pipeline: ["React Dashboard", "REST API", "Service Manager", "Orchestrator", "Lifecycle Events", "State Persistence"],
    security: [
      "API-driven infrastructure control",
      "Environment configuration separated from source",
      "Dependency vulnerability auditing",
      "CI validation with GitHub Actions",
    ],
    monitoring: [
      "Service lifecycle events",
      "Deployment state tracking",
      "Operational event logging",
      "Metrics simulation",
    ],
    results: [
      "Local-first platform engineering environment",
      "Demonstrates control-plane and data-plane concepts",
      "No external cloud dependency for development",
      "Foundation for Kubernetes-style platform extensions",
    ],
    tags: ["React", "Vite", "Node.js", "Express", "Docker", "GitHub Actions", "Platform Engineering"],
    github: "https://github.com/franklinosuji2-afk/LocalCloud-Control-Plane",
    color: "#3b82f6",
  },
  {
    id: 1,
    title: "PlatformOps-Lab",
    tag: "KUBERNETES & PLATFORM ENGINEERING",
    problem:
      "Production platforms require repeatable deployment, service orchestration, and observability. PlatformOps-Lab provides a local Kubernetes environment for practising those workflows without relying on a paid cloud environment.",
    architecture:
      "A containerized application stack runs on Kubernetes with Terraform and Kind for infrastructure, Kustomize for environment configuration, and Helm for application packaging. Prometheus, Grafana, and Loki provide metrics, dashboards, and logs.",
    pipeline: ["Terraform", "Kind", "Kubernetes", "Helm", "Kustomize", "GitHub Actions", "Observability"],
    security: [
      "Infrastructure as Code",
      "Containerized workloads",
      "Repeatable environment configuration",
      "CI validation and controlled deployments",
    ],
    monitoring: [
      "Prometheus metrics",
      "Grafana dashboards",
      "Loki log aggregation",
      "Application and infrastructure visibility",
    ],
    results: [
      "Production-inspired Kubernetes platform lab",
      "Reusable deployment and configuration patterns",
      "Integrated metrics, dashboards, and logs",
      "Practical platform engineering workflow from infrastructure to observability",
    ],
    tags: ["Kubernetes", "Terraform", "Kind", "Helm", "Kustomize", "Docker", "GitHub Actions", "Prometheus", "Grafana", "Loki"],
    github: "https://github.com/franklinosuji2-afk/PlatformOps-Lab",
    color: "#8b5cf6",
  },
  {
    id: 2,
    title: "ChaosForge",
    tag: "SRE & CHAOS ENGINEERING",
    problem:
      "Monitoring alone does not prove resilience. ChaosForge introduces controlled failures and measures detection, recovery, MTTR, SLO compliance, and error-budget impact.",
    architecture:
      "PowerShell orchestrates controlled failure experiments across Docker workloads. FastAPI provides the workload/API layer, while Prometheus collects reliability metrics and Grafana visualizes incidents and recovery performance.",
    pipeline: ["Chaos Injection", "Failure Detection", "Incident Creation", "Recovery", "MTTR Measurement", "SLO Evaluation"],
    security: [
      "Controlled local failure experiments",
      "Reproducible Docker environment",
      "Explicit operational workflows",
      "Failure isolation through containers",
    ],
    monitoring: [
      "Prometheus metrics",
      "Grafana dashboards",
      "Incident history",
      "MTTR and recovery success rate",
      "SLO and error-budget tracking",
    ],
    results: [
      "Turns reliability assumptions into measurable experiments",
      "Provides evidence for recovery performance and MTTR",
      "Supports SLO and error-budget analysis",
      "Local SRE laboratory for resilience testing",
    ],
    tags: ["Python", "FastAPI", "Docker", "Docker Compose", "PowerShell", "Prometheus", "Grafana", "SRE", "Chaos Engineering"],
    github: "https://github.com/franklinosuji2-afk/chaosforge",
    color: "#ef4444",
  },
  {
    id: 3,
    title: "CloudPulse",
    tag: "CLOUD OBSERVABILITY",
    problem:
      "Cloud operations teams need actionable visibility rather than raw metrics. CloudPulse explores metric ingestion, anomaly detection, health insights, and operational APIs in a portable local environment.",
    architecture:
      "Containerized FastAPI services ingest and process cloud metrics, persist operational data in PostgreSQL, and expose REST APIs for dashboards and alerting integrations.",
    pipeline: ["Metric Ingestion", "Processing", "Anomaly Detection", "Health Insights", "PostgreSQL", "REST API"],
    security: [
      "Containerized service boundaries",
      "Environment-based configuration",
      "API authentication and rate-limiting patterns",
      "Reproducible local deployment",
    ],
    monitoring: [
      "Metric ingestion and health signals",
      "Anomaly detection",
      "Operational API visibility",
      "PostgreSQL-backed history",
    ],
    results: [
      "Portable observability platform for cloud operations",
      "Actionable health and anomaly signals",
      "Reusable REST API for dashboards and integrations",
      "Demonstrates cloud operations, monitoring, and reliability thinking",
    ],
    tags: ["Python", "FastAPI", "PostgreSQL", "Docker", "REST APIs", "Observability", "Monitoring"],
    github: "https://github.com/franklinosuji2-afk/cloudpulse",
    color: "#22c55e",
  },
]

export default function Projects() {
  const [active, setActive] = useState(0)
  const p = projects[active]

  return (
    <section id="projects" className="section-pad" style={{ background: "var(--bg-section)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "40px" }}>
          <div style={{ fontFamily: "monospace", fontSize: "11px", color: "#3b82f6", letterSpacing: "4px", marginBottom: "12px" }}>// FEATURED_PROJECTS</div>
          <h2 style={{ fontSize: "clamp(24px,4vw,38px)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>Platform, Cloud & SRE Projects</h2>
          <div style={{ width: "40px", height: "2px", background: "#3b82f6", marginBottom: "16px" }} />
          <p style={{ color: "var(--text-secondary)", fontSize: "14px", maxWidth: "760px", lineHeight: 1.7 }}>
            Selected projects demonstrating platform engineering, Kubernetes, cloud infrastructure, automation, observability, and reliability with concise architecture and operational value.
          </p>
        </div>

        <div style={{ display: "flex", gap: "8px", marginBottom: "28px", flexWrap: "wrap" }}>
          {projects.map((proj, i) => (
            <button key={proj.id} onClick={() => setActive(i)}
              style={{ padding: "8px 16px", borderRadius: "6px", border: `1px solid ${active === i ? proj.color + "66" : "var(--border)"}`, background: active === i ? `${proj.color}12` : "transparent", color: active === i ? proj.color : "var(--text-secondary)", fontFamily: "monospace", fontSize: "12px", cursor: "pointer", transition: "all 0.2s" }}>
              {proj.title}
            </button>
          ))}
        </div>

        <div style={{ borderRadius: "12px", border: `1px solid ${p.color}22`, background: "var(--bg-card2)", overflow: "hidden" }}>
          <div style={{ padding: "24px 28px", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px" }}>
            <div>
              <div style={{ fontFamily: "monospace", fontSize: "11px", color: p.color, letterSpacing: "2px", marginBottom: "6px" }}>{p.tag}</div>
              <h3 style={{ fontSize: "clamp(18px,3vw,24px)", fontWeight: 700, color: "var(--text-primary)" }}>{p.title}</h3>
            </div>
            <a href={p.github} target="_blank" rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "8px 16px", border: "1px solid var(--border)", borderRadius: "6px", color: "var(--text-secondary)", textDecoration: "none", fontSize: "12px", fontFamily: "monospace" }}>
              GitHub Repo
            </a>
          </div>

          <div style={{ padding: "28px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div style={{ gridColumn: "1/-1", padding: "16px 20px", borderRadius: "8px", border: "1px solid var(--border)", background: "rgba(239,68,68,0.04)", borderLeft: "3px solid #ef4444" }}>
              <div style={{ fontFamily: "monospace", fontSize: "10px", color: "#ef4444", letterSpacing: "2px", marginBottom: "8px" }}>PROBLEM STATEMENT</div>
              <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.7 }}>{p.problem}</p>
            </div>

            <div style={{ padding: "16px 20px", borderRadius: "8px", border: "1px solid var(--border)", background: "rgba(59,130,246,0.04)", borderLeft: "3px solid #3b82f6" }}>
              <div style={{ fontFamily: "monospace", fontSize: "10px", color: "#3b82f6", letterSpacing: "2px", marginBottom: "8px" }}>ARCHITECTURE OVERVIEW</div>
              <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.7 }}>{p.architecture}</p>
            </div>

            <div style={{ padding: "16px 20px", borderRadius: "8px", border: "1px solid var(--border)", background: "rgba(139,92,246,0.04)", borderLeft: "3px solid #8b5cf6" }}>
              <div style={{ fontFamily: "monospace", fontSize: "10px", color: "#8b5cf6", letterSpacing: "2px", marginBottom: "12px" }}>ENGINEERING WORKFLOW</div>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4px" }}>
                {p.pipeline.map((s, i) => (
                  <span key={s} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <span style={{ padding: "3px 8px", fontSize: "10px", borderRadius: "4px", background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)", color: "#a78bfa", fontFamily: "monospace" }}>{s}</span>
                    {i < p.pipeline.length - 1 && <span style={{ color: "var(--text-muted)", fontSize: "10px" }}>{">"}</span>}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ padding: "16px 20px", borderRadius: "8px", border: "1px solid var(--border)", background: "rgba(249,115,22,0.04)", borderLeft: "3px solid #f97316" }}>
              <div style={{ fontFamily: "monospace", fontSize: "10px", color: "#f97316", letterSpacing: "2px", marginBottom: "10px" }}>SECURITY CONSIDERATIONS</div>
              {p.security.map(s => <div key={s} style={{ display: "flex", gap: "8px", fontSize: "12px", color: "var(--text-secondary)", marginBottom: "6px" }}><span style={{ color: "#f97316", flexShrink: 0 }}>*</span>{s}</div>)}
            </div>

            <div style={{ padding: "16px 20px", borderRadius: "8px", border: "1px solid var(--border)", background: "rgba(6,182,212,0.04)", borderLeft: "3px solid #06b6d4" }}>
              <div style={{ fontFamily: "monospace", fontSize: "10px", color: "#06b6d4", letterSpacing: "2px", marginBottom: "10px" }}>MONITORING SETUP</div>
              {p.monitoring.map(s => <div key={s} style={{ display: "flex", gap: "8px", fontSize: "12px", color: "var(--text-secondary)", marginBottom: "6px" }}><span style={{ color: "#06b6d4", flexShrink: 0 }}>~</span>{s}</div>)}
            </div>

            <div style={{ padding: "16px 20px", borderRadius: "8px", border: "1px solid var(--border)", background: "rgba(34,197,94,0.04)", borderLeft: "3px solid #22c55e" }}>
              <div style={{ fontFamily: "monospace", fontSize: "10px", color: "#22c55e", letterSpacing: "2px", marginBottom: "10px" }}>BUSINESS & ENGINEERING VALUE</div>
              {p.results.map(s => <div key={s} style={{ display: "flex", gap: "8px", fontSize: "12px", color: "var(--text-secondary)", marginBottom: "6px" }}><span style={{ color: "#22c55e", flexShrink: 0 }}>+</span>{s}</div>)}
            </div>

            <div style={{ gridColumn: "1/-1" }}>
              <div style={{ fontFamily: "monospace", fontSize: "10px", color: "var(--text-muted)", letterSpacing: "2px", marginBottom: "10px" }}>TECH STACK</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {p.tags.map(t => <span key={t} style={{ padding: "4px 10px", fontSize: "11px", borderRadius: "4px", border: `1px solid ${p.color}30`, color: p.color, background: `${p.color}10`, fontFamily: "monospace" }}>{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

