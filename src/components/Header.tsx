import { useEffect, useState } from "react";
import { contacts } from "../contacts";
import { Logo } from "./Logo";

const nav = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="site-header__inner">
        <a href="#home" className="site-header__brand" aria-label="IRBY Welding + Construction home">
          <Logo layout="horizontal" onDark={!scrolled} className="brand-logo--header" />
        </a>

        <nav className="site-header__nav" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="site-header__link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__phones">
          {contacts.map((c) => (
            <a key={c.tel} href={c.tel} className="site-header__phone" title={`Call ${c.name}`}>
              <span className="site-header__phone-name">{c.name.split(" ")[0]}</span>
              <span className="site-header__phone-num">{c.phone}</span>
            </a>
          ))}
        </div>

        <button
          type="button"
          className={`site-header__menu-btn${open ? " is-open" : ""}`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-nav" className={`mobile-nav${open ? " is-open" : ""}`} hidden={!open}>
        <nav aria-label="Mobile">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mobile-nav__phones">
          {contacts.map((c) => (
            <a key={c.tel} href={c.tel} className="btn btn--copper" onClick={() => setOpen(false)}>
              Call {c.name}
              <span>{c.phone}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
