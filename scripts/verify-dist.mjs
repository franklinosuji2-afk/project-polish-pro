// Post-build checks on the exported site in dist/. Exits 1 with a list of problems.
// It does not replace a browser test; it catches the mistakes that silently break a static deploy:
// missing files, dead anchors, images without alt text or size, and a weakened Content-Security-Policy.
import { readFileSync, existsSync, statSync } from 'node:fs'
import { join } from 'node:path'

const DIST = 'dist'
const problems = []
const fail = (msg) => problems.push(msg)

const indexPath = join(DIST, 'index.html')
if (!existsSync(indexPath)) {
  console.error(`verify: ${indexPath} not found; run "npm run build" first`)
  process.exit(1)
}
const html = readFileSync(indexPath, 'utf8')

// ---- document basics ----
if (!/<html[^>]*\blang="[a-z-]+"/i.test(html)) fail('<html> has no lang attribute')
if (!/<title>[^<]{10,}<\/title>/i.test(html)) fail('missing or very short <title>')
if (!/<meta[^>]+name="description"[^>]+content="[^"]{50,}"/i.test(html)) fail('missing or short meta description')
if (!/<link[^>]+rel="canonical"/i.test(html)) fail('missing canonical link')
if (!/<meta[^>]+property="og:image"/i.test(html)) fail('missing og:image')
if (!/<meta[^>]+name="viewport"/i.test(html)) fail('missing viewport meta')
const h1 = html.match(/<h1[\s>]/gi) || []
if (h1.length !== 1) fail(`expected exactly one <h1>, found ${h1.length}`)

// ---- ids, anchors and local assets ----
const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]))
for (const [, target] of html.matchAll(/\shref="#([^"]+)"/g)) {
  if (!ids.has(target)) fail(`anchor #${target} has no matching id`)
}
const localRefs = new Set()
for (const [, url] of html.matchAll(/\s(?:src|href)="(\/[^"]*)"/g)) {
  if (url.startsWith('//')) continue
  localRefs.add(url.split('#')[0].split('?')[0])
}
for (const ref of localRefs) {
  if (ref === '/' || ref === '') continue
  const file = join(DIST, decodeURIComponent(ref))
  if (!existsSync(file) || !statSync(file).isFile()) fail(`referenced file missing from dist: ${ref}`)
}

// ---- images: alt text and intrinsic size (prevents layout shift) ----
for (const [tag] of html.matchAll(/<img\b[^>]*>/gi)) {
  const src = (tag.match(/\ssrc="([^"]*)"/) || [])[1] || '(no src)'
  if (!/\salt="/.test(tag)) fail(`image without alt: ${src}`)
  if (!/\swidth="\d+"/.test(tag) || !/\sheight="\d+"/.test(tag)) fail(`image without width/height: ${src}`)
}

// ---- security headers ----
const headersPath = join(DIST, '_headers')
if (!existsSync(headersPath)) {
  fail('dist/_headers is missing')
} else {
  const headers = readFileSync(headersPath, 'utf8')
  const csp = (headers.match(/Content-Security-Policy:\s*(.+)/) || [])[1] || ''
  const scriptSrc = (csp.match(/script-src ([^;]*)/) || [])[1] || ''
  if (!csp) fail('no Content-Security-Policy header')
  if (/'unsafe-inline'|'unsafe-eval'/.test(scriptSrc)) fail("script-src still allows 'unsafe-inline' or 'unsafe-eval'; csp-hashes.mjs did not run")
  if (!/'sha256-[A-Za-z0-9+/=]+'/.test(scriptSrc)) fail('script-src has no inline script hashes')
  if (!/frame-ancestors 'none'/.test(csp)) fail("CSP is missing frame-ancestors 'none'")
  if (!/object-src 'none'/.test(csp)) fail("CSP is missing object-src 'none'")
  for (const h of ['Strict-Transport-Security', 'X-Content-Type-Options', 'Referrer-Policy', 'Permissions-Policy']) {
    if (!new RegExp(`^\\s+${h}:`, 'm').test(headers)) fail(`missing ${h} header`)
  }
  // Every inline script in the page must be covered by a hash, otherwise the browser blocks it in production.
  const { createHash } = await import('node:crypto')
  const inline = /<script(?![^>]*\bsrc=)(?![^>]*type=["']application\/(?:ld\+)?json["'])[^>]*>([\s\S]*?)<\/script>/gi
  for (const m of html.matchAll(inline)) {
    const h = `'sha256-${createHash('sha256').update(m[1], 'utf8').digest('base64')}'`
    if (!scriptSrc.includes(h)) fail(`inline script not covered by CSP hash: ${m[1].slice(0, 60)}...`)
  }
}

// ---- other deployable files ----
for (const f of ['robots.txt', 'sitemap.xml', '404.html', 'icon.svg', 'Franklin_Osuji_Resume.pdf', 'Franklin_Osuji_Lebenslauf_DE.pdf', '.well-known/security.txt']) {
  if (!existsSync(join(DIST, f))) fail(`dist/${f} is missing`)
}

if (problems.length) {
  console.error(`verify: ${problems.length} problem(s)\n` + problems.map((p) => `  - ${p}`).join('\n'))
  process.exit(1)
}
console.log(`verify: OK (${ids.size} ids, ${localRefs.size} local references, CSP script hashes cover all inline scripts)`)
