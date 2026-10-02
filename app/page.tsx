"use client"
import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Experience from "../components/Experience"
import Skills from "../components/Skills"
import Certifications from "../components/Certifications"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
export default function Home() {
  return (
    <main id="home" style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      <Nav />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}
