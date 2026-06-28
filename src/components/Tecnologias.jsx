import { techs } from "../Data/data";
import { texts } from "../Data/texts";

const groups = {
  es: [
    { title: "Lenguajes", items: ["Java", "JavaScript", "PHP", "SQL", "HTML", "CSS"] },
    { title: "Frontend", items: ["React", "Tailwind CSS"] },
    { title: "Backend", items: ["Spring Boot", "Node.js", "Express", "Spring MVC", "Spring Data JPA"] },
    { title: "Bases de datos", items: ["PostgreSQL", "MySQL", "MongoDB", "Hibernate"] },
    { title: "DevOps / Cloud", items: ["Docker", "Docker Compose", "AWS Lightsail", "VPS", "Nginx", "Cloudflare"] },
    { title: "Herramientas", items: ["Git", "GitHub", "Vite", "Postman", "Maven", "JUnit"] },
  ],
  en: [
    { title: "Languages", items: ["Java", "JavaScript", "PHP", "SQL", "HTML", "CSS"] },
    { title: "Frontend", items: ["React", "Tailwind CSS"] },
    { title: "Backend", items: ["Spring Boot", "Node.js", "Express", "Spring MVC", "Spring Data JPA"] },
    { title: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Hibernate"] },
    { title: "DevOps / Cloud", items: ["Docker", "Docker Compose", "AWS Lightsail", "VPS", "Nginx", "Cloudflare"] },
    { title: "Tools", items: ["Git", "GitHub", "Vite", "Postman", "Maven", "JUnit"] },
  ],
};

const aliases = {
  JavaScript: "JS",
  "Tailwind CSS": "Tailwind",
  "Spring Boot": "Springboot",
  "Node.js": "Node",
  GitHub: "Github",
};

export default function Tecnologias({ lang }) {
  const t = texts[lang];
  const getTech = (name) => techs.find((item) => item.name === (aliases[name] || name));

  return (
    <section id="tecnologias" className="section">
      <div className="section-wrap">
        <header className="section-heading">
          <span className="eyebrow">{lang === "es" ? "Stack de trabajo" : "Working stack"}</span>
          <div>
            <h2>{lang === "es" ? "Tecnologías" : "Technologies"}</h2>
            <p>{t.sections.technologiesSubtitle}</p>
          </div>
        </header>
        <div className="technology-groups technology-groups-detailed">
          {groups[lang].map((group) => (
            <section className="technology-group technology-group-detailed" key={group.title}>
              <h3>{group.title}</h3>
              <div className="technology-list">
                {group.items.map((name) => {
                  const tech = getTech(name);
                  return (
                    <span key={name}>
                      {tech && <img src={tech.icon} alt="" />}
                      {name}
                    </span>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
