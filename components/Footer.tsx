import { site } from "./site"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>{site.name}, Cloud &amp; DevOps engineer in Berlin.</p>
        <p>
          Built with Next.js and hosted on Cloudflare Pages.{" "}
          <a href={site.repo} target="_blank" rel="noreferrer">Source on GitHub</a>
          {" "}
          <a href="#top">Back to top</a>
        </p>
      </div>
    </footer>
  )
}
