import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // Static export with <picture> (WebP with PNG fallback); next/image cannot express that.
    rules: { "@next/next/no-img-element": "off" },
  },
  globalIgnores(["dist/**", ".next/**", "node_modules/**", "next-env.d.ts"]),
])
