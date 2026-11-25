export function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-heading">
      <div className="about__grid">
        <div className="about__visual">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80"
            alt=""
            width={1400}
            height={933}
          />
          <p className="about__photo-note">Placeholder — replace with IRBY crew / job photo</p>
        </div>

        <div className="about__copy">
          <p className="eyebrow">About IRBY</p>
          <h2 id="about-heading">Forty years in the field.</h2>
          <p>
            IRBY Welding + Construction is a family-run welding and steel construction company with more than
            forty years of experience. Brian and Richard Irby lead every job with the same standard: work that
            holds up under load, weather, and time.
          </p>
          <p>
            Covered arenas are a core specialty — spanning, framing, and field welding for ranch and equine
            facilities that have to perform season after season. The same craft carries into structural welding,
            fabrication, and general field construction for clients who expect clear communication and metalwork
            that does not need a second look.
          </p>
          <p>
            Ranches, horsemen, and local partners who know the work — from 6666 Ranch and Taylor Sheridan to
            Bosque Ranch, Queens Horse Bedding, Ryan Motes, Lee Deacon, Shawn Hayes, Diego Gaona, Mark Michels,
            Rob Foster, M&F Western, City of Sulphur Springs, American Legend Aircraft, and many more — trust
            IRBY for steel that lasts.
          </p>
          <ul className="about__points">
            <li>40+ years of welding and construction</li>
            <li>Covered arena specialty</li>
            <li>Direct owner contact on every job</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
