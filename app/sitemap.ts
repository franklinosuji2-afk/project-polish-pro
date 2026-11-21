import type { MetadataRoute } from "next"
import { site } from "../components/site"

// Required so the sitemap is written to dist/ by the static export.
export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}
