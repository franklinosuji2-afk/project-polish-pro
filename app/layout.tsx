import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "../components/ThemeContext"

export const metadata: Metadata = {
  title: "Franklin Chinonso Osuji | AWS Cloud & DevOps Engineer",
  description: "AWS-Certified Cloud Infrastructure & DevOps Engineer based in Berlin, Germany. Specializing in Terraform, Docker/ECS, CI/CD automation, and cloud-native infrastructure.",
  keywords: ["Franklin Osuji","AWS Cloud Engineer","DevOps Engineer","Berlin","Terraform","Docker","CI/CD"],
  authors: [{ name: "Franklin Chinonso Osuji" }],
}

const themeScript = `(function(){try{var t=localStorage.getItem("theme")||"dark";document.documentElement.setAttribute("data-theme",t);}catch(e){document.documentElement.setAttribute("data-theme","dark");}})();`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <meta name="google-site-verification" content="Ny0Zc5CBbuxdAjUwq9YZWrnXRcXKeJDAO6bAbmGdtho" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
