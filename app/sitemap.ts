import type { MetadataRoute } from "next"

const BASE_URL = "https://fc-sparkle-studio.lovable.app"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}
