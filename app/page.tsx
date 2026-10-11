import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Pipeline from "../components/Pipeline"
import Experience from "../components/Experience"
import Skills from "../components/Skills"
import Credentials from "../components/Credentials"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <Projects />
        <Pipeline />
        <Experience />
        <Skills />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
