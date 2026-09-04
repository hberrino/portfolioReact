import { texts } from "../Data/texts";

export default function Sobremi({ lang }) {
  const t = texts[lang];

  return (
    <section id="sobremi" className="section section-tinted">
      <div className="section-wrap about-layout">
        <div className="about-photo">
          <img src="/imgs/yop.jpg" alt="Hernán Berrino" loading="lazy" />
          <div className="about-photo-caption">
            <p>{lang === "es" ? "Disciplina para aprender, criterio para decidir y constancia para llegar al resultado." : "Discipline to learn, judgment to decide and consistency to reach the result."}</p>
          </div>
        </div>
        <div className="about-content">
          <span className="eyebrow">{t.sections.aboutTitle}</span>
          <h2>{lang === "es" ? "Perseverancia, constancia y disciplina en todo lo que hago." : "Perseverance, consistency and discipline in everything I do."}</h2>
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
          <article className="press-feature" aria-labelledby={`press-title-${lang}`}>
            <div className="press-label">
              <span>{t.about.pressEyebrow}</span>
              <small>{t.about.pressSource}</small>
            </div>
            <div className="press-copy">
              <h3 id={`press-title-${lang}`}>{t.about.pressTitle}</h3>
              <p>{t.about.pressDescription}</p>
            </div>
            <a
              className="press-link"
              href="https://www.instagram.com/p/DUqgouojBic/"
              target="_blank"
              rel="noreferrer"
              aria-label={`${t.about.pressCta} — Instagram`}
            >
              {t.about.pressCta}<span aria-hidden="true">↗</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
