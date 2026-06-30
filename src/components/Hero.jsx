import { projects, techs } from "../Data/data";
import { texts } from "../Data/texts";

export default function Hero({ lang }) {
  const t = texts[lang];
  const showcase = [
    { project: projects[0], image: "/images/moon1.jpg" },
    { project: projects[2], image: "/images/tumascotandilfoto.jpg" },
    { project: projects[1], image: "/images/asistenteiafoto.jpg" },
  ];
  const tickerTechs = techs.filter(({ name }) =>
    ["Java", "Springboot", "JS", "React", "Node", "Express", "PHP", "Tailwind", "MySQL", "MongoDB", "Docker", "Git", "Vite"].includes(name),
  );

  return (
    <section id="inicio" className="hero section-wrap">
      <div className="hero-copy">
        <div className="availability">
          <span />
          {t.hero.availability}
        </div>
        <div className="hero-heading">
          <h1>
            Hernán
            <br />
            <em>Berrino.</em>
          </h1>
          <div className="hero-avatar">
            <img src="/imgs/yo.jpg" alt="Hernán Berrino" />
          </div>
        </div>
        <p className="hero-role">{t.hero.role}</p>
        <p className="hero-education">
          {lang === "es"
            ? "Técnico Universitario en Desarrollo de Aplicaciones Informáticas · UNICEN"
            : "University Technician in Application Development · UNICEN"}
        </p>
        <p className="hero-description">
          {lang === "es"
            ? "Desarrollo aplicaciones completas, desde la interfaz hasta producción."
            : "I develop complete applications, from interface to production."}
        </p>
        <div className="hero-actions">
          <a href="#projects" className="button button-primary">
            {t.hero.buttons.projects} <span>↗</span>
          </a>
          <a href="/docs/cv_hbmES.pdf" download className="button button-secondary">
            {t.hero.buttons.downloadCV}
          </a>
        </div>
        <div className="hero-social">
          <a href="https://github.com/hberrino" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/hernanberrino" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>

      <div className="work-showcase" aria-label={lang === "es" ? "Selección de proyectos" : "Selected projects"}>
        <span className="showcase-label">{lang === "es" ? "Proyectos online" : "Live projects"}</span>
        {showcase.map(({ project, image }, index) => (
          <a
            key={project.title.es}
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className={`showcase-card showcase-card-${index + 1}`}
          >
            <img src={image} alt="" />
            <div>
              <small>0{index + 1}</small>
              <strong>{project.title[lang]}</strong>
              <span>{project.techs.slice(0, 3).join(" · ")}</span>
            </div>
          </a>
        ))}
        <a href="#projects" className="showcase-stamp">
          {lang === "es" ? "Ver +" : "View +"}
        </a>
      </div>

      <div className="stack-ticker" aria-label={lang === "es" ? "Tecnologías principales" : "Core technologies"}>
        <div className="stack-ticker-track">
          {[0, 1].map((copy) => (
            <div className="stack-ticker-group" key={copy} aria-hidden={copy === 1}>
              {tickerTechs.map((tech) => (
                <span key={`${copy}-${tech.name}`}>
                  <img src={tech.icon} alt="" />
                  {tech.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
