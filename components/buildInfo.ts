// Read at build time. Cloudflare Pages and GitHub Actions both provide the commit and branch.
// For a local build there is no commit info, so the page says so instead of guessing.
export function getBuildInfo() {
  const sha = process.env.CF_PAGES_COMMIT_SHA || process.env.GITHUB_SHA || ""
  const branch = process.env.CF_PAGES_BRANCH || process.env.GITHUB_REF_NAME || ""
  const builtAt = new Date().toISOString().slice(0, 16).replace("T", " ") + " UTC"
  return {
    sha,
    short: sha ? sha.slice(0, 7) : "",
    branch,
    builtAt,
    repo: "https://github.com/franklinosuji2-afk/project-polish-pro",
    workflow: "https://github.com/franklinosuji2-afk/project-polish-pro/actions/workflows/site-ci.yml",
    badge: "https://github.com/franklinosuji2-afk/project-polish-pro/actions/workflows/site-ci.yml/badge.svg",
  }
}
