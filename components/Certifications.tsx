"use client"

const certs = [
  {
    issuer: "AMAZON WEB SERVICES",
    name: "AWS Certified Cloud Practitioner",
    period: "Active · Aug 2025 – Aug 2028",
    status: "ACTIVE",
    color: "#22c55e",
    verify: "https://www.credly.com/users/franklin-chinonso-osuji.4b5356de",
  },
  {
    issuer: "AMAZON WEB SERVICES TRAINING AND CERTIFICATION",
    name: "AWS re/Start Graduate",
    period: "Completed",
    status: "COMPLETED",
    color: "#22c55e",
    verify: "https://www.credly.com/badges/9405ef7c-91a8-466b-b970-a917de42a180",
  },
  {
    issuer: "HASHICORP",
    name: "HashiCorp Certified: Terraform Associate",
    period: "Exam scheduled",
    status: "IN PROGRESS",
    color: "#f97316",
  },
  {
    issuer: "AMAZON WEB SERVICES",
    name: "AWS Certified Solutions Architect – Associate",
    period: "Expected 2026",
    status: "IN PROGRESS",
    color: "#f97316",
  },
  {
    issuer: "DIGITAL CAREER INSTITUTE (DCI)",
    name: "DevOps & Cloud Engineering Program",
    period: "Berlin · Nov 2024 – Mar 2026",
    status: "COMPLETED",
    color: "#22c55e",
  },
  {
    issuer: "FEDERAL UNIVERSITY OF TECHNOLOGY, OWERRI (FUTO)",
    name: "B.Eng. Petroleum Engineering",
    period: "Nigeria · 2012 – 2016",
    status: "COMPLETED",
    color: "#22c55e",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad section-alt" aria-labelledby="certifications-title">
      <div className="container">
        <div className="section-heading">
          <div className="eyebrow">// EDUCATION_AND_CERTIFICATIONS</div>
          <h2 id="certifications-title">Education &amp; Certifications</h2>
        </div>
        <div className="cert-grid">
          {certs.map((cert) => (
            <article className="cert-card" key={cert.name}>
              <div className="cert-top">
                <span>{cert.issuer}</span>
                <b style={{ color: cert.color }}>{cert.status}</b>
              </div>
              <h3>{cert.name}</h3>
              <p>{cert.period}</p>
              {cert.verify && (
                <a href={cert.verify} target="_blank" rel="noreferrer" aria-label={`Verify ${cert.name} on Credly`}>
                  Verify on Credly →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
