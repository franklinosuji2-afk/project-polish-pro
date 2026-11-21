// Serves dist/ locally and applies the "/*" block of dist/_headers, so the Content-Security-Policy
// is exercised the way Cloudflare Pages will apply it. Usage: node scripts/preview.mjs [port]
import { createServer } from 'node:http'
import { readFileSync, existsSync, statSync } from 'node:fs'
import { join, extname, resolve, sep } from 'node:path'

const root = resolve('dist')
const port = Number(process.argv[2] || process.env.PORT || 4173)
if (!existsSync(join(root, 'index.html'))) {
  console.error('preview: dist/index.html not found; run "npm run build" first')
  process.exit(1)
}

const headers = {}
const headersFile = join(root, '_headers')
if (existsSync(headersFile)) {
  let inBlock = false
  for (const line of readFileSync(headersFile, 'utf8').replace(/^﻿/, '').split(/\r?\n/)) {
    if (line.startsWith('/*')) { inBlock = true; continue }
    if (inBlock && /^\s+\S+:/.test(line)) {
      const i = line.indexOf(':')
      headers[line.slice(0, i).trim()] = line.slice(i + 1).trim()
    } else if (inBlock && line.trim() && !/^\s/.test(line)) break
  }
}

const types = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.avif': 'image/avif', '.pdf': 'application/pdf',
  '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml; charset=utf-8', '.woff2': 'font/woff2', '.json': 'application/json',
}

createServer((req, res) => {
  const path = decodeURIComponent(new URL(req.url, 'http://x').pathname)
  let file = resolve(join(root, path))
  if (file !== root && !file.startsWith(root + sep)) { res.writeHead(403).end('Forbidden'); return }
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html')
  if (!existsSync(file) && existsSync(file + '.html')) file += '.html'
  const found = existsSync(file) && statSync(file).isFile()
  const target = found ? file : join(root, '404.html')
  res.writeHead(found ? 200 : 404, { ...headers, 'Content-Type': types[extname(target)] || 'application/octet-stream' })
  res.end(readFileSync(target))
}).listen(port, '127.0.0.1', () => console.log(`preview: http://127.0.0.1:${port}/ (headers from dist/_headers applied)`))
