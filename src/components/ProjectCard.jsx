import { memo, useState } from "react";
import { techs as techData } from "../Data/data";
import { texts } from "../Data/texts";

const ProjectCard = memo(function ProjectCard({
  title, description, github, demo, video, images, techs, deploy, note, demoLabel, lang,
}) {
  const [current, setCurrent] = useState(0);
  const hasImages = Boolean(images?.length);
  const technologies = techs.map((name) => techData.find((item) => item.name === name)).filter(Boolean);
  const t = texts[lang];

  return (
    <article className="project-card">
      <div className="project-media">
        {video ? (
          <video src={video} controls preload="none" muted playsInline poster={images?.[0]} />
        ) : hasImages ? (
          <img src={images[current]} alt={`${title} captura ${current + 1}`} loading="lazy" />
        ) : null}

        {note && <span className="media-note">{note}</span>}
        {!note && hasImages && !demo && <span className="media-note">{t.projects.readmeNote}</span>}

        {hasImages && images.length > 1 && (
          <div className="carousel-controls">
            <button type="button" onClick={() => setCurrent(current === 0 ? images.length - 1 : current - 1)} aria-label="Anterior">‹</button>
            <span>{current + 1} / {images.length}</span>
            <button type="button" onClick={() => setCurrent((current + 1) % images.length)} aria-label="Siguiente">›</button>
          </div>
        )}
      </div>

      <div className="project-body">
        <div className="project-title-row">
          <h3>{title}</h3>
          {demo && <span className="live-pill"><i /> Live</span>}
        </div>
        <p>{description}</p>

        <div className="tech-pills">
          {technologies.map((tech) => (
            <span key={tech.name}>
              <img src={tech.icon} alt="" />
              {tech.name}
            </span>
          ))}
        </div>

        {deploy && (
          <div className="deploy-row">
            <strong>Deploy</strong>
            {Object.entries(deploy).map(([key, value]) => (
              <span key={key}>{key}: <b>{value}</b></span>
            ))}
          </div>
        )}

        <div className="project-links">
          <a href={github} target="_blank" rel="noreferrer">Code <span>↗</span></a>
          {demo && <a className="project-online" href={demo} target="_blank" rel="noreferrer">{demoLabel || "Demo"} <span>↗</span></a>}
        </div>
      </div>
    </article>
  );
});

export default ProjectCard;
