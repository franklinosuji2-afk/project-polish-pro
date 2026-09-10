import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "../components/ThemeContext"

export const metadata: Metadata = {
  title: "Franklin Chinonso Osuji | AWS Cloud & DevOps Engineer",
  description: "Cloud Infrastructure & DevOps Engineer with 4+ years of combined engineering, consulting, and digital operations experience. Based in Berlin, Germany. Hands-on with AWS, Azure, Terraform, Docker, Kubernetes, ECS/Fargate, Linux, and CI/CD automation.",
  keywords: ["Franklin Osuji","Cloud Infrastructure Engineer","DevOps Engineer","Cloud Engineer","Platform Engineer","SRE","AWS","Azure","Terraform","Kubernetes","Berlin"],
  authors: [{ name: "Franklin Chinonso Osuji" }],
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

