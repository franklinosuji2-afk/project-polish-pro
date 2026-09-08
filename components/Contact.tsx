"use client"

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-pad"
      style={{
        background: "var(--bg-section)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* HEADER */}
        <div style={{ marginBottom: "42px" }}>
          <div
            style={{
              fontFamily: "monospace",
              fontSize: "11px",
              color: "#3b82f6",
              letterSpacing: "4px",
              marginBottom: "12px",
            }}
          >
            // CONTACT
          </div>

          <h2
            style={{
              fontSize: "clamp(30px, 4vw, 44px)",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "12px",
            }}
          >
            Get in touch
          </h2>

          <div
            style={{
              width: "42px",
              height: "2px",
              background: "#3b82f6",
              marginBottom: "16px",
            }}
          />

          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "15px",
              maxWidth: "680px",
              lineHeight: 1.8,
            }}
          >
            I&apos;m currently open to Cloud Infrastructure, DevOps, Platform,
            and SRE opportunities in Berlin or remote across Europe.
          </p>
        </div>

        {/* CONTACT GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "28px",
          }}
          className="contact-grid"
        >
          {/* LEFT */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            {/* EMAIL */}
            <a
              href="mailto:franklin.osuji2@gmail.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "20px 22px",
                borderRadius: "12px",
                border: "1px solid var(--border)",
                background: "var(--bg-card2)",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "9px",
                  background: "rgba(59,130,246,0.1)",
                  color: "#60a5fa",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  flexShrink: 0,
                }}
              >
                @
              </div>

              <div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#60a5fa",
                    marginBottom: "5px",
                  }}
                >
                  Email
                </div>

                <div
                  style={{
                    color: "var(--text-primary)",
                    fontSize: "15px",
                    fontWeight: 600,
                  }}
                >
                  franklin.osuji2@gmail.com
                </div>
              </div>
            </a>

            {/* PHONE */}
            <a
              href="tel:+4915259380812"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "20px 22px",
                borderRadius: "12px",
                border: "1px solid var(--border)",
                background: "var(--bg-card2)",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "9px",
                  background: "rgba(59,130,246,0.1)",
                  color: "#60a5fa",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "19px",
                  flexShrink: 0,
                }}
              >
                ☎
              </div>

              <div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#60a5fa",
                    marginBottom: "5px",
                  }}
                >
                  Phone
                </div>

                <div
                  style={{
                    color: "var(--text-primary)",
                    fontSize: "15px",
                    fontWeight: 600,
                  }}
                >
                  +49 152 59380812
                </div>
              </div>
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/franklinosuji2-afk"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "20px 22px",
                borderRadius: "12px",
                border: "1px solid var(--border)",
                background: "var(--bg-card2)",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "9px",
                  background: "rgba(59,130,246,0.1)",
                  color: "#60a5fa",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  flexShrink: 0,
                }}
              >
                ◉
              </div>

              <div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#60a5fa",
                    marginBottom: "5px",
                  }}
                >
                  GitHub
                </div>

                <div
                  style={{
                    color: "var(--text-primary)",
                    fontSize: "15px",
                    fontWeight: 600,
                  }}
                >
                  github.com/franklinosuji2-afk
                </div>
              </div>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/franklin-osuji-a96003321"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "20px 22px",
                borderRadius: "12px",
                border: "1px solid var(--border)",
                background: "var(--bg-card2)",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "9px",
                  background: "rgba(59,130,246,0.1)",
                  color: "#60a5fa",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "17px",
                  flexShrink: 0,
                }}
              >
                in
              </div>

              <div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#60a5fa",
                    marginBottom: "5px",
                  }}
                >
                  LinkedIn
                </div>

                <div
                  style={{
                    color: "var(--text-primary)",
                    fontSize: "15px",
                    fontWeight: 600,
                  }}
                >
                  linkedin.com/in/franklin-osuji-a96003321
                </div>
              </div>
            </a>

            {/* RESUME */}
            <a
              href="/cv.html"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "20px 22px",
                borderRadius: "12px",
                border: "1px solid var(--border)",
                background: "var(--bg-card2)",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "9px",
                  background: "rgba(59,130,246,0.1)",
                  color: "#60a5fa",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  flexShrink: 0,
                }}
              >
                ▤
              </div>

              <div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#60a5fa",
                    marginBottom: "5px",
                  }}
                >
                  Resume
                </div>

                <div
                  style={{
                    color: "var(--text-primary)",
                    fontSize: "15px",
                    fontWeight: 600,
                  }}
                >
                  Download PDF
                </div>
              </div>
            </a>
          </div>

          {/* RIGHT */}
          <div
            style={{
              padding: "28px",
              borderRadius: "14px",
              border: "1px solid var(--border)",
              background: "var(--bg-card2)",
              minHeight: "100%",
            }}
          >
            {/* LOCATION */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                marginBottom: "28px",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "9px",
                  background: "rgba(59,130,246,0.1)",
                  color: "#60a5fa",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  flexShrink: 0,
                }}
              >
                ◎
              </div>

              <div>
                <div
                  style={{
                    color: "var(--text-primary)",
                    fontSize: "16px",
                    fontWeight: 700,
                    marginBottom: "6px",
                  }}
                >
                  Location
                </div>

                <div
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "14px",
                  }}
                >
                  Berlin, Germany
                </div>
              </div>
            </div>

            {/* AVAILABILITY */}
            <div
              style={{
                padding: "22px",
                borderRadius: "12px",
                background: "rgba(59,130,246,0.06)",
                border: "1px solid rgba(59,130,246,0.08)",
                marginBottom: "28px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "var(--text-primary)",
                  fontSize: "14px",
                  marginBottom: "18px",
                }}
              >
                <span style={{ color: "#22c55e", fontSize: "18px" }}>✓</span>
                <span>
                  <strong>Niederlassungserlaubnis</strong> (permanent work
                  authorisation)
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "var(--text-primary)",
                  fontSize: "14px",
                }}
              >
                <span style={{ color: "#22c55e", fontSize: "18px" }}>◷</span>
                <span>Available immediately</span>
              </div>
            </div>

            {/* MESSAGE */}
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "13px",
                lineHeight: 1.8,
                maxWidth: "520px",
              }}
            >
              For opportunities, please include the role, location or remote
              policy, and expected timeline in your message.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 850px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 520px) {
          .contact-grid {
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  )
}
