import { projectPhotos } from "../data/projects";

export function Projects() {
  return (
    <section id="projects" className="section projects" aria-labelledby="projects-heading">
      <div className="section__inner">
        <header className="section__header">
          <p className="eyebrow">Completed projects</p>
          <h2 id="projects-heading">Work that stands.</h2>
          <p className="section__lede">
            Covered riding arenas and finished metal buildings — real IRBY jobs from the field.
          </p>
        </header>

        <ul className="projects__grid">
          {projectPhotos.map((photo) => (
            <li key={photo.src} className="projects__item">
              <img src={photo.src} alt={photo.alt} loading="lazy" width={1600} height={1200} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
