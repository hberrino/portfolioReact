import { useState } from "react";
import { techs as techsData } from "../Data/data";

export default function ProjectCard({
  title,
  description,
  github,
  demo,
  video,
  images,
  techs,
  deploy,
}) {
  const [current, setCurrent] = useState(0);
  const hasImages = images && images.length > 0;

  // Mapea strings de techs a los objetos con icono
  const techObjects = techs
    .map((t) => techsData.find((td) => td.name === t))
    .filter(Boolean);

  return (
    <article className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:border-white/20 hover:shadow-xl transition-all duration-300 flex flex-col" data-aos="fade-up">
      
      {/* Video */}
      {video && (
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-black/20 rounded-t-2xl">
          <video src={video} controls className="w-full h-full object-contain" preload="metadata" />
          <p className="absolute top-2 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-2 py-1 rounded-md pointer-events-none select-none">
            FOR DEMO: USER: test | PASS: test123
          </p>
          <p className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-md pointer-events-none select-none">
            Recomend: Fullscreen
          </p>
        </div>
      )}

      {/* Images */}
      {!video && hasImages && (
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-black/20 rounded-t-2xl flex items-center justify-center">
          <img
            src={images[current]}
            alt={`${title} screenshot ${current + 1}`}
            className="w-full h-full object-contain transition-opacity duration-300"
            loading="lazy"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={() => setCurrent(current === 0 ? images.length - 1 : current - 1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center text-white text-sm hover:bg-black/60 transition"
              >
                ‹
              </button>
              <button
                onClick={() => setCurrent((current + 1) % images.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center text-white text-sm hover:bg-black/60 transition"
              >
                ›
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full ${i === current ? "bg-white" : "bg-white/40"}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Contenido */}
      <div className="p-5 flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <p className="text-xs text-neutral-300 leading-relaxed">{description}</p>

        {/* Tecnologías con iconos */}
        {techObjects.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-1">
            {techObjects.map((tech, i) => (
              <div key={i} className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded text-xs text-white">
                <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        )}

        {/* Deploy */}
        {deploy && Object.keys(deploy).length > 0 && (
          <p className="text-xs text-neutral-400 mt-1">
            <span className="font-medium text-white">Deploy: </span>
            {Object.entries(deploy).map(([key, value]) => `${key}: ${value}`).join(" | ")}
          </p>
        )}

        {/* Links */}
        <div className="flex items-center gap-4 mt-2">
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-neutral-300 hover:text-white transition-colors">
            Code
          </a>
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors">
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
