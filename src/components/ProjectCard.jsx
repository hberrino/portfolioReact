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
    <article className="relative group rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.15] shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-[1.02] hover:border-purple-400/30" data-aos="fade-up">
      
      {/* Efecto de brillo sutil */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Video */}
      {video && (
        <div className="relative w-full aspect-video sm:aspect-[16/9] overflow-hidden bg-black/30">
          <video src={video} controls className="w-full h-full object-contain" preload="metadata" />
          <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md text-white text-xs px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border border-white/20">
            FOR DEMO: USER: test | PASS: test123
          </div>
          <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 bg-black/60 backdrop-blur-md text-white text-xs px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border border-white/20">
            Recomend: Fullscreen
          </div>
        </div>
      )}

      {/* Images */}
      {!video && hasImages && (
        <div className="relative w-full aspect-video sm:aspect-[16/9] overflow-hidden bg-black/30">
          <img
            src={images[current]}
            alt={`${title} screenshot ${current + 1}`}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            loading="lazy"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={() => setCurrent(current === 0 ? images.length - 1 : current - 1)}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-lg w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-sm sm:text-lg hover:bg-black/70 transition-all duration-300 border border-white/20 opacity-0 group-hover:opacity-100"
              >
                ‹
              </button>
              <button
                onClick={() => setCurrent((current + 1) % images.length)}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-lg w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-sm sm:text-lg hover:bg-black/70 transition-all duration-300 border border-white/20 opacity-0 group-hover:opacity-100"
              >
                ›
              </button>
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${i === current ? "bg-white w-4 sm:w-6" : "bg-white/40"}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Contenido principal */}
      <div className="relative p-4 sm:p-7 space-y-4 sm:space-y-5">
        {/* Header con título y descripción */}
        <div className="space-y-2 sm:space-y-3">
          <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">{title}</h3>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed line-clamp-2">{description}</p>
        </div>

        {/* Tecnologías completas */}
        {techObjects.length > 0 && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {techObjects.map((tech, i) => (
              <div key={i} className="group/tech flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-white/10 to-white/5 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs text-white border border-white/10 hover:border-purple-400/30 hover:from-purple-400/20 hover:to-purple-400/10 transition-all duration-300">
                <img src={tech.icon} alt={tech.name} className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-80 group-hover/tech:opacity-100 transition-opacity" />
                <span className="truncate">{tech.name}</span>
              </div>
            ))}
          </div>
        )}

        {/* Deploy info */}
        {deploy && Object.keys(deploy).length > 0 && (
          <div className="bg-black/30 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-3 rounded-xl border border-white/10">
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="font-medium text-white">Deploy:</span>
              {Object.entries(deploy).map(([key, value], i) => (
                <span key={i} className="truncate">
                  {key}: <span className="text-green-400">{value}</span>
                  {i < Object.entries(deploy).length - 1 && <span className="mx-2 text-white/30">|</span>}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-3 sm:pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 sm:gap-3">
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs sm:text-sm font-medium text-white transition-all duration-300 border border-white/20 hover:border-white/30"
            >
              <span className="text-sm sm:text-lg">{`</>`}</span>
              Code
            </a>
            {demo && (
              <a 
                href={demo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 hover:from-purple-500/30 hover:to-purple-600/30 rounded-lg text-xs sm:text-sm font-medium text-purple-300 transition-all duration-300 border border-purple-400/30 hover:border-purple-400/50"
              >
                <span className="text-sm sm:text-lg">🔗</span>
                Demo
              </a>
            )}
          </div>
          
          {/* Indicador de estado */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs text-neutral-400">Live</span>
          </div>
        </div>
      </div>
    </article>
  );
}
