import { texts } from "../Data/texts";

export default function Sobremi({ lang }) {
  const t = texts[lang];

  return (
    <section id="sobremi" className="section section-tinted">
      <div className="section-wrap about-layout">
        <div className="about-photo">
          <img src="/images/yo.jpg" alt="Hernán Berrino" loading="lazy" />
          <span>Full Stack<br />Developer</span>
        </div>
        <div className="about-content">
          <span className="eyebrow">{t.sections.aboutTitle}</span>
          <h2>{lang === "es" ? "Interfaces claras. Lógica sólida." : "Clear interfaces. Solid logic."}</h2>
          <div className="about-columns">
            <div>
              <h3>{t.sections.aboutMeTitle}</h3>
              <p>{t.about.me}</p>
            </div>
            <div>
              <h3>{t.sections.aboutOfferTitle}</h3>
              <p>{t.about.offer}</p>
            </div>
          </div>
          <div className="soft-skills">
            {t.card.softSkills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
