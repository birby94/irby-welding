const pillars = [
  {
    title: "Weld-up covered arenas",
    copy: "Our specialty. Field-fabricated and assembled covered arenas built for real ranch and equine use — not a catalog kit dropped on a pad.",
  },
  {
    title: "Stronger steel, thicker members",
    copy: "Heavier columns and rafters than typical light-gauge packages. Built to take weather, load, and years of hard use.",
  },
  {
    title: "Commercial & prefab buildings",
    copy: "We also build commercial structures and prefab buildings when the job calls for them — same crew, same steel standards, same direct accountability.",
  },
  {
    title: "Built once — on your site",
    copy: "On-site fabrication and assembly cuts the waste of prefab that gets built twice: once in a factory, then again when it is put back up. We cut out the middleman so you get the best value.",
  },
  {
    title: "Our equipment, your savings",
    copy: "We own our equipment. No hefty rental markups passed through to you — efficiency that shows up in the price and the schedule.",
  },
] as const;

export function Services() {
  return (
    <section id="services" className="section services" aria-labelledby="services-heading">
      <div className="section__inner">
        <header className="section__header">
          <p className="eyebrow">What we do</p>
          <h2 id="services-heading">Weld-up covered arenas. Built on site.</h2>
          <p className="section__lede">
            IRBY specializes in weld-up covered arenas — field fabricated and assembled where they stand. We use
            stronger, thicker columns and rafters, and we also do commercial and prefab buildings, with cost savings
            from working on site with our own gear.
          </p>
        </header>

        <ul className="services__list">
          {pillars.map((s, i) => (
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
