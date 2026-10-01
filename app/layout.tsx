import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "../components/ThemeContext"

export const metadata: Metadata = {
  metadataBase: new URL("https://cfo-dev.pages.dev"),
  title: "Franklin Chinonso Osuji | Cloud & DevOps Engineer",
  description: "Cloud & DevOps Engineer with 5+ years of experience building infrastructure, automation, and deployment workflows across AWS, Azure, Terraform, Kubernetes, and Linux environments in Berlin, Germany.",
  keywords: ["Franklin Osuji", "Cloud Engineer", "DevOps Engineer", "AWS", "Azure", "Terraform", "Kubernetes", "Berlin"],
  authors: [{ name: "Franklin Chinonso Osuji" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Franklin Chinonso Osuji | Cloud & DevOps Engineer",
    description: "Cloud & DevOps Engineer with 5+ years of experience building infrastructure, automation, and deployment workflows across AWS, Azure, Terraform, Kubernetes, and Linux environments in Berlin, Germany.",
    url: "https://cfo-dev.pages.dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franklin Chinonso Osuji | Cloud & DevOps Engineer",
    description: "Cloud & DevOps Engineer with 5+ years of experience building infrastructure, automation, and deployment workflows across AWS, Azure, Terraform, Kubernetes, and Linux environments in Berlin, Germany.",
  },
}

const themeScript = `(function(){try{var t=localStorage.getItem("theme")||"dark";document.documentElement.setAttribute("data-theme",t);}catch(e){document.documentElement.setAttribute("data-theme","dark");}})();`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
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

