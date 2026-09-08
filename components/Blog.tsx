"use client"
const posts = [
  {title:"How I Reduced Docker Image Size by 78%",desc:"Multi-stage builds, .dockerignore optimization, base image selection, and layer caching strategies that cut production image sizes from 1.2GB to 260MB.",tag:"Containerization",date:"Coming soon",color:"#06b6d4",mins:"8 min read"},
  {title:"Building ECS Infrastructure with Terraform",desc:"A practical guide to provisioning production-ready ECS Fargate clusters with auto-scaling, ALB integration, and IAM roles using reusable Terraform modules.",tag:"Infrastructure as Code",date:"Coming soon",color:"#8b5cf6",mins:"12 min read"},
  {title:"CI/CD Pipeline Design for AWS Containers",desc:"Designing GitHub Actions workflows for containerised AWS workloads - from Docker build to ECR push to ECS Blue/Green deployment with automated rollback.",tag:"CI/CD",date:"Coming soon",color:"#f97316",mins:"10 min read"},
  {title:"Cloud Cost Optimization Strategies",desc:"How to reduce AWS bills by 30-40% using right-sizing, Savings Plans, Spot instances for non-critical workloads, and eliminating idle resources.",tag:"Cloud Economics",date:"Coming soon",color:"#22c55e",mins:"7 min read"},
]
export default function Blog() {
  return (
    <section id="blog" className="section-pad" style={{background:"var(--bg-section)",borderTop:"1px solid var(--border)"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{marginBottom:"48px"}}>
          <div style={{fontFamily:"monospace",fontSize:"11px",color:"#eab308",letterSpacing:"4px",marginBottom:"12px"}}>// TECHNICAL_WRITING</div>
          <h2 style={{fontSize:"clamp(24px,4vw,38px)",fontWeight:700,color:"var(--text-primary)",marginBottom:"12px"}}>Engineering Blog</h2>
          <div style={{width:"40px",height:"2px",background:"#eab308",marginBottom:"16px"}} />
          <p style={{color:"var(--text-secondary)",fontSize:"14px"}}>Deep dives into cloud infrastructure, DevOps practices, and real-world production engineering challenges.</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:"20px"}}>
          {posts.map(p=>(
            <div key={p.title} style={{padding:"24px",borderRadius:"10px",border:"1px solid var(--border)",background:"var(--bg-card2)",display:"flex",flexDirection:"column",gap:"12px",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",top:0,left:0,right:0,height:"2px",background:p.color,opacity:0.7}} />
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <span style={{fontFamily:"monospace",fontSize:"10px",color:p.color,padding:"2px 8px",borderRadius:"4px",border:`1px solid ${p.color}33`,background:`${p.color}10`}}>{p.tag}</span>
                <span style={{fontFamily:"monospace",fontSize:"10px",color:"var(--text-muted)"}}>{p.mins}</span>
              </div>
              <h3 style={{fontSize:"15px",fontWeight:600,color:"var(--text-primary)",lineHeight:1.4}}>{p.title}</h3>
              <p style={{fontSize:"13px",color:"var(--text-secondary)",lineHeight:1.6,flex:1}}>{p.desc}</p>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <span style={{fontFamily:"monospace",fontSize:"11px",color:"var(--text-muted)"}}>{p.date}</span>
                <span style={{fontFamily:"monospace",fontSize:"11px",color:"var(--text-muted)",padding:"4px 10px",borderRadius:"4px",border:"1px solid var(--border)"}}>Coming Soon</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}