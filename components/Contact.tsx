"use client"
export default function Contact() {
  return (
    <section id="contact" className="section-pad" style={{background:"var(--bg-section)",borderTop:"1px solid var(--border)"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{marginBottom:"32px"}}>
          <div style={{fontFamily:"monospace",fontSize:"11px",color:"#3b82f6",letterSpacing:"4px",marginBottom:"12px"}}>// GET_IN_TOUCH</div>
          <h2 style={{fontSize:"clamp(24px,4vw,38px)",fontWeight:700,color:"var(--text-primary)",marginBottom:"12px"}}>Let's Build Something Together</h2>
          <div style={{width:"40px",height:"2px",background:"#3b82f6",marginBottom:"16px"}} />
          <p style={{color:"var(--text-secondary)",fontSize:"15px",maxWidth:"520px",lineHeight:1.8}}>Open to Cloud Engineer, DevOps, and SRE roles across Germany and Europe. Hybrid and remote friendly.</p>
        </div>
      </div>
    </section>
  )
}