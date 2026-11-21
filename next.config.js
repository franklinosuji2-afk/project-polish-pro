/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: the site is plain files served from Cloudflare Pages (see wrangler.jsonc).
  output: 'export',
  distDir: 'dist',
  reactStrictMode: true,
}
module.exports = nextConfig
