"use client"

import { useEffect, useState } from "react"

const lines = [
  "$ whoami",
  "> Franklin Osuji",
  "$ role --current",
  "> Cloud & DevOps Engineer",
  "$ experience --years",
  "> Almost 4 years professional",
  "$ cloud --focus",
  "> AWS | Terraform | Kubernetes | CI/CD",
  "$ status",
  "> Available immediately",
]

export default function Hero() {
  const [displayed, setDisplayed] = useState<string[]>([])
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [current, setCurrent] = useState("")

  useEffect(() => {
    if (lineIdx >= lines.length) return
    if (charIdx < lines[lineIdx].length) {
      const timer = setTimeout(() => {
        setCurrent((value) => value + lines[lineIdx][charIdx])
        setCharIdx((value) => value + 1)
      }, lines[lineIdx].startsWith("$") ? 35 : 12)
      return () => clearTimeout(timer)
    }
    const timer = setTimeout(() => {
      setDisplayed((value) => [...value, lines[lineIdx]])
      setCurrent("")
      setCharIdx(0)
      setLineIdx((value) => value + 1)
    }, 250)
    return () => clearTimeout(timer)
  }, [lineIdx, charIdx])

  return (
    <section id="home" className="hero section-pad" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div>
          <div className="eyebrow-row" aria-label="Professional status">
            <span className="status-badge"><span className="status-dot" /> Available immediately</span>
            <span className="plain-badge">AWS Certified Cloud Practitioner</span>
            <span className="plain-badge">Berlin, Germany</span>
          </div>

          <h1 id="hero-title" className="hero-title">
            Cloud &amp; DevOps Engineer — AWS, Terraform, Kubernetes, CI/CD
          </h1>

          <p className="hero-subtext">
            Almost 4 years of professional experience delivering AWS and Azure infrastructure as code,
            containerized workloads, and CI/CD pipelines in contract and client environments, plus a
            2.5-year apprenticeship and 1.5 years of work-study since 2019. Based in Berlin, I am open
            to Cloud, DevOps, Platform, and SRE roles across Europe.
          </p>

          <div className="hero-actions">
            <a className="button primary" href="#projects">View Projects</a>
            <a className="button secondary" href="/Franklin_Osuji_Resume.pdf" download>
              Download CV
            </a>
            <a className="button ghost" href="#contact">Contact Me</a>
          </div>

          <div className="hero-links" aria-label="Professional links">
            <a href="https://github.com/franklinosuji2-afk" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/franklin-osuji-a96003321" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:franklin.osuji2@gmail.com">Email</a>
          </div>
        </div>

        <div className="terminal" aria-label="Terminal-style professional summary">
          <div className="terminal-bar">
            <span className="terminal-dots" aria-hidden="true"><i /><i /><i /></span>
            <span>franklin@portfolio:~</span>
            <span className="terminal-ready">● ready</span>
          </div>
          <div className="terminal-body">
            {displayed.map((line, index) => (
              <div key={index} className={line.startsWith("$") ? "terminal-command" : "terminal-output"}>
                {line}
              </div>
            ))}
            {lineIdx < lines.length && (
              <div className={lines[lineIdx].startsWith("$") ? "terminal-command" : "terminal-output"}>
                {current}<span className="cursor" aria-hidden="true">_</span>
              </div>
            )}
            {lineIdx >= lines.length && (
              <div className="terminal-focus">
                <div className="terminal-comment">// What I work on</div>
                <div><span>focus</span><b>INFRASTRUCTURE</b></div>
                <div><span>work</span><b>AUTOMATION</b></div>
                <div><span>interest</span><b>RELIABILITY</b></div>
                <div><span>location</span><b>BERLIN</b></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
