"use client"

const projects = [
  {
    number: "01",
    title: "ChaosForge",
    category: "SRE & CHAOS ENGINEERING",
    problem: "Practice reliability engineering and controlled failure testing locally.",
    approach: "Introduce controlled failures into containerized workloads and observe detection, recovery, MTTR, SLO compliance and error-budget impact where actually implemented.",
    stack: ["PowerShell", "FastAPI", "Prometheus", "Grafana", "Docker/Compose"],
    result: "[ADD: measurable result]",
    github: "https://github.com/franklinosuji2-afk/chaosforge",
    demo: "[ADD: demo URL]",
    demoVideo: "[ADD: 60â€“90 sec demo video/GIF]",
    diagram: "[ADD: real Grafana dashboard screenshot from ChaosForge or PlatformOps-Lab]",
    caption: "ChaosForge",
  },
  {
    number: "02",
    title: "PlatformOps-Lab",
    category: "KUBERNETES & PLATFORM ENGINEERING",
    problem: "Local platform engineering practice without depending on paid cloud infrastructure.",
    approach: "Terraform + Kind + Kustomize + Helm + GitHub Actions with Prometheus, Grafana and Loki for observability.",
    stack: ["Terraform", "Kind", "Kustomize", "Helm", "GitHub Actions", "Prometheus", "Grafana", "Loki"],
    result: "[ADD: measurable result]",
    github: "https://github.com/franklinosuji2-afk/PlatformOps-Lab",
    demo: "[ADD: demo URL]",
    demoVideo: "[ADD: 60â€“90 sec demo video/GIF]",
    diagram: "[ADD: real Grafana dashboard screenshot from ChaosForge or PlatformOps-Lab]",
    caption: "PlatformOps-Lab",
  },
  {
    number: "03",
    title: "LocalCloud Control Plane",
    category: "PLATFORM ENGINEERING",
    problem: "Create a local platform engineering environment for managing services, deployments, events and simulated operational state.",
    approach: "React/Vite dashboard + Node.js/Express API to model service management and operational state without describing the simulated system as real cloud infrastructure.",
    stack: ["React", "Vite", "Node.js", "Express", "Docker"],
    result: "[ADD: measurable result]",
    github: "https://github.com/franklinosuji2-afk/LocalCloud-Control-Plane",
    demo: "[ADD: demo URL]",
    demoVideo: "[ADD: 60â€“90 sec demo video/GIF]",
    diagram: "[ADD: architecture diagram for LocalCloud Control Plane]",
    caption: "LocalCloud Control Plane",
  },
  {
    number: "04",
    title: "CloudPulse",
    category: "CLOUD OBSERVABILITY",
    problem: "Collect infrastructure signals and make operational investigation easier.",
    approach: "FastAPI + PostgreSQL + REST API to collect and expose infrastructure signals for investigation.",
    stack: ["FastAPI", "PostgreSQL", "REST API", "Python"],
    result: "[ADD: measurable result]",
    github: "https://github.com/franklinosuji2-afk/cloudpulse",
    demo: "[ADD: demo URL]",
    demoVideo: "[ADD: 60â€“90 sec demo video/GIF]",
    diagram: "[ADD: architecture diagram for CloudPulse]",
    caption: "CloudPulse",
  },
]

export default function Projects() {
  const isDev = process.env.NODE_ENV !== "production"

  return (
    <section id="projects" className="section-pad" style={{ background: "var(--bg-section)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "48px" }}>
          <div style={{ fontFamily: "monospace", fontSize: "11px", color: "#3b82f6", letterSpacing: "4px", marginBottom: "12px" }}>
            // PROJECTS
          </div>
          <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>
            Engineering Projects
          </h2>
          <div style={{ width: "42px", height: "2px", background: "#3b82f6", marginBottom: "18px" }} />
        </div>

        <div style={{ display: "grid", gap: "24px" }}>
          {projects.map((project) => (
            <article key={project.number} style={{ border: "1px solid var(--border)", borderRadius: "18px", background: "var(--bg-card)", overflow: "hidden" }}>
              <div style={{ padding: "24px 24px 16px", borderBottom: "1px solid var(--border)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                  <div>
                    <div style={{ fontFamily: "monospace", fontSize: "10px", color: "#3b82f6", letterSpacing: "2px", marginBottom: "8px" }}>
                      PROJECT {project.number}
                    </div>
                    <div style={{ fontFamily: "monospace", fontSize: "10px", color: "var(--text-muted)", letterSpacing: "1.5px", marginBottom: "12px" }}>
                      {project.category}
                    </div>
                    <h3 style={{ fontSize: "clamp(22px,3vw,30px)", fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>{project.title}</h3>
                  </div>
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} GitHub repository`} style={{ color: "#60a5fa", border: "1px solid rgba(96,165,250,0.3)", borderRadius: "8px", padding: "8px 12px", textDecoration: "none", fontWeight: 600 }}>
                    GitHub â†’
                  </a>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "0", alignItems: "stretch" }}>
                <div style={{ padding: "24px" }}>
                  <div style={{ marginBottom: "18px" }}>
                    <div style={{ fontFamily: "monospace", fontSize: "10px", color: "#3b82f6", letterSpacing: "2px", marginBottom: "8px" }}>PROBLEM</div>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>{project.problem}</p>
                  </div>
                  <div style={{ marginBottom: "18px" }}>
                    <div style={{ fontFamily: "monospace", fontSize: "10px", color: "#3b82f6", letterSpacing: "2px", marginBottom: "8px" }}>APPROACH</div>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>{project.approach}</p>
                  </div>
                  <div style={{ marginBottom: "18px" }}>
                    <div style={{ fontFamily: "monospace", fontSize: "10px", color: "#3b82f6", letterSpacing: "2px", marginBottom: "8px" }}>STACK</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {project.stack.map((item) => (
                        <span key={item} style={{ fontFamily: "monospace", fontSize: "10px", border: "1px solid var(--border)", borderRadius: "999px", padding: "4px 8px", color: "var(--text-muted)" }}>{item}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontFamily: "monospace", fontSize: "10px", color: "#3b82f6", letterSpacing: "2px", marginBottom: "8px" }}>RESULT</div>
                    {project.result && project.result !== "[ADD: measurable result]" ? (
                      <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>{project.result}</p>
                    ) : isDev ? (
                      <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>[ADD: measurable result]</p>
                    ) : null}
                  </div>
                </div>

                <div style={{ padding: "24px", borderLeft: "1px solid var(--border)", background: "rgba(96,165,250,0.02)" }}>
                  <div style={{ border: "1px solid var(--border)", borderRadius: "10px", minHeight: "220px", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-card)" }}>
                    {project.diagram && project.diagram !== "[ADD: real Grafana dashboard screenshot from ChaosForge or PlatformOps-Lab]" && project.diagram !== "[ADD: architecture diagram for LocalCloud Control Plane]" && project.diagram !== "[ADD: architecture diagram for CloudPulse]" ? (
                      <img src={project.diagram} alt={`${project.caption} architecture diagram`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    ) : isDev ? (
                      <div style={{ color: "var(--text-muted)", fontFamily: "monospace", fontSize: "12px", textAlign: "center", padding: "24px" }}>{project.diagram}</div>
                    ) : null}
                  </div>
                  <div style={{ marginTop: "12px", color: "var(--text-secondary)", fontSize: "12px", fontFamily: "monospace" }}>
                    {project.caption} architecture diagram
                  </div>
                  <div style={{ marginTop: "18px", display: "grid", gap: "10px" }}>
                    {project.demo !== "[ADD: demo URL]" ? (
                      <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} demo`} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "8px", background: "#2563eb", color: "#fff", padding: "10px 12px", textDecoration: "none", fontWeight: 600 }}>
                        Demo
                      </a>
                    ) : isDev ? (
                      <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "8px", border: "1px dashed var(--border)", color: "var(--text-muted)", padding: "10px 12px", fontFamily: "monospace", fontSize: "12px" }}>[ADD: demo URL]</span>
                    ) : null}
                    {project.demoVideo !== "[ADD: 60â€“90 sec demo video/GIF]" ? (
                      <a href={project.demoVideo} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} demo video`} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "8px", border: "1px solid var(--border)", color: "var(--text-primary)", padding: "10px 12px", textDecoration: "none" }}>
                        Demo video
                      </a>
                    ) : isDev ? (
                      <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "8px", border: "1px dashed var(--border)", color: "var(--text-muted)", padding: "10px 12px", fontFamily: "monospace", fontSize: "12px" }}>[ADD: 60â€“90 sec demo video/GIF]</span>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
