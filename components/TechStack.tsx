"use client"
const tools = [
  {name:"AWS",category:"Cloud Platform",level:"Expert",desc:"EC2, ECS, Lambda, S3, VPC, IAM, RDS, Route53, CloudFormation, CloudWatch",color:"#f97316",short:"AWS"},
  {name:"Terraform",category:"Infrastructure as Code",level:"Advanced",desc:"Modules, remote state, workspaces, provider config, resource management",color:"#8b5cf6",short:"TF"},
  {name:"Docker",category:"Containerization",level:"Advanced",desc:"Multi-stage builds, image optimization, security scanning, registry management",color:"#06b6d4",short:"DO"},
  {name:"ECS/Fargate",category:"Container Orchestration",level:"Advanced",desc:"Task definitions, service scaling, load balancing, Blue/Green deployments",color:"#f97316",short:"ECS"},
  {name:"GitHub Actions",category:"CI/CD",level:"Advanced",desc:"Pipeline design, secrets management, matrix builds, deployment workflows",color:"var(--text-primary)",short:"GHA"},
  {name:"Jenkins",category:"CI/CD",level:"Advanced",desc:"Pipeline as code, multi-branch builds, plugin management",color:"#ef4444",short:"JK"},
  {name:"Python",category:"Programming",level:"Advanced",desc:"Automation scripts, Lambda functions, infrastructure tooling, data processing",color:"#eab308",short:"PY"},
  {name:"Linux",category:"Systems",level:"Advanced",desc:"System administration, shell scripting, process management, networking",color:"#22c55e",short:"LX"},
  {name:"CloudWatch",category:"Monitoring",level:"Advanced",desc:"Metrics, alarms, log groups, dashboards, custom metrics, alerting",color:"#f97316",short:"CW"},
  {name:"PostgreSQL",category:"Database",level:"Advanced",desc:"RDS setup, query optimization, backup strategies, security configuration",color:"#60a5fa",short:"PG"},
  {name:"DynamoDB",category:"Database",level:"Advanced",desc:"Table design, capacity planning, GSI/LSI, streams, DAX caching",color:"#f97316",short:"DDB"},
  {name:"Azure",category:"Cloud Platform",level:"Intermediate",desc:"VM provisioning, resource groups, networking, identity management",color:"#60a5fa",short:"AZ"},
]
const levelColor: Record<string,string> = {Expert:"#4ade80",Advanced:"#60a5fa",Intermediate:"#f97316",Beginner:"var(--text-secondary)"}
export default function TechStack() {
  return (
    <section id="skills" className="section-pad" style={{background:"var(--bg-primary)"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{marginBottom:"48px"}}>
          <div style={{fontFamily:"monospace",fontSize:"11px",color:"#3b82f6",letterSpacing:"4px",marginBottom:"12px"}}>// TECH_STACK</div>
          <h2 style={{fontSize:"clamp(24px,4vw,38px)",fontWeight:700,color:"var(--text-primary)",marginBottom:"12px"}}>Engineering Toolchain</h2>
          <div style={{width:"40px",height:"2px",background:"#3b82f6",marginBottom:"16px"}} />
          <p style={{color:"var(--text-secondary)",fontSize:"14px"}}>Production-tested tools used across real infrastructure deployments</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:"16px"}}>
          {tools.map(t=>(
            <div key={t.name} style={{padding:"20px",borderRadius:"10px",border:"1px solid var(--border)",background:"var(--bg-card2)",display:"flex",gap:"16px",alignItems:"flex-start"}}>
              <div style={{width:"44px",height:"44px",borderRadius:"8px",background:`${t.color}15`,border:`1px solid ${t.color}30`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                <span style={{fontFamily:"monospace",fontSize:"10px",fontWeight:700,color:t.color}}>{t.short}</span>
              </div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"4px"}}>
                  <span style={{fontSize:"15px",fontWeight:600,color:"var(--text-primary)"}}>{t.name}</span>
                  <span style={{fontSize:"10px",fontFamily:"monospace",color:levelColor[t.level]}}>{t.level}</span>
                </div>
                <div style={{fontSize:"10px",color:"#3b82f6",fontFamily:"monospace",marginBottom:"6px"}}>{t.category}</div>
                <div style={{fontSize:"12px",color:"var(--text-muted)",lineHeight:1.5}}>{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

