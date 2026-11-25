const services = [
  {
    title: "Covered Arenas",
    copy: "Our specialty. Design-assist, fabrication, and field erection for covered arenas and equine facilities — clear spans, durable framing, and finishes built for real use.",
  },
  {
    title: "Structural Welding",
    copy: "Code-conscious welding for beams, columns, plate, and connections — shop or field. Clean joints, consistent penetration, documented work.",
  },
  {
    title: "Steel Fabrication",
    copy: "Cut, fit, and assemble structural and miscellaneous metals to drawing. Frames, platforms, stairs, and custom assemblies ready for the install.",
  },
  {
    title: "Field Construction",
    copy: "On-site erection, repair, and modification for ranch, commercial, and industrial sites. Prepared crews, steady schedule, clean handoff.",
  },
  {
    title: "Repair & Retrofit",
    copy: "Reinforce, replace, or rework existing steel — including arena frames and ranch structures. Durable fixes that keep operations moving.",
  },
  {
    title: "Mobile Welding",
    copy: "Bring the shop to the job. Equipment and experienced hands for emergency repairs, plant maintenance, and remote sites.",
  },
] as const;

export function Services() {
  return (
    <section id="services" className="section services" aria-labelledby="services-heading">
      <div className="section__inner">
        <header className="section__header">
          <p className="eyebrow">What we do</p>
          <h2 id="services-heading">Arenas first. Steel that lasts.</h2>
          <p className="section__lede">
            Forty-plus years of welding and construction — led by covered arena work, backed by structural
            fabrication and field steel for ranch, commercial, and industrial projects.
          </p>
        </header>

        <ul className="services__list">
          {services.map((s, i) => (
            <li key={s.title} className="services__item" style={{ ["--i" as string]: i }}>
              <span className="services__index">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.copy}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
