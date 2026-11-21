import { getBuildInfo } from "./buildInfo"

const steps = [
  {
    name: "Lint and type-check",
    text: "ESLint and tsc --noEmit catch mistakes and type errors before anything is built.",
  },
  {
    name: "Build",
    text: "next build produces the production site, then a script checks the export: every link and image resolves, images have alt text, and the Content-Security-Policy covers every inline script. A failed check stops the run.",
  },
  {
    name: "Security scan",
    text: "npm audit fails the run on high or critical advisories in production dependencies. Trivy scans the repository and reports high and critical findings.",
  },
]

export default function Pipeline() {
  const build = getBuildInfo()

  return (
    <section id="pipeline" className="section section-alt" aria-labelledby="pipeline-title">
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
