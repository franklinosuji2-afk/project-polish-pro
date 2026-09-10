"use client"

const certs = [
  {
    issuer: "AMAZON WEB SERVICES",
    name: "AWS Certified Cloud Practitioner",
    period: "Aug 2025 - Aug 2028",
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
    period: "Exam Scheduled",
    status: "IN PROGRESS",
    color: "#f97316",
  },
  {
    issuer: "AMAZON WEB SERVICES",
    name: "AWS Certified Solutions Architect - Associate",
    period: "Expected 2026",
    status: "IN PROGRESS",
    color: "#f97316",
  },
  {
    issuer: "DIGITAL CAREER INSTITUTE (DCI)",
    name: "DevOps & Cloud Engineering Program",
    period: "Nov 2024 - Mar 2026",
    status: "COMPLETED",
    color: "#3b82f6",
  },
  {
    issuer: "FEDERAL UNIVERSITY OF TECHNOLOGY, OWERRI (FUTO)",
    name: "B.Eng. Petroleum Engineering",
    period: "2012 - 2016",
    status: "COMPLETED",
    color: "#3b82f6",
    note: "Nigeria",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad" style={{ background: "var(--bg-section)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "40px" }}>
          <div style={{ fontFamily: "monospace", fontSize: "11px", color: "#3b82f6", letterSpacing: "4px", marginBottom: "12px" }}>// EDUCATION_AND_CERTIFICATIONS</div>
          <h2 style={{ fontSize: "clamp(24px,4vw,38px)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>Education & Credentials</h2>
          <div style={{ width: "40px", height: "2px", background: "#3b82f6" }} />
        </div>

        <div className="grid-3col">
          {certs.map((cert, i) => (
            <div key={i} style={{ padding: "18px", borderRadius: "12px", border: `1px solid ${cert.color}22`, background: "var(--bg-card)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px", gap: "6px" }}>
                <span style={{ fontFamily: "monospace", fontSize: "9px", color: "var(--text-muted)", letterSpacing: "1px", lineHeight: 1.4 }}>{cert.issuer}</span>
                <span style={{ fontFamily: "monospace", fontSize: "9px", color: cert.color, border: `1px solid ${cert.color}44`, padding: "2px 6px", borderRadius: "4px", flexShrink: 0, whiteSpace: "nowrap" }}>{cert.status}</span>
              </div>
              <h3 style={{ fontWeight: 600, color: "var(--text-primary)", marginBottom: "6px", fontSize: "13px", lineHeight: 1.4 }}>{cert.name}</h3>
              <div style={{ fontFamily: "monospace", fontSize: "10px", color: "var(--text-muted)", marginBottom: "6px" }}>{cert.period}</div>
              {cert.note && <p style={{ fontSize: "11px", color: "var(--text-secondary)", lineHeight: 1.5 }}>{cert.note}</p>}
              {cert.verify && <a href={cert.verify} target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px", color: "#22c55e", textDecoration: "none", fontFamily: "monospace" }}>Verify on Credly</a>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



