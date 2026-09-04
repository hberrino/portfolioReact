import { techs } from "../Data/data";
import { texts } from "../Data/texts";

export default function Hero({ lang }) {
  const t = texts[lang];
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
        <p className="hero-kicker">Hernán Berrino · {t.hero.role}</p>
        <h1>
          {lang === "es" ? "Desarrollo aplicaciones" : "I build applications"}
          <em>{lang === "es" ? " de la idea a producción." : " from concept to production."}</em>
        </h1>
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
            {t.hero.buttons.projects} <span aria-hidden="true">↗</span>
          </a>
          <a href="/docs/CV_Hernan_Berrino_Full_Stack.pdf" download className="button button-secondary">
            {t.hero.buttons.downloadFullStackCV}
          </a>
          <a href="/docs/CV_Hernan_Berrino_Backend_Java.pdf" download className="button button-secondary">
            {t.hero.buttons.downloadJavaCV}
          </a>
        </div>
        <div className="hero-social">
          <a href="https://github.com/hberrino" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/hernanberrino" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-photo">
          <img src="/imgs/yop.jpg" alt="Hernán Berrino" />
        </div>
        <div className="hero-visual-caption">
          <div>
            <span>{lang === "es" ? "Enfoque" : "Focus"}</span>
            <strong>{lang === "es" ? "Producto · Código · Producción" : "Product · Code · Production"}</strong>
          </div>
          <div>
            <span>{lang === "es" ? "Soluciones desarrolladas" : "Solutions developed"}</span>
            <strong>+8</strong>
          </div>
        </div>
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
