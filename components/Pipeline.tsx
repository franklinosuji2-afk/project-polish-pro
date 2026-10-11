import { getBuildInfo } from "./buildInfo"

const steps = [
  {
    name: "Type-check",
    text: "tsc --noEmit catches type errors before anything is built.",
  },
  {
    name: "Build",
    text: "next build produces the production site. A failed build stops the run.",
  },
  {
    name: "Security scan",
    text: "Trivy scans the repository and its dependencies for known vulnerabilities and reports high and critical findings.",
  },
]

export default function Pipeline() {
  const build = getBuildInfo()

  return (
    <section id="pipeline" className="section" aria-labelledby="pipeline-title">
      <div className="container narrow">
        <h2 id="pipeline-title">How this site is built</h2>
        <p className="section-intro">
          This site is a Next.js app in a public GitHub repository, hosted on Cloudflare Pages. A GitHub Actions
          workflow runs on every push to main and on every pull request.
        </p>

        <ol className="steps">
          {steps.map((step) => (
            <li key={step.name}>
              <h3>{step.name}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>

        <p>
          The workflow file is part of the repository, so you can read exactly what runs.
        </p>
        <p className="link-row">
          <a className="text-link" href={build.workflow} target="_blank" rel="noreferrer">View the workflow</a>
          <a className="text-link" href={build.repo} target="_blank" rel="noreferrer">View the source</a>
        </p>
      </div>
    </section>
  )
}
