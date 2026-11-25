import { contacts } from "../contacts";

/** Full-bleed brand-first hero. Stock image is a placeholder for real job photos. */
export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="hero__media" aria-hidden="true">
        <img
          className="hero__img"
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=2000&q=80"
          alt=""
          width={2000}
          height={1333}
        />
        <div className="hero__veil" />
        <div className="hero__grain" />
      </div>

      <div className="hero__content">
        <p className="hero__brand reveal">IRBY</p>
        <p className="hero__descriptor reveal reveal--delay-1">Welding + Construction</p>
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

      <p className="hero__photo-note" aria-hidden="true">
        Placeholder imagery — replace with IRBY job photos
      </p>
    </section>
  );
}
