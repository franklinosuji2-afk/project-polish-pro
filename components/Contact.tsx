import { site } from "./site"

export default function Contact() {
  return (
    <section id="contact" className="section section-alt" aria-labelledby="contact-title">
      <div className="container narrow">
        <h2 id="contact-title">Contact</h2>
        <p className="section-intro">
          I am available immediately for Cloud, DevOps, Platform and SRE roles in Berlin, across the EU, or remote.
          Email is the fastest way to reach me.
        </p>
        <p className="contact-main">
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <ul className="contact-list">
          <li><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href={site.github} target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href={site.cvEn} download>CV in English</a></li>
          <li><a href={site.cvDe} download>Lebenslauf auf Deutsch</a></li>
        </ul>
      </div>
    </section>
  )
}
