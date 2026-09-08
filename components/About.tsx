"use client"

const roleFocus = [
  "DevOps Engineer",
  "Cloud Engineer",
  "Platform Engineer",
  "Site Reliability Engineer (SRE)",
  "Cloud Infrastructure Engineer",
  "Cloud Platform Engineer",
  "Infrastructure Automation Engineer",
  "Cloud Architect / Infrastructure Architect",
  "Cloud Consultant",
  "Cloud Migration Engineer",
  "FinOps Engineer",
  "Technical Account Manager (TAM)",
  "Solutions Engineer",
]

export default function About() {
  return (
    <section
      id="about"
      className="section-pad"
      style={{ background: "#070a0f" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "48px" }}>
          <div
            style={{
              fontFamily: "monospace",
              fontSize: "11px",
              color: "#3b82f6",
              letterSpacing: "4px",
              marginBottom: "12px",
            }}
          >
            // ABOUT_ME
          </div>

          <h2
            style={{
              fontSize: "clamp(24px,4vw,38px)",
              fontWeight: 700,
              color: "#fff",
              marginBottom: "12px",
            }}
          >
            Professional Summary
          </h2>

          <div
            style={{
              width: "40px",
              height: "2px",
              background: "#3b82f6",
            }}
          />
        </div>

        <div style={{ maxWidth: "1000px" }}>
          <p
            style={{
              color: "#8b949e",
              fontSize: "clamp(14px,2vw,17px)",
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
            <strong style={{ color: "#fff" }}>
              Cloud Infrastructure & DevOps Engineer
            </strong>{" "}
            specializing in AWS-based infrastructure automation, containerized
            workloads, and CI/CD systems. Experienced in designing scalable
            cloud environments using{" "}
            <strong style={{ color: "#fff" }}>
              Terraform, Docker, Kubernetes, Amazon ECS, and GitHub Actions
            </strong>{" "}
            with a strong focus on operational reliability, deployment
            efficiency, and infrastructure optimization.
          </p>

          <p
            style={{
              color: "#8b949e",
              lineHeight: 1.8,
              marginBottom: "32px",
            }}
          >
            Combines engineering discipline with business awareness to deliver{" "}
            <strong style={{ color: "#fff" }}>
              secure, high-availability, and cost-efficient cloud solutions
            </strong>
            . Proven ability to automate infrastructure provisioning, improve
            deployment workflows, and build observability and reliability
            practices across production-oriented environments.
          </p>

          <div
            style={{
              padding: "18px 20px",
              borderRadius: "12px",
              border: "1px solid #1e2d40",
              background: "#0d1117",
            }}
          >
            <div
              style={{
                fontFamily: "monospace",
                fontSize: "10px",
                color: "#3b82f6",
                marginBottom: "14px",
                letterSpacing: "2px",
              }}
            >
              ROLE_FOCUS
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(190px,1fr))",
                gap: "8px",
              }}
            >
              {roleFocus.map((role) => (
                <div
                  key={role}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 10px",
                    borderRadius: "7px",
                    background: "#111820",
                    border: "1px solid #182535",
                    color: "#c9d1d9",
                    fontSize: "11px",
                    lineHeight: 1.4,
                  }}
                >
                  <span
                    style={{
                      color: "#3b82f6",
                      fontSize: "10px",
                    }}
                  >
                    ◆
                  </span>

                  {role}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
