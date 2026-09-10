"use client"
const metrics = [
  {label:"Avg Response Time",value:"87ms",status:"good",trend:"-12%"},
  {label:"Error Rate",value:"0.02%",status:"good",trend:"-0.3%"},
  {label:"CPU Utilization",value:"34%",status:"good",trend:"+2%"},
  {label:"Memory Usage",value:"61%",status:"warn",trend:"+8%"},
  {label:"Deployment Freq",value:"8/wk",status:"good",trend:"+3"},
  {label:"MTTR",value:"4.2min",status:"good",trend:"-1.8min"},
]
const statusColor: Record<string,string> = {good:"#4ade80",warn:"#f97316",bad:"#ef4444"}
const cards = [
  {title:"Monitoring Stack",color:"#06b6d4",items:["AWS CloudWatch Metrics and Alarms","Container Insights for ECS","ALB access logs and request metrics","Custom business metrics","Multi-region health checks"]},
  {title:"Logging Architecture",color:"#8b5cf6",items:["Structured JSON logging in Lambda","CloudWatch Log Groups with retention","Log Insights for query and analysis","Error pattern alerting","Centralized log aggregation"]},
  {title:"Alerting and Incident Response",color:"#f97316",items:["SNS topic for critical alerts","Escalation policies","Runbook documentation per alarm","Auto-remediation Lambda functions","Post-incident review process"]},
  {title:"Reliability Practices",color:"#22c55e",items:["SLO definition and error budget tracking","Blue/Green deployment strategy","Automated rollback on health failure","Circuit breaker patterns","Chaos engineering mindset"]},
]
export default function Observability() {
  return (
    <section id="observability" className="section-pad" style={{background:"var(--bg-section)",borderTop:"1px solid var(--border)"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{marginBottom:"48px"}}>
          <div style={{fontFamily:"monospace",fontSize:"11px",color:"#06b6d4",letterSpacing:"4px",marginBottom:"12px"}}>// OBSERVABILITY_AND_RELIABILITY</div>
          <h2 style={{fontSize:"clamp(24px,4vw,38px)",fontWeight:700,color:"var(--text-primary)",marginBottom:"12px"}}>Monitoring & Reliability Engineering</h2>
          <div style={{width:"40px",height:"2px",background:"#06b6d4",marginBottom:"16px"}} />
          <p style={{color:"var(--text-secondary)",fontSize:"14px"}}>Production systems require full visibility. These are the observability practices and tools I implement.</p>
        </div>
        <div style={{padding:"24px",borderRadius:"10px",border:"1px solid var(--border)",background:"rgba(6,182,212,0.03)",marginBottom:"28px"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px",flexWrap:"wrap",gap:"8px"}}>
            <div style={{fontFamily:"monospace",fontSize:"11px",color:"#06b6d4",letterSpacing:"2px"}}>EXAMPLE SLO DASHBOARD — TARGET METRICS</div>
            <div style={{display:"flex",alignItems:"center",gap:"6px"}}>
              <span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#4ade80",display:"inline-block"}} />
              <span style={{fontSize:"11px",color:"#4ade80",fontFamily:"monospace"}}>All systems operational</span>
            </div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))",gap:"12px"}}>
            {metrics.map(m=>(
              <div key={m.label} style={{padding:"14px",borderRadius:"8px",border:"1px solid var(--border)",background:"var(--metric-bg)"}}>
                <div style={{fontSize:"10px",color:"var(--text-muted)",fontFamily:"monospace",marginBottom:"6px"}}>{m.label}</div>
                <div style={{fontSize:"22px",fontWeight:700,color:statusColor[m.status],fontFamily:"monospace",marginBottom:"4px"}}>{m.value}</div>
                <div style={{fontSize:"10px",color:"var(--text-secondary)",fontFamily:"monospace"}}>{m.trend}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"}}>
          {cards.map(card=>(
            <div key={card.title} style={{padding:"20px",borderRadius:"10px",border:"1px solid var(--border)",background:"var(--bg-card2)"}}>
              <div style={{fontFamily:"monospace",fontSize:"10px",color:card.color,letterSpacing:"2px",marginBottom:"12px"}}>{card.title.toUpperCase()}</div>
              {card.items.map(item=>(
                <div key={item} style={{display:"flex",gap:"10px",fontSize:"13px",color:"var(--text-secondary)",marginBottom:"8px",lineHeight:1.5}}>
                  <span style={{color:card.color,flexShrink:0,fontSize:"10px",marginTop:"3px"}}>{">"}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
