import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Page not found | Franklin Osuji",
  robots: { index: false },
}

export default function NotFound() {
  return (
    <main id="main" className="not-found">
      <div className="container narrow">
        <p className="not-found-code"><code>404</code></p>
        <h1>This page does not exist.</h1>
        <p className="section-intro">The link may be old or mistyped. The portfolio is a single page, so everything is on the home page.</p>
        <Link className="btn" href="/">Back to the portfolio</Link>
      </div>
    </main>
  )
}
