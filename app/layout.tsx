import type { Metadata, Viewport } from "next"
import { Inter, Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "../components/ThemeContext"
import { site } from "../components/site"

// Fonts are downloaded at build time and served from this site, so the CSP needs no third-party font hosts.
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" })
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["600", "700", "800"], display: "swap", variable: "--font-jakarta" })
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], display: "swap", variable: "--font-plex-mono" })

const pageTitle = `${site.name} | ${site.title}`
const description =
  "Cloud & DevOps engineer in Berlin delivering AWS and Azure infrastructure as code, containerized workloads, and CI/CD pipelines with Terraform, Kubernetes, Docker, and ECS/Fargate."

export const metadata: Metadata = {
  title: pageTitle,
  description,
  keywords: ["Franklin Osuji", "Cloud Engineer", "DevOps Engineer", "AWS", "Terraform", "Kubernetes", "Berlin"],
  authors: [{ name: site.name }],
  metadataBase: new URL(site.url),
  alternates: { canonical: "/" },
  verification: { google: "PY7i0NfY3Y5zZB636hDYIyfVifSF-OZUh2-csBRYCiM" },
  openGraph: {
    title: pageTitle,
    description,
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [{ url: "/og-preview.png", width: 1200, height: 630, alt: `${site.name}, ${site.title}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description,
    images: ["/og-preview.png"],
  },
  robots: { index: true, follow: true },
}

// Lets the browser UI (address bar on mobile) match the page in both themes.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#f3f7fb" },
  ],
}

// Use the saved choice if there is one, otherwise follow the visitor's system setting.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.setAttribute("data-theme",t)}catch(e){document.documentElement.setAttribute("data-theme","dark")}})()`

// Structured data so search engines understand who the page is about. JSON data blocks are not executed,
// so they do not need a CSP hash. Only facts that are already visible on the page are included.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  url: site.url,
  address: { "@type": "PostalAddress", addressLocality: "Berlin", addressCountry: "DE" },
  knowsLanguage: ["en", "de"],
  knowsAbout: ["AWS", "Azure", "Terraform", "Kubernetes", "Docker", "CI/CD", "Observability"],
  sameAs: [site.github, site.linkedin],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={`${inter.variable} ${jakarta.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
