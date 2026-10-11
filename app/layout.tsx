import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "../components/ThemeContext"

const siteUrl = "https://cfo-dev.pages.dev"
const description =
  "Cloud & DevOps engineer in Berlin delivering AWS and Azure infrastructure as code, containerized workloads, and CI/CD pipelines with Terraform, Kubernetes, Docker, and ECS/Fargate."

export const metadata: Metadata = {
  title: "Franklin Osuji | Cloud & DevOps Engineer",
  description,
  keywords: ["Franklin Osuji", "Cloud Engineer", "DevOps Engineer", "AWS", "Terraform", "Kubernetes", "Berlin"],
  authors: [{ name: "Franklin Osuji" }],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Franklin Osuji | Cloud & DevOps Engineer",
    description,
    url: siteUrl,
    siteName: "Franklin Osuji",
    type: "website",
    images: [{ url: "/og-preview.png", width: 1200, height: 630, alt: "Franklin Osuji, Cloud & DevOps Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Franklin Osuji | Cloud & DevOps Engineer",
    description,
    images: ["/og-preview.png"],
  },
  robots: { index: true, follow: true },
}

// Use the saved choice if there is one, otherwise follow the visitor's system setting.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(!t){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.setAttribute("data-theme",t)}catch(e){document.documentElement.setAttribute("data-theme","dark")}})()`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="PY7i0NfY3Y5zZB636hDYIyfVifSF-OZUh2-csBRYCiM" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
