type Credential = {
  name: string
  issuer: string
  status: "done" | "progress"
  note: string
  verify?: string
}

const credentials: Credential[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "done",
    note: "Active, Aug 2025 to Aug 2028",
    verify: "https://www.credly.com/users/franklin-chinonso-osuji.4b5356de",
  },
  {
    name: "AWS re/Start Graduate",
    issuer: "Amazon Web Services",
    status: "done",
    note: "Completed",
    verify: "https://www.credly.com/badges/9405ef7c-91a8-466b-b970-a917de42a180",
  },
  {
    name: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    status: "progress",
    note: "In progress, exam scheduled",
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    status: "progress",
    note: "In progress",
  },
  {
    name: "DevOps & Cloud Engineering Program",
    issuer: "Digital Career Institute, Berlin",
    status: "done",
    note: "Nov 2024 to Mar 2026",
  },
  {
    name: "B.Eng. Petroleum Engineering",
    issuer: "Federal University of Technology, Owerri, Nigeria",
    status: "done",
    note: "2012 to 2016",
  },
]

export default function Credentials() {
  return (
    <section id="credentials" className="section" aria-labelledby="credentials-title">
      <div className="container narrow">
        <h2 id="credentials-title">Credentials</h2>
        <ul className="credentials">
          {credentials.map((item) => (
            <li key={item.name}>
              <div>
                <h3>{item.name}</h3>
                <p className="issuer">{item.issuer}</p>
              </div>
              <div className="credential-side">
                <p className={item.status === "done" ? "status status-done" : "status status-progress"}>{item.note}</p>
                {item.verify && (
                  <a className="text-link" href={item.verify} target="_blank" rel="noreferrer">Verify on Credly</a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
