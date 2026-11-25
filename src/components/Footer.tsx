import { contacts } from "../contacts";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Logo variant="light" />
          <p>Built to last.</p>
        </div>

        <div className="site-footer__contacts">
          {contacts.map((c) => (
            <a key={c.tel} href={c.tel} className="site-footer__phone">
              <strong>{c.name}</strong>
              <span>{c.phone}</span>
            </a>
          ))}
        </div>

        <p className="site-footer__legal">
          © {year} IRBY Welding + Construction. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
