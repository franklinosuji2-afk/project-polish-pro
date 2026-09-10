"use client"

export default function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "franklin.osuji2@gmail.com",
      href: "mailto:franklin.osuji2@gmail.com",
    },
    {
      label: "Phone",
      value: "+49 152 59380812",
      href: "tel:+4915259380812",
    },
  ]

  return (
    <section
      id="contact"
      className="section-pad"
      style={{
        background: "var(--bg-section)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "32px" }}>
          <div
            style={{
              color: "#60a5fa",
              fontFamily: "monospace",
              fontSize: "11px",
              letterSpacing: "2px",
              marginBottom: "10px",
            }}
          >
            CONTACT
          </div>

          <h2
            style={{
              margin: 0,
              color: "var(--text-primary)",
              fontSize: "clamp(32px, 5vw, 52px)",
              lineHeight: 1.05,
              letterSpacing: "-1.5px",
            }}
          >
            Get in touch
          </h2>

          <p
            style={{
              maxWidth: "700px",
              marginTop: "16px",
              color: "var(--text-secondary)",
              fontSize: "15px",
              lineHeight: 1.7,
            }}
          >
            I'm currently open to Cloud Infrastructure, DevOps, Platform, and
            SRE opportunities in Berlin or remote across Europe.
          </p>
        </div>

        <div className="contact-grid">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              className="contact-card"
            >
              <div className="contact-icon">
                {contact.label === "Email" ? "@" : "TEL"}
              </div>

              <div>
                <span className="contact-label">{contact.label}</span>
                <strong>{contact.value}</strong>
              </div>

              <span className="arrow">→</span>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          max-width: 900px;
        }

        .contact-card {
          min-height: 76px;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 20px;
          border: 1px solid var(--border);
          border-radius: 12px;
          background: var(--bg-card2);
          color: inherit;
          text-decoration: none;
          transition: 0.2s ease;
        }

        .contact-card:hover {
          border-color: #3b82f655;
          transform: translateY(-1px);
        }

        .contact-icon {
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          background: rgba(59, 130, 246, 0.09);
          color: #60a5fa;
          font-family: monospace;
          font-size: 12px;
        }

        .contact-label {
          display: block;
          color: #7f95b5;
          font-size: 11px;
          margin-bottom: 4px;
        }

        .contact-card strong {
          color: var(--text-primary);
          font-size: 14px;
          overflow-wrap: anywhere;
        }

        .arrow {
          margin-left: auto;
          color: #536681;
        }

        @media (max-width: 800px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
