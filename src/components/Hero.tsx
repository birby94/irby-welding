import { contacts } from "../contacts";
import { Logo } from "./Logo";
import { heroProjectImage } from "../data/projects";

/** Full-bleed brand-first hero with real IRBY completed-project photography. */
export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="hero__media" aria-hidden="true">
        <img
          className="hero__img"
          src={heroProjectImage}
          alt=""
          width={1600}
          height={1200}
        />
        <div className="hero__veil" />
        <div className="hero__grain" />
      </div>

      <div className="hero__content">
        <div className="hero__logo reveal">
          <Logo layout="stacked" onDark className="brand-logo--hero" />
        </div>
        <h1 id="hero-heading" className="hero__headline reveal reveal--delay-2">
          Built to last.
        </h1>
        <p className="hero__lede reveal reveal--delay-3">
          Forty-plus years of welding and steel construction — with a specialty in covered arenas —
          done right the first time.
        </p>
        <div className="hero__ctas reveal reveal--delay-4">
          <a href={contacts[0].tel} className="btn btn--copper">
            Call Brian · {contacts[0].phone}
          </a>
          <a href={contacts[1].tel} className="btn btn--ghost">
            Call Richard · {contacts[1].phone}
          </a>
        </div>
      </div>
    </section>
  );
}
