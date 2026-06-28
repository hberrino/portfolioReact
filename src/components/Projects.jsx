import { projects } from "../Data/data";
import { texts } from "../Data/texts";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

export default function Projects({ title, lang }) {
  const [showAll, setShowAll] = useState(false);
  const orderedProjects = [
    projects[0],
    projects[2],
    projects[1],
    projects[3],
    ...projects.slice(4),
  ];
  const visibleProjects = showAll ? orderedProjects : orderedProjects.slice(0, 4);

  return (
    <section id="projects" className="section section-tinted">
      <div className="section-wrap">
        <header className="section-heading">
          <span className="eyebrow">{lang === "es" ? "Trabajo seleccionado" : "Selected work"}</span>
          <div>
            <h2>{title}</h2>
            <p>{texts[lang].sections.projectsSubtitle}</p>
          </div>
        </header>
        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.title.es}
              {...project}
              title={project.title[lang]}
              description={project.description[lang]}
              note={project.note?.[lang]}
              demoLabel={project.demoLabel?.[lang]}
              lang={lang}
            />
          ))}
        </div>
        {projects.length > 4 && (
          <div className="projects-more">
            <button
              type="button"
              className="button button-secondary"
              onClick={() => setShowAll((value) => !value)}
            >
              {showAll
                ? (lang === "es" ? "Ver menos" : "Show less")
                : (lang === "es" ? `Ver más proyectos (${projects.length - 4})` : `View more projects (${projects.length - 4})`)}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
