"use client"

import Nav from "../components/Nav"
import Hero from "../components/Hero"
import CertBadge from "../components/CertBadge"
import About from "../components/About"
import Projects from "../components/Projects"
import Experience from "../components/Experience"
import Certifications from "../components/Certifications"
import Skills from "../components/Skills"
import TechStack from "../components/TechStack"
import Observability from "../components/Observability"
import Security from "../components/Security"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main id="home" style={{minHeight:"100vh",background:"var(--bg-primary)"}}>
      <Nav />
      <Hero />
      <CertBadge />

      <About />
      <Projects />
      <Experience />

      <Certifications />
      <Skills />
      <TechStack />
      <Observability />
      <Security />
      <Contact />
      <Footer />
    </main>
  )
}


