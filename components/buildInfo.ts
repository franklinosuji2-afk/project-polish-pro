import { site } from "./site"

// Read at build time. Cloudflare Pages and GitHub Actions both provide the commit and branch.
// For a local build there is no commit info, so the page says so instead of guessing.
const sha = process.env.CF_PAGES_COMMIT_SHA || process.env.GITHUB_SHA || ""
const branch = process.env.CF_PAGES_BRANCH || process.env.GITHUB_REF_NAME || ""
// Computed once per build so the hero and the pipeline section can never disagree.
const builtAt = new Date().toISOString().slice(0, 16).replace("T", " ") + " UTC"

export function getBuildInfo() {
  return {
    sha,
    short: sha ? sha.slice(0, 7) : "",
    branch,
    builtAt,
    repo: site.repo,
    workflow: `${site.repo}/actions/workflows/site-ci.yml`,
    badge: `${site.repo}/actions/workflows/site-ci.yml/badge.svg`,
  }
}
