import { texts } from "../Data/texts";

export default function Footer({ lang }) {
  const nav = texts[lang].nav;

  return (
    <footer className="footer">
      <div className="section-wrap">
        <div className="footer-main">
          <div className="footer-brand">
            <span className="footer-mark">HB</span>
            <div>
              <strong>Hernán Berrino</strong>
              <p>Full Stack Developer</p>
              <small>{lang === "es" ? "Desarrollo web de extremo a extremo" : "End-to-end web development"}</small>
            </div>
          </div>

          <nav className="footer-nav" aria-label={lang === "es" ? "Navegación del pie" : "Footer navigation"}>
            <span>{lang === "es" ? "Navegación" : "Navigation"}</span>
            <div>
              <a href="#projects">{nav.projects}</a>
              <a href="#tecnologias">{nav.tecnologias}</a>
              <a href="#sobremi">{nav.sobremi}</a>
              <a href="#contacto">{nav.contacto}</a>
            </div>
          </nav>

          <div className="footer-contact">
            <span>{lang === "es" ? "Contacto" : "Contact"}</span>
            <a href="mailto:berrinohernan@gmail.com">berrinohernan@gmail.com</a>
            <div>
              <a href="https://github.com/hberrino" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://linkedin.com/in/hernanberrino" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Hernán Berrino. {lang === "es" ? "Todos los derechos reservados." : "All rights reserved."}</p>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            {lang === "es" ? "Volver arriba" : "Back to top"} <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
