// Post-build step: replace 'unsafe-inline' in script-src with SHA-256 hashes of
// every inline <script> in the exported site. Next.js static export emits inline
// scripts whose content changes on every build (build id, page data), so the
// hashes must be generated from the build output, never written by hand.
import { createHash } from 'node:crypto'
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const DIST = 'dist'
const MAX_HEADER_LINE = 2000 // Cloudflare Pages limit per _headers line

function htmlFiles(dir) {
  const out = []
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.name === '_next') continue
    const p = join(dir, e.name)
    if (e.isDirectory()) out.push(...htmlFiles(p))
    else if (e.name.endsWith('.html')) out.push(p)
  }
  return out
}

const inline =
  /<script(?![^>]*\bsrc=)(?![^>]*type=["']application\/(?:ld\+)?json["'])[^>]*>([\s\S]*?)<\/script>/gi

const hashes = new Set()
const files = htmlFiles(DIST)
for (const f of files) {
  for (const m of readFileSync(f, 'utf8').matchAll(inline)) {
    hashes.add(`'sha256-${createHash('sha256').update(m[1], 'utf8').digest('base64')}'`)
  }
}

const headersPath = join(DIST, '_headers')
if (!existsSync(headersPath)) throw new Error(`${headersPath} not found; run next build first`)
const before = readFileSync(headersPath, 'utf8')
if (!/script-src [^;]*;/.test(before)) throw new Error('no script-src directive in _headers')

const scriptSrc = ["'self'", ...[...hashes].sort()].join(' ')
const after = before.replace(/script-src [^;]*;/, `script-src ${scriptSrc};`)
const longest = Math.max(...after.split(/\r?\n/).map((l) => l.length))
if (longest > MAX_HEADER_LINE) throw new Error(`_headers line is ${longest} chars (limit ${MAX_HEADER_LINE})`)

writeFileSync(headersPath, after)
console.log(`CSP: ${hashes.size} inline script hash(es) from ${files.length} page(s); longest header line ${longest} chars`)
