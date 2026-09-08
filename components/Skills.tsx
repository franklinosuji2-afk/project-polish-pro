"use client"
const cats = [
  { title:"Cloud Platforms", color:"#3b82f6", skills:["AWS EC2","ECS","Fargate","S3","IAM","VPC","Route 53","Lambda","RDS","CloudWatch","CloudFormation","Azure"] },
  { title:"Infrastructure as Code", color:"#8b5cf6", skills:["Terraform","AWS CloudFormation"] },
  { title:"Containers & Orchestration", color:"#06b6d4", skills:["Docker","Kubernetes","Helm","Amazon ECS","AWS Fargate","Kustomize"] },
  { title:"CI/CD & Automation", color:"#f97316", skills:["GitHub Actions","Jenkins","Ansible","CI/CD Pipelines","PowerShell","Bash"] },
  { title:"Observability & Reliability", color:"#22c55e", skills:["Prometheus","Grafana","Loki","AWS CloudWatch","Incident Response","SRE","Chaos Engineering","SLOs","MTTR"] },
  { title:"Programming & Scripting", color:"#eab308", skills:["Python","FastAPI","Node.js","JavaScript","Bash","PowerShell","SQL","Linux"] },
  { title:"Databases", color:"#ec4899", skills:["PostgreSQL","AWS RDS","DynamoDB","JSON Persistence"] },
]
export default function Skills() {
  return (
    <section id="skills" className="section-pad" style={{background:"#0a0e17"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{marginBottom:"40px"}}>
          <div style={{fontFamily:"monospace",fontSize:"11px",color:"#3b82f6",letterSpacing:"4px",marginBottom:"12px"}}>// CORE_TECHNOLOGIES</div>
          <h2 style={{fontSize:"clamp(24px,4vw,38px)",fontWeight:700,color:"#fff",marginBottom:"12px"}}>Technical Skills</h2>
          <div style={{width:"40px",height:"2px",background:"#3b82f6"}} />
          <p style={{marginTop:"16px",color:"#8b949e",fontSize:"13px",fontFamily:"monospace"}}>Cloud, platform engineering, automation, and observability technologies</p>
        </div>
        <div className="grid-3col">
          {cats.map(c=>(
            <div key={c.title} style={{padding:"20px",borderRadius:"12px",border:`1px solid ${c.color}33`,background:`${c.color}08`}}>
              <h3 style={{fontSize:"11px",fontWeight:600,fontFamily:"monospace",color:c.color,marginBottom:"14px",letterSpacing:"2px"}}>{c.title.toUpperCase()}</h3>
              <div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}>
                {c.skills.map(s=>(<span key={s} style={{padding:"3px 8px",fontSize:"11px",borderRadius:"4px",border:`1px solid ${c.color}33`,color:c.color,background:`${c.color}15`,fontFamily:"monospace"}}>{s}</span>))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
