import { getBuildInfo } from "./buildInfo"

const facts = [
  { label: "Based in", value: "Berlin, Germany" },
  { label: "Work permit", value: "Permanent (Niederlassungserlaubnis), available immediately" },
  { label: "Languages", value: "English (native), German (B2)" },
  { label: "Experience", value: "Almost 4 years professional, plus a 2.5-year apprenticeship and 1.5 years of work-study" },
  { label: "Looking for", value: "Cloud, DevOps, Platform and SRE roles in Berlin, the EU or remote" },
]

const stages = [
  { name: "Type-check", detail: "tsc --noEmit" },
  { name: "Build", detail: "next build" },
  { name: "Security scan", detail: "Trivy" },
]

export default function Hero() {
  const build = getBuildInfo()

  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-main">
          <p className="hero-name">Franklin Osuji, Cloud &amp; DevOps engineer in Berlin</p>
          <h1>I work on the infrastructure behind reliable software: repeatable deployments, monitoring and troubleshooting.</h1>
          <div className="hero-copy">
            <p>
              My day-to-day work covers AWS and Azure infrastructure, Terraform automation, containerized workloads and
              CI/CD pipelines. Outside work I build lab projects to practise Kubernetes, failure testing and observability,
              and publish the source so you can review my approach.
            </p>
          </div>

          <dl className="facts">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="hero-actions">
            <a className="btn" href="/Franklin_Osuji_Resume.pdf" download>Download CV (English)</a>
            <a className="btn btn-quiet" href="/Franklin_Osuji_Lebenslauf_DE.pdf" download>Lebenslauf (Deutsch)</a>
            <a className="text-link" href="https://github.com/franklinosuji2-afk" target="_blank" rel="noreferrer">GitHub</a>
            <a className="text-link" href="https://linkedin.com/in/franklin-osuji-a96003321" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="text-link" href="mailto:franklin.osuji2@gmail.com">Email</a>
          </div>
        </div>

        <aside className="build-panel" aria-label="Latest build of this site">
          <h2>Latest build of this site</h2>
          <ol className="stages">
            {stages.map((stage, index) => (
              <li key={stage.name} style={{ animationDelay: `${0.35 + index * 0.45}s` }}>
                <span className="stage-name">{stage.name}</span>
                <code>{stage.detail}</code>
              </li>
            ))}
          </ol>
          <dl className="build-meta">
            <div>
              <dt>Commit</dt>
              <dd>
                {build.short ? (
                  <a href={`${build.repo}/commit/${build.sha}`} target="_blank" rel="noreferrer"><code>{build.short}</code></a>
                ) : (
                  <code>local build</code>
                )}
              </dd>
            </div>
            <div>
              <dt>Branch</dt>
              <dd><code>{build.branch || "local"}</code></dd>
            </div>
            <div>
              <dt>Built</dt>
              <dd><code>{build.builtAt}</code></dd>
            </div>
          </dl>
          <div className="build-status">
            <img src={build.badge} alt="Status of the latest CI run" width={96} height={20} />
            <a className="text-link" href={build.workflow} target="_blank" rel="noreferrer">View the workflow</a>
          </div>
        </aside>
      </div>
    </section>
  )
}
