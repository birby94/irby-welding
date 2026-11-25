const highlights = [
  { label: "Experience", value: "40+ years" },
  { label: "Specialty", value: "Covered arenas" },
  { label: "Standard", value: "Built to last" },
] as const;

/** Tasteful client mention — not a crowded name dump. */
const clientLine =
  "Trusted by ranches, horsemen, and local partners including 6666 Ranch, Crossbell Ranch, Taylor Sheridan, Bosque Ranch, Queens Horse Bedding, Ryan Motes, Lee Deacon, Shawn Hayes, Diego Gaona, Mark Michels, Rob Foster, M&F Western, City of Sulphur Springs, American Legend Aircraft, and many more.";

export function Credibility() {
  return (
    <section className="credibility" aria-labelledby="credibility-heading">
      <div className="credibility__inner">
        <h2 id="credibility-heading" className="visually-hidden">
          Experience and clients
        </h2>
        <ul className="credibility__stats">
          {highlights.map((h) => (
            <li key={h.label}>
              <span className="credibility__label">{h.label}</span>
              <span className="credibility__value">{h.value}</span>
            </li>
          ))}
        </ul>
        <p className="credibility__clients">{clientLine}</p>
      </div>
    </section>
  );
}
