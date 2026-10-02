"use client"
import { useState, useEffect } from "react"
const lines = [
  "franklin@portfolio:~",
  "ready",
  "// What I work on",
  "focus INFRASTRUCTURE",
  "work AUTOMATION",
  "interest RELIABILITY",
  "location BERLIN",
]
const roleFocus = [
  "Cloud Infrastructure Engineer",
  "DevOps Engineer",
  "Platform Engineer",
  "Site Reliability Engineer (SRE)",
  "Cloud Engineer",
  "Infrastructure Automation Engineer",
]
export default function Hero() {
  const [displayed, setDisplayed] = useState<string[]>([])
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [current, setCurrent] = useState("")
  useEffect(() => {
    if (lineIdx >= lines.length) return
    if (charIdx < lines[lineIdx].length) {
      const t = setTimeout(() => {
        setCurrent((p) => p + lines[lineIdx][charIdx])
        setCharIdx((c) => c + 1)
      }, lines[lineIdx].startsWith("//") ? 20 : 30)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setDisplayed((p) => [...p, lines[lineIdx]])
      setCurrent("")
      setCharIdx(0)
      setLineIdx((l) => l + 1)
    }, 260)
    return () => clearTimeout(t)
  }, [lineIdx, charIdx])
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "100px 24px 56px",
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.04) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle,rgba(59,130,246,0.06) 0%,transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Verified certification badge */}
        <div
          style={{
            position: "absolute",
            top: "-20px",
            right: "0",
            zIndex: 3,
          }}
        >
          <a
            href="https://www.credly.com/users/franklin-chinonso-osuji.4b5356de"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Verify Franklin Osuji's AWS Certified Cloud Practitioner credential on Credly"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "7px 12px",
              borderRadius: "7px",
              border: "1px solid rgba(34,197,94,0.35)",
              background: "rgba(34,197,94,0.07)",
              color: "#22c55e",
              textDecoration: "none",
              fontFamily: "monospace",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.4px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              style={{
                width: "17px",
                height: "17px",
                borderRadius: "50%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #22c55e",
                fontSize: "9px",
                fontWeight: 900,
              }}
              aria-hidden="true"
            >
              ✓
            </span>
            VERIFIED · AWS CERTIFIED
          </a>
        </div>
        {/* Profile identity */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 12px",
              borderRadius: "6px",
              border: "1px solid var(--border)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 8px rgba(34,197,94,0.5)",
              }}
            />
            <span
              style={{
                fontSize: "11px",
                color: "#22c55e",
                fontFamily: "monospace",
              }}
            >
              AVAILABLE IMMEDIATELY
            </span>
          </div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "6px 12px",
              borderRadius: "6px",
              border: "1px solid var(--border)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                color: "var(--text-secondary)",
                fontFamily: "monospace",
              }}
            >
              BERLIN, GERMANY
            </span>
          </div>
        </div>
        <div className="hero-grid">
          <div>
            <div
              style={{
                fontFamily: "monospace",
                fontSize: "11px",
                color: "#3b82f6",
                letterSpacing: "3px",
                marginBottom: "12px",
              }}
            >
              // CLOUD_INFRASTRUCTURE_AND_DEVOPS_ENGINEER
            </div>
            <h1
              style={{
                fontSize: "clamp(28px,4.5vw,54px)",
                fontWeight: 800,
                color: "var(--text-primary)",
                lineHeight: 1.1,
                marginBottom: "20px",
                letterSpacing: "-0.5px",
              }}
            >
              Cloud & DevOps Engineer — AWS, Terraform, Kubernetes
            </h1>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "clamp(14px,2vw,17px)",
                lineHeight: 1.8,
                marginBottom: "18px",
                maxWidth: "700px",
              }}
            >
              Cloud Infrastructure & DevOps Engineer with 5+ years of combined
              engineering, consulting, and digital operations experience. I
              work mainly with AWS, Terraform, Docker, Kubernetes, ECS/Fargate,
              Linux, and CI/CD automation.
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "14px",
                lineHeight: 1.8,
                marginBottom: "26px",
                maxWidth: "700px",
              }}
            >
              My focus is on making infrastructure repeatable and deployments
              easier to operate. I work across infrastructure-as-code,
              containerized workloads, automation, troubleshooting, reliability,
              security, and cost-aware cloud operations.
            </p>
            {/* Professional details */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "10px",
                marginBottom: "26px",
                maxWidth: "700px",
              }}
            >
              {[
                ["Location", "Berlin, Germany"],
                ["Work authorization", "Niederlassungserlaubnis (Permanent)"],
                ["Availability", "Available Immediately"],
                ["English", "Fluent"],
                ["German", "B2"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    padding: "10px 12px",
                    borderLeft: "2px solid rgba(59,130,246,0.35)",
                    background: "rgba(255,255,255,0.015)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "9px",
                      color: "var(--text-muted)",
                      fontFamily: "monospace",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      marginBottom: "3px",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>
            {/* Role focus */}
            <div
              style={{
                padding: "16px",
                border: "1px solid var(--border)",
                borderRadius: "9px",
                background: "rgba(255,255,255,0.015)",
                marginBottom: "28px",
                maxWidth: "700px",
              }}
            >
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: "10px",
                  color: "#3b82f6",
                  letterSpacing: "2px",
                  marginBottom: "12px",
                }}
              >
                ROLE_FOCUS
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "7px",
                }}
              >
                {roleFocus.map((role) => (
                  <span
                    key={role}
                    style={{
                      padding: "6px 9px",
                      border: "1px solid var(--border)",
                      borderRadius: "5px",
                      color: "var(--text-secondary)",
                      fontSize: "11px",
                      fontFamily: "monospace",
                    }}
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
            {/* Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(100px, 1fr))",
                gap: "12px",
                marginBottom: "28px",
              }}
            >
              <div
                style={{
                  padding: "14px",
                  borderRadius: "8px",
                  border: "1px solid var(--border)",
                  background: "rgba(255,255,255,0.02)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(20px,3vw,28px)",
                    fontWeight: 800,
                    color: "#3b82f6",
                    marginBottom: "2px",
                  }}
                >
                  5+
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "var(--text-secondary)",
                    fontFamily: "monospace",
                  }}
                >
                  Years
                </div>
              </div>
              <div
                style={{
                  padding: "14px",
                  borderRadius: "8px",
                  border: "1px solid var(--border)",
                  background: "rgba(255,255,255,0.02)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(20px,3vw,28px)",
                    fontWeight: 800,
                    color: "#3b82f6",
                    marginBottom: "2px",
                  }}
                >
                  AWS
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "var(--text-secondary)",
                    fontFamily: "monospace",
                  }}
                >
                  Cloud
                </div>
              </div>
              <div
                style={{
                  padding: "14px",
                  borderRadius: "8px",
                  border: "1px solid var(--border)",
                  background: "rgba(255,255,255,0.02)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(20px,3vw,28px)",
                    fontWeight: 800,
                    color: "#3b82f6",
                    marginBottom: "2px",
                  }}
                >
                  Berlin
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "var(--text-secondary)",
                    fontFamily: "monospace",
                  }}
                >
                  Location
                </div>
              </div>
            </div>
            {/* CV actions */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <a
                href="/Franklin_Osuji_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px 16px",
                  borderRadius: "6px",
                  background: "#2563eb",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "12px",
                  fontWeight: 600,
                  fontFamily: "monospace",
                }}
              >
                View CV
              </a>
              <a
                href="/Franklin_Osuji_Resume.pdf"
                download
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px 16px",
                  borderRadius: "6px",
                  border: "1px solid var(--border)",
                  background: "rgba(255,255,255,0.02)",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  fontSize: "12px",
                  fontFamily: "monospace",
                }}
              >
                Download CV
              </a>
            </div>
          </div>
          {/* Terminal */}
          <div
            style={{
              padding: "22px",
              borderRadius: "18px",
              border: "1px solid var(--border)",
              background: "rgba(6,10,15,0.75)",
              boxShadow: "0 0 0 1px rgba(59,130,246,0.08)",
              alignSelf: "start",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                borderBottom: "1px solid var(--border)",
                paddingBottom: "10px",
                marginBottom: "16px",
              }}
            >
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444" }} />
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f59e0b" }} />
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#22c55e" }} />
              <span
                style={{
                  marginLeft: "10px",
                  fontSize: "11px",
                  color: "var(--text-muted)",
                  fontFamily: "monospace",
                }}
              >
                portfolio
              </span>
            </div>
            <div
              style={{
                fontFamily: "JetBrains Mono, monospace",
                color: "#c6d4f1",
                fontSize: "13px",
                lineHeight: 1.9,
              }}
            >
              {displayed.map((line, index) => (
                <div key={index} style={{ whiteSpace: "pre-wrap" }}>
                  {line}
                </div>
              ))}
              {lineIdx < lines.length && (
                <div style={{ whiteSpace: "pre-wrap" }}>
                  {current || ""}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}