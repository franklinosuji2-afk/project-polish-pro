"use client"
export default function ArchDiagram() {
  return (
    <section id="architecture" className="section-pad" style={{background:"var(--bg-primary)",borderTop:"1px solid var(--border)"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{marginBottom:"48px"}}>
          <div style={{fontFamily:"monospace",fontSize:"11px",color:"#3b82f6",letterSpacing:"4px",marginBottom:"12px"}}>// ARCHITECTURE_DIAGRAMS</div>
          <h2 style={{fontSize:"clamp(24px,4vw,38px)",fontWeight:700,color:"var(--text-primary)",marginBottom:"12px"}}>Cloud Architecture Patterns</h2>
          <div style={{width:"40px",height:"2px",background:"#3b82f6"}} />
        </div>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px"}}>

          {/* ECS/Fargate Deployment */}
          <div style={{padding:"24px",borderRadius:"10px",border:"1px solid var(--border)",background:"var(--bg-card2)"}}>
            <div style={{fontFamily:"monospace",fontSize:"11px",color:"#3b82f6",letterSpacing:"2px",marginBottom:"16px"}}>ECS FARGATE DEPLOYMENT</div>
            <svg viewBox="0 0 400 220" style={{width:"100%",height:"auto"}}>
              {/* Internet */}
              <rect x="10" y="10" width="80" height="36" rx="4" fill="none" stroke="var(--border)" strokeWidth="1"/>
              <text x="50" y="24" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontFamily="monospace">Internet</text>
              <text x="50" y="36" textAnchor="middle" fill="var(--text-muted)" fontSize="8" fontFamily="monospace">Users</text>
              {/* Arrow */}
              <line x1="90" y1="28" x2="120" y2="28" stroke="var(--border)" strokeWidth="1" markerEnd="url(#arrow)"/>
              {/* ALB */}
              <rect x="120" y="10" width="80" height="36" rx="4" fill="rgba(249,115,22,0.1)" stroke="rgba(249,115,22,0.4)" strokeWidth="1"/>
              <text x="160" y="24" textAnchor="middle" fill="#f97316" fontSize="9" fontFamily="monospace">ALB</text>
              <text x="160" y="36" textAnchor="middle" fill="#f97316" fontSize="7" fontFamily="monospace">Load Balancer</text>
              {/* Arrow */}
              <line x1="200" y1="28" x2="230" y2="28" stroke="var(--border)" strokeWidth="1"/>
              {/* ECS */}
              <rect x="230" y="10" width="80" height="36" rx="4" fill="rgba(249,115,22,0.1)" stroke="rgba(249,115,22,0.4)" strokeWidth="1"/>
              <text x="270" y="24" textAnchor="middle" fill="#f97316" fontSize="9" fontFamily="monospace">ECS</text>
              <text x="270" y="36" textAnchor="middle" fill="#f97316" fontSize="7" fontFamily="monospace">Fargate Tasks</text>
              {/* VPC box */}
              <rect x="5" y="65" width="390" height="100" rx="6" fill="none" stroke="var(--border)" strokeWidth="1" strokeDasharray="4,3"/>
              <text x="14" y="78" fill="var(--text-muted)" fontSize="8" fontFamily="monospace">VPC / Private Subnet</text>
              {/* ECR */}
              <rect x="20" y="88" width="80" height="32" rx="4" fill="rgba(59,130,246,0.1)" stroke="rgba(59,130,246,0.3)" strokeWidth="1"/>
              <text x="60" y="102" textAnchor="middle" fill="#60a5fa" fontSize="9" fontFamily="monospace">ECR</text>
              <text x="60" y="113" textAnchor="middle" fill="var(--text-muted)" fontSize="7" fontFamily="monospace">Container Reg</text>
              {/* RDS */}
              <rect x="120" y="88" width="80" height="32" rx="4" fill="rgba(34,197,94,0.1)" stroke="rgba(34,197,94,0.3)" strokeWidth="1"/>
              <text x="160" y="102" textAnchor="middle" fill="#22c55e" fontSize="9" fontFamily="monospace">RDS</text>
              <text x="160" y="113" textAnchor="middle" fill="var(--text-muted)" fontSize="7" fontFamily="monospace">PostgreSQL</text>
              {/* CloudWatch */}
              <rect x="220" y="88" width="80" height="32" rx="4" fill="rgba(249,115,22,0.1)" stroke="rgba(249,115,22,0.3)" strokeWidth="1"/>
              <text x="260" y="102" textAnchor="middle" fill="#f97316" fontSize="9" fontFamily="monospace">CloudWatch</text>
              <text x="260" y="113" textAnchor="middle" fill="var(--text-muted)" fontSize="7" fontFamily="monospace">Monitoring</text>
              {/* IAM */}
              <rect x="310" y="88" width="72" height="32" rx="4" fill="rgba(139,92,246,0.1)" stroke="rgba(139,92,246,0.3)" strokeWidth="1"/>
              <text x="346" y="102" textAnchor="middle" fill="#a78bfa" fontSize="9" fontFamily="monospace">IAM</text>
              <text x="346" y="113" textAnchor="middle" fill="var(--text-muted)" fontSize="7" fontFamily="monospace">Roles</text>
              {/* GitHub Actions */}
              <rect x="20" y="185" width="360" height="28" rx="4" fill="rgba(255,255,255,0.02)" stroke="var(--border)" strokeWidth="1"/>
              <text x="200" y="203" textAnchor="middle" fill="var(--text-muted)" fontSize="9" fontFamily="monospace">GitHub Actions CI/CD Pipeline</text>
              {/* Arrows up */}
              <line x1="60" y1="185" x2="60" y2="122" stroke="var(--border)" strokeWidth="1" strokeDasharray="2,2"/>
              <line x1="160" y1="185" x2="160" y2="122" stroke="var(--border)" strokeWidth="1" strokeDasharray="2,2"/>
              <line x1="260" y1="185" x2="260" y2="122" stroke="var(--border)" strokeWidth="1" strokeDasharray="2,2"/>
            </svg>
          </div>

          {/* CI/CD Pipeline */}
          <div style={{padding:"24px",borderRadius:"10px",border:"1px solid var(--border)",background:"var(--bg-card2)"}}>
            <div style={{fontFamily:"monospace",fontSize:"11px",color:"#8b5cf6",letterSpacing:"2px",marginBottom:"16px"}}>CI/CD PIPELINE FLOW</div>
            <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
              {[
                {step:"01",name:"Code Push",detail:"Developer pushes to main branch",color:"#8b5cf6"},
                {step:"02",name:"GitHub Actions Triggered",detail:"Workflow file detected, pipeline starts",color:"#8b5cf6"},
                {step:"03",name:"Run Tests",detail:"Unit tests, linting, security scan",color:"#3b82f6"},
                {step:"04",name:"Docker Build",detail:"Multi-stage build, image optimized",color:"#06b6d4"},
                {step:"05",name:"Push to ECR",detail:"Tagged image pushed to registry",color:"#22c55e"},
                {step:"06",name:"Terraform Apply",detail:"Infrastructure changes provisioned",color:"#f97316"},
                {step:"07",name:"ECS Deploy",detail:"Blue/Green traffic shift via CodeDeploy",color:"#f97316"},
                {step:"08",name:"Health Checks",detail:"ALB validates new tasks healthy",color:"#22c55e"},
                {step:"09",name:"Monitoring Active",detail:"CloudWatch alarms & dashboards live",color:"#f97316"},
              ].map(s=>(
                <div key={s.step} style={{display:"flex",alignItems:"center",gap:"12px",padding:"8px 12px",borderRadius:"6px",border:"1px solid var(--border)",background:"var(--bg-card2)"}}>
                  <span style={{fontFamily:"monospace",fontSize:"10px",color:s.color,minWidth:"24px"}}>{s.step}</span>
                  <div style={{flex:1}}>
                    <div style={{fontSize:"12px",fontWeight:600,color:"var(--text-primary)"}}>{s.name}</div>
                    <div style={{fontSize:"11px",color:"var(--text-muted)"}}>{s.detail}</div>
                  </div>
                  <span style={{width:"6px",height:"6px",borderRadius:"50%",background:s.color,flexShrink:0,opacity:0.7}} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}