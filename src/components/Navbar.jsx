import { useEffect, useState } from "react";
import { texts } from "../Data/texts";

export default function Navbar({ lang, setLang }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = texts[lang].nav;

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#inicio" className="brand" aria-label="Ir al inicio">
          <span className="brand-mark">HB.</span>
          <span className="brand-copy">
            <strong>Hernán Berrino</strong>
            <small>{lang === "es" ? "Desarrollador de aplicaciones" : "Application Developer"}</small>
          </span>
        </a>

        <div className={`nav-links ${isOpen ? "nav-links-open" : ""}`}>
          {Object.entries(nav).map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setIsOpen(false)}>
              {label}
            </a>
          ))}
          <div className="language-switch" aria-label="Language">
            {["es", "en"].map((code) => (
              <button
                key={code}
                type="button"
                className={lang === code ? "active" : ""}
                onClick={() => {
                  setLang(code);
                  setIsOpen(false);
                }}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          className={`menu-button ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Abrir menú"
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
