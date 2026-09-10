"use client"
const practices = [
  {title:"IAM Least Privilege",desc:"Every Lambda, ECS task, and CI/CD pipeline gets a dedicated IAM role with only the permissions it needs. No wildcard actions, no shared credentials.",icon:"[IAM]",color:"#f97316"},
  {title:"Secrets Management",desc:"Sensitive values stored in AWS Secrets Manager and SSM Parameter Store. Never hardcoded. Auto-rotated where supported. Referenced by ARN in Terraform.",icon:"[SEC]",color:"#ef4444"},
  {title:"Network Isolation",desc:"Private subnets for compute and data layers. Public subnets only for ALB. Security groups follow zero-trust model. VPC flow logs enabled.",icon:"[VPC]",color:"#3b82f6"},
  {title:"HTTPS/TLS Everywhere",desc:"ACM certificates on all ALB listeners. S3 buckets enforce HTTPS via bucket policies. CloudFront enforces TLS 1.2+ minimum.",icon:"[TLS]",color:"#22c55e"},
  {title:"Secure CI/CD Workflows",desc:"GitHub Actions secrets for credentials. OIDC federation eliminates static keys. Docker image scanning before ECR push. Signed commits enforced.",icon:"[CI]",color:"#8b5cf6"},
  {title:"Encryption at Rest",desc:"RDS encryption enabled by default. S3 server-side encryption (SSE-S3 or SSE-KMS). DynamoDB encryption using AWS managed keys.",icon:"[ENC]",color:"#06b6d4"},
]
const checklist = [
  "IAM roles - no root access","MFA enabled on all accounts","VPC flow logs active",
  "CloudTrail enabled","S3 public access blocked","Encryption at rest enabled",
  "Secrets Manager for credentials","Security groups reviewed","Patch management in place","Dependency scanning in CI/CD"
]
export default function Security() {
  return (
    <section id="security" className="section-pad" style={{background:"var(--bg-primary)",borderTop:"1px solid var(--border)"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{marginBottom:"48px"}}>
          <div style={{fontFamily:"monospace",fontSize:"11px",color:"#ef4444",letterSpacing:"4px",marginBottom:"12px"}}>// SECURITY_PRACTICES</div>
          <h2 style={{fontSize:"clamp(24px,4vw,38px)",fontWeight:700,color:"var(--text-primary)",marginBottom:"12px"}}>Security-First Architecture</h2>
          <div style={{width:"40px",height:"2px",background:"#ef4444",marginBottom:"16px"}} />
          <p style={{color:"var(--text-secondary)",fontSize:"14px",maxWidth:"560px"}}>Security is built into every infrastructure decision — not added as an afterthought.</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(340px,1fr))",gap:"20px",marginBottom:"32px"}}>
          {practices.map(p=>(
            <div key={p.title} style={{padding:"22px",borderRadius:"10px",border:"1px solid var(--border)",background:"var(--bg-card)",display:"flex",gap:"16px",alignItems:"flex-start"}}>
              <div style={{padding:"8px 10px",borderRadius:"6px",border:`1px solid ${p.color}30`,background:`${p.color}10`,fontFamily:"monospace",fontSize:"10px",color:p.color,fontWeight:700,flexShrink:0}}>{p.icon}</div>
              <div>
                <h3 style={{fontSize:"15px",fontWeight:600,color:"var(--text-primary)",marginBottom:"8px"}}>{p.title}</h3>
                <p style={{fontSize:"13px",color:"var(--text-secondary)",lineHeight:1.6}}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{padding:"24px",borderRadius:"10px",border:"1px solid rgba(239,68,68,0.2)",background:"rgba(239,68,68,0.03)"}}>
          <div style={{fontFamily:"monospace",fontSize:"11px",color:"#ef4444",letterSpacing:"2px",marginBottom:"16px"}}>INFRASTRUCTURE SECURITY CHECKLIST</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:"8px"}}>
            {checklist.map(item=>(
              <div key={item} style={{display:"flex",gap:"10px",alignItems:"center",fontSize:"13px",color:"var(--text-secondary)"}}>
                <span style={{color:"#22c55e",fontSize:"14px",flexShrink:0}}>&#10003;</span>{item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}