"use client"
const principles = [
  {icon:"[IaC]",title:"Infrastructure as Code First",desc:"Every cloud resource is version-controlled, peer-reviewed, and reproducible. Terraform modules ensure consistent, auditable infrastructure across all environments.",color:"#3b82f6"},
  {icon:"[AUTO]",title:"Automation-Driven Operations",desc:"Manual processes are failure points. CI/CD pipelines, auto-scaling policies, and runbooks eliminate toil and reduce human error in production operations.",color:"#8b5cf6"},
  {icon:"[SRE]",title:"Reliability & Scalability Mindset",desc:"Designing for failure. SLOs, error budgets, health checks, and circuit breakers ensure systems degrade gracefully and recover automatically.",color:"#22c55e"},
  {icon:"[SEC]",title:"Security-Conscious Architecture",desc:"IAM least privilege, secrets management, encrypted transit and storage, isolated VPCs. Security is not an afterthought - it is built into every layer.",color:"#f97316"},
  {icon:"[OBS]",title:"Monitoring & Observability Focus",desc:"Metrics, logs, and traces provide full production visibility. CloudWatch dashboards, alerting, and incident response workflows catch issues before users do.",color:"#06b6d4"},
  {icon:"[OPT]",title:"Cost & Performance Optimization",desc:"Right-sizing compute, spot instance strategies, and reserved capacity planning deliver the same reliability at 30-40% lower cloud spend.",color:"#eab308"},
]
export default function Overview() {
  return (
    <section id="overview" className="section-pad" style={{background:"var(--bg-section)",borderTop:"1px solid var(--border)",borderBottom:"1px solid var(--border)"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:"56px"}}>
          <div style={{fontFamily:"monospace",fontSize:"11px",color:"#3b82f6",letterSpacing:"4px",marginBottom:"12px"}}>// ENGINEERING_PHILOSOPHY</div>
          <h2 style={{fontSize:"clamp(24px,4vw,38px)",fontWeight:700,color:"var(--text-primary)",marginBottom:"16px"}}>How I Build Production Systems</h2>
          <p style={{color:"var(--text-secondary)",fontSize:"15px",maxWidth:"560px",margin:"0 auto",lineHeight:1.7}}>Every decision is driven by reliability, automation, and operational excellence. Not just writing code - engineering systems that scale and self-heal.</p>
        </div>
        <div className="grid-3col">
          {principles.map(p=>(
            <div key={p.title} style={{padding:"24px",borderRadius:"10px",border:"1px solid var(--border)",background:"var(--bg-card2)",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",top:0,left:0,right:0,height:"2px",background:p.color,opacity:0.6}} />
              <div style={{fontFamily:"monospace",fontSize:"13px",color:p.color,fontWeight:700,marginBottom:"12px"}}>{p.icon}</div>
              <h3 style={{fontSize:"15px",fontWeight:600,color:"var(--text-primary)",marginBottom:"10px",lineHeight:1.3}}>{p.title}</h3>
              <p style={{fontSize:"13px",color:"var(--text-secondary)",lineHeight:1.7}}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}