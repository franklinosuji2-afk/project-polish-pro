"use client";
import { useState, useEffect } from "react";
const lines = [
  "$ terraform init",
  "> Initializing cloud infrastructure...",
  "$ docker build --platform linux/amd64 .",
  "> Building production container...",
  "$ aws ecs update-service --force-new-deployment",
  "> Deploying to ECS Fargate... Done",
  "$ echo $STATUS",
  "> All systems operational",
];
const metrics = [
  { value: "40%", label: "Faster Deployments", icon: "rocket" },
  { value: "35%", label: "Reliability Improvement", icon: "shield" },
  { value: "99.9%", label: "Uptime Target", icon: "activity" },
];
export default function Hero() {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [current, setCurrent] = useState("");
  useEffect(() => {
    if (lineIdx >= lines.length) return;
    if (charIdx < lines[lineIdx].length) {
      const t = setTimeout(
        () => {
          setCurrent((p) => p + lines[lineIdx][charIdx]);
          setCharIdx((c) => c + 1);
        },
        lines[lineIdx].startsWith("$") ? 40 : 15,
      );
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setDisplayed((p) => [...p, lines[lineIdx]]);
        setCurrent("");
        setCharIdx(0);
        setLineIdx((l) => l + 1);
      }, 350);
      return () => clearTimeout(t);
    }
  }, [lineIdx, charIdx]);
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px 24px 48px",
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
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
        {/* Top badge row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "5px 12px",
              borderRadius: "6px",
              border: "1px solid rgba(34,197,94,0.4)",
              background: "rgba(34,197,94,0.06)",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#4ade80",
                display: "inline-block",
                boxShadow: "0 0 6px #4ade80",
              }}
            />
            <span
              style={{
                fontSize: "12px",
                color: "#4ade80",
                fontFamily: "monospace",
              }}
            >
              Available for roles
            </span>
          </div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "5px 12px",
              borderRadius: "6px",
              border: "1px solid rgba(249,115,22,0.4)",
              background: "rgba(249,115,22,0.06)",
            }}
          >
            <div
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                background: "linear-gradient(135deg,#f97316,#ea580c)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  color: "#fff",
                  fontWeight: 900,
                  fontSize: "7px",
                  fontFamily: "monospace",
                }}
              >
                AWS
              </span>
            </div>
            <span
              style={{
                fontSize: "12px",
                color: "#f97316",
                fontFamily: "monospace",
              }}
            >
              AWS Certified
            </span>
          </div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "5px 12px",
              borderRadius: "6px",
              border: "1px solid var(--border)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                color: "var(--text-secondary)",
                fontFamily: "monospace",
              }}
            >
              Berlin, Germany
            </span>
          </div>
        </div>

        <div className="hero-grid">
          {/* Left */}
          <div>
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
              I build scalable cloud infrastructure, automate deployments, and
              optimize production systems.
            </h1>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "clamp(14px,2vw,17px)",
                lineHeight: 1.8,
                marginBottom: "32px",
                maxWidth: "520px",
              }}
            >
              AWS-Certified Cloud Infrastructure & DevOps Engineer specialising in Terraform,
              ECS/Fargate, and CI/CD automation. Based in Berlin, open to Cloud,
              DevOps, and SRE roles across Germany and Europe.
            </p>

            {/* Metrics */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: "12px",
                marginBottom: "32px",
              }}
            >
              {metrics.map((m) => (
                <div
                  key={m.label}
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
                    {m.value}
                  </div>
                  <div
                    style={{
                      fontSize: "10px",
                      color: "var(--text-muted)",
                      fontFamily: "monospace",
                      lineHeight: 1.3,
                    }}
                  >
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                marginBottom: "28px",
              }}
            >
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <a
                  href="#projects"
                  style={{
                    padding: "11px 22px",
                    background: "#2563eb",
                    color: "#fff",
                    borderRadius: "7px",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 600,
                    border: "1px solid #2563eb",
                  }}
                >
                  View Projects
                </a>
                <a
                  href="/cv.html"
                  target="_blank"
                  style={{
                    padding: "11px 22px",
                    border: "1px solid rgba(59,130,246,0.4)",
                    color: "#60a5fa",
                    borderRadius: "7px",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                >
                  Download CV
                </a>
                <a
                  href="#contact"
                  style={{
                    padding: "11px 22px",
                    border: "1px solid var(--border)",
                    color: "var(--text-secondary)",
                    borderRadius: "7px",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  Contact Me
                </a>
              </div>
              <a
                href="tel:+4915259380812"
                style={{
                  fontFamily: "monospace",
                  fontSize: "12px",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                }}
              >
                
              </a>
            </div>
            {/* Links */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {[
                {
                  label: "GitHub",
                  href: "https://github.com/franklinosuji2-afk",
                },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com/in/franklin-osuji-a96003321",
                },
                { label: "Email", href: "mailto:franklin.osuji2@gmail.com" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: "6px 14px",
                    fontSize: "12px",
                    color: "var(--text-muted)",
                    border: "1px solid var(--border)",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontFamily: "monospace",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right - Terminal */}
          <div
            style={{
              borderRadius: "10px",
              border: "1px solid var(--border)",
              overflow: "hidden",
              boxShadow: "0 0 60px rgba(59,130,246,0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 16px",
                background: "var(--bg-card)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div style={{ display: "flex", gap: "6px" }}>
                <span
                  style={{
                    width: "11px",
                    height: "11px",
                    borderRadius: "50%",
                    background: "rgba(239,68,68,0.7)",
                  }}
                />
                <span
                  style={{
                    width: "11px",
                    height: "11px",
                    borderRadius: "50%",
                    background: "rgba(234,179,8,0.7)",
                  }}
                />
                <span
                  style={{
                    width: "11px",
                    height: "11px",
                    borderRadius: "50%",
                    background: "rgba(34,197,94,0.7)",
                  }}
                />
              </div>
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: "11px",
                  color: "var(--text-muted)",
                }}
              >
                franklin@prod-cluster:~
              </span>
              <div
                style={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#4ade80",
                  }}
                />
                <span
                  style={{
                    fontSize: "10px",
                    color: "#4ade80",
                    fontFamily: "monospace",
                  }}
                >
                  live
                </span>
              </div>
            </div>
            <div
              style={{
                background: "var(--bg-primary)",
                padding: "20px",
                fontFamily: "monospace",
                fontSize: "12px",
                minHeight: "300px",
                lineHeight: 1.7,
              }}
            >
              {displayed.map((line, i) => (
                <div
                  key={i}
                  style={{
                    color: line.startsWith("$")
                      ? "#60a5fa"
                      : line.startsWith(">")
                        ? "#4ade80"
                        : "var(--text-secondary)",
                    marginBottom: "2px",
                  }}
                >
                  {line}
                </div>
              ))}
              {lineIdx < lines.length && (
                <div
                  style={{
                    color: lines[lineIdx].startsWith("$")
                      ? "#60a5fa"
                      : "#4ade80",
                  }}
                >
                  {current}
                  <span
                    style={{
                      color: "var(--text-primary)",
                      animation: "blink 1s step-end infinite",
                    }}
                  >
                    _
                  </span>
                </div>
              )}
              {lineIdx >= lines.length && (
                <div style={{ marginTop: "16px" }}>
                  <div
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "11px",
                      marginBottom: "8px",
                    }}
                  >
                    // System status
                  </div>
                  {[
                    { k: "deployment", v: "SUCCESS", c: "#4ade80" },
                    { k: "infrastructure", v: "HEALTHY", c: "#4ade80" },
                    { k: "monitoring", v: "ACTIVE", c: "#4ade80" },
                    { k: "cost_savings", v: "OPTIMIZED", c: "#60a5fa" },
                  ].map((r) => (
                    <div
                      key={r.k}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "var(--text-secondary)",
                        marginBottom: "4px",
                      }}
                    >
                      <span>{r.k}</span>
                      <span style={{ color: r.c }}>{r.v}</span>
                    </div>
                  ))}
                  <div style={{ color: "#3b82f6", marginTop: "12px" }}>
                    ${" "}
                    <span
                      style={{
                        animation: "blink 1s step-end infinite",
                        color: "var(--text-primary)",
                      }}
                    >
                      _
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
