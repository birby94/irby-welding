import { contacts } from "../contacts";

export function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-heading">
      <div className="section__inner contact__inner">
        <header className="section__header">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-heading">Ready when you are.</h2>
          <p className="section__lede">
            Call Brian or Richard to discuss scope, schedule, and site needs.
          </p>
        </header>

        <div className="contact__cards">
          {contacts.map((c) => (
            <a key={c.tel} href={c.tel} className="contact__person">
              <span className="contact__role">{c.role}</span>
              <span className="contact__name">{c.name}</span>
              <span className="contact__phone">{c.phone}</span>
              <span className="contact__action">Tap to call</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
