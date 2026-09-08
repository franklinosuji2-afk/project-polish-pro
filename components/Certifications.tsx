"use client"
const certs = [
  {issuer:"AMAZON WEB SERVICES",name:"AWS Certified Cloud Practitioner",period:"Aug 2025 - Aug 2028",status:"ACTIVE",color:"#22c55e",verify:"https://www.credly.com/badges/914031f2-e5b2-4e4e-b408-2d512d91566d/public_url"},
  {issuer:"HASHICORP",name:"HashiCorp Certified Terraform Associate",period:"Exam Scheduled",status:"IN PROGRESS",color:"#f97316"},
  {issuer:"AMAZON WEB SERVICES",name:"AWS Certified Solutions Architect - Associate",period:"Expected: 2026",status:"IN PROGRESS",color:"#f97316"},
  {issuer:"DIGITAL CAREER INSTITUTE (DCI)",name:"AWS Cloud Engineer (m/w/d)",period:"Mar 2025 - Mar 2026",status:"COMPLETED",color:"#3b82f6",note:"1,800 TU — AWS Cloud Practitioner (480 TU): Cloud Foundations, Networking, Security, Database. DevOps (480 TU): Advanced Linux, Python, CI/CD, Docker. AWS Solution Architect (480 TU): IaC, CloudFormation, Terraform, Advanced AWS Services."},
  {issuer:"DIGITAL CAREER INSTITUTE (DCI)",name:"Testing Center for Digital Professions",period:"12 Nov 2024 - 19 Dec 2024",status:"COMPLETED",color:"#3b82f6",note:"160 TU — Introduction to Digital Professions, Online Marketing, Web Development, Computing, Programming Languages & IT Consulting, Digital Job Market Navigation, Assessment."},
  {issuer:"FEDERAL UNIVERSITY OF TECHNOLOGY, OWERRI (FUTO)",name:"B.Eng. Petroleum Engineering",period:"Jan 2012 - Sep 2016",status:"COMPLETED",color:"#3b82f6",note:"Second Class Honours (Upper Division)"},
]
export default function Certifications() {
  return (
    <section id="certifications" className="section-pad" style={{background:"var(--bg-section)"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{marginBottom:"40px"}}>
          <div style={{fontFamily:"monospace",fontSize:"11px",color:"#3b82f6",letterSpacing:"4px",marginBottom:"12px"}}>// EDUCATION_AND_CERTIFICATIONS</div>
          <h2 style={{fontSize:"clamp(24px,4vw,38px)",fontWeight:700,color:"var(--text-primary)",marginBottom:"12px"}}>Education & Credentials</h2>
          <div style={{width:"40px",height:"2px",background:"#3b82f6"}} />
        </div>
        <div className="grid-3col">
          {certs.map((cert,i)=>(
            <div key={i} style={{padding:"18px",borderRadius:"12px",border:`1px solid ${cert.color}22`,background:"var(--bg-card)"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"10px",gap:"6px"}}>
                <span style={{fontFamily:"monospace",fontSize:"9px",color:"var(--text-muted)",letterSpacing:"1px",lineHeight:1.4}}>{cert.issuer}</span>
                <span style={{fontFamily:"monospace",fontSize:"9px",color:cert.color,border:`1px solid ${cert.color}44`,padding:"2px 6px",borderRadius:"4px",flexShrink:0,whiteSpace:"nowrap"}}>{cert.status}</span>
              </div>
              <h3 style={{fontWeight:600,color:"var(--text-primary)",marginBottom:"6px",fontSize:"13px",lineHeight:1.4}}>{cert.name}</h3>
              <div style={{fontFamily:"monospace",fontSize:"10px",color:"var(--text-muted)",marginBottom:"6px"}}>{cert.period}</div>
              {cert.note&&<p style={{fontSize:"11px",color:"var(--text-secondary)",lineHeight:1.5,marginBottom:"6px"}}>{cert.note}</p>}
              {cert.verify&&<a href={cert.verify} target="_blank" rel="noreferrer" style={{fontSize:"11px",color:"#22c55e",textDecoration:"none",fontFamily:"monospace"}}>Verify on Credly</a>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}