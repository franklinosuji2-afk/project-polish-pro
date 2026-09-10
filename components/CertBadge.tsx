"use client"
import { useState, useEffect } from "react"

export default function CertBadge() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 300)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])
  return (
    <a href="https://www.credly.com/users/franklin-chinonso-osuji.4b5356de" target="_blank" rel="noopener noreferrer"
      style={{position:"fixed",bottom:"20px",right:"20px",zIndex:999,display:visible?"flex":"none",alignItems:"center",gap:"8px",padding:"7px 12px",background:"rgba(6,10,15,0.95)",border:"1px solid rgba(34,197,94,0.4)",borderRadius:"8px",textDecoration:"none",boxShadow:"0 0 20px rgba(34,197,94,0.1)",backdropFilter:"blur(12px)",transition:"all 0.3s"}}
      onMouseEnter={e=>{e.currentTarget.style.boxShadow="0 0 30px rgba(34,197,94,0.25)";e.currentTarget.style.transform="translateY(-2px)"}}
      onMouseLeave={e=>{e.currentTarget.style.boxShadow="0 0 20px rgba(34,197,94,0.1)";e.currentTarget.style.transform="translateY(0)"}}>
      <div style={{width:"24px",height:"24px",borderRadius:"50%",background:"linear-gradient(135deg,#f97316,#ea580c)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
        <span style={{color:"var(--text-primary)",fontWeight:900,fontSize:"7px",fontFamily:"monospace"}}>AWS</span>
      </div>
      <div>
        <div style={{display:"flex",alignItems:"center",gap:"4px",marginBottom:"1px"}}>
          <span style={{width:"5px",height:"5px",borderRadius:"50%",background:"#4ade80",display:"inline-block"}} />
          <span style={{fontSize:"9px",color:"#4ade80",fontFamily:"monospace",letterSpacing:"1px"}}>VERIFIED</span>
        </div>
        <div style={{fontSize:"10px",fontWeight:600,color:"var(--text-primary)",lineHeight:1}}>AWS Certified</div>
      </div>
    </a>
  )
}


