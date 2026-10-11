"use client"

const principles = [
  "Make infrastructure repeatable with version-controlled configuration and automation.",
  "Treat observability as part of the delivery workflow so failures can be investigated with evidence.",
  "Prefer small, reversible changes and clear deployment workflows over manual infrastructure drift.",
  "Apply least-privilege and secrets-management practices where the environment supports them.",
  "Use local project environments and measurable experiments when validating reliability behaviour.",
]

export default function HowIWork() {
  return (
    <section id="how-i-work" className="section-pad section-alt" aria-labelledby="how-title">
      <div className="container narrow">
        <div className="section-heading">
          <div className="eyebrow">// HOW_I_WORK</div>
          <h2 id="how-title">Reliability &amp; Security Principles</h2>
        </div>
        <div className="principles">
          {principles.map((item) => (
            <p key={item}><span aria-hidden="true">&gt;</span>{item}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
