import { site } from "./site"

const facts = [
  { label: "Based in", value: "Berlin, Germany" },
  { label: "Work permit", value: "Permanent (Niederlassungserlaubnis), available immediately" },
  { label: "Languages", value: "English (native), German (B2)" },
  { label: "Experience", value: "Almost 4 years professional, plus a 2.5-year apprenticeship and 1 year of work-study" },
  { label: "Looking for", value: "Cloud, DevOps, Platform and SRE roles in Berlin, the EU or remote" },
]

// Each entry points at a project below and says what to check there.
const start = [
  {
    id: "aws-terraform-platform",
    name: "AWS Terraform Platform",
    text: "Plans run on pull requests, changes apply only after an approval, and no AWS keys are stored anywhere.",
  },
  {
    id: "platformops-lab",
    name: "PlatformOps-Lab",
    text: "Argo CD keeps a local Kubernetes cluster in sync with Git, with metrics and logs in Grafana.",
  },
  {
    id: "kubesentinel",
    name: "KubeSentinel",
    text: "Trivy scans run in CI, and Gatekeeper rejects insecure manifests before they reach the cluster.",
  },
]

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-main">
          <p className="hero-name">{site.name}, Cloud &amp; DevOps engineer in Berlin</p>
          <h1>I make AWS environments reproducible and deployments boring.</h1>
          <div className="hero-copy">
            <p>
              I take infrastructure that was clicked together or handled by hand and make it repeatable: Terraform with
              remote state, pipelines that behave the same way on every run, and checks before anything changes.
            </p>
            <p>
              My strongest areas are AWS, Terraform and delivery automation. My Kubernetes experience is GitOps and
              platform-lab work, not multi-tenant production clusters. Each project below says what I tested and what
              I did not.
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
            <a className="btn" href={site.cvEn} download>Download CV (English)</a>
            <a className="btn btn-quiet" href={site.cvDe} download>Lebenslauf (Deutsch)</a>
            <a className="text-link" href={site.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="text-link" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="text-link" href={`mailto:${site.email}`}>Email</a>
          </div>
        </div>

        <aside className="start" aria-labelledby="start-title">
          <h2 id="start-title">Three places to start</h2>
          <ul>
            {start.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.name}</a>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
