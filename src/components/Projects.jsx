import { projects } from "../Data/data";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

export default function Projects({ title, lang }) {
  const [showAll, setShowAll] = useState(false);
  const orderedProjects = [
    projects[0],
    projects[1],
    projects[3],
    projects[4],
    projects[2],
    projects[5],
    ...projects.slice(6),
  ];
  const visibleProjects = showAll ? orderedProjects : orderedProjects.slice(0, 4);

  return (
    <section id="projects" className="section section-tinted">
      <div className="section-wrap">
        <header className="section-heading">
          <span className="eyebrow">01 / {lang === "es" ? "TRABAJOS SELECCIONADOS" : "SELECTED WORK"}</span>
          <div>
            <h2>{title}</h2>
            <p>{lang === "es" ? "Experiencia seleccionada" : "Selected experience"}</p>
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
                : (lang === "es" ? `Ver más trabajos (${projects.length - 4})` : `View more work (${projects.length - 4})`)}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
