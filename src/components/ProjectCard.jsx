import { useState } from "react";
import { techs as techsData } from "../Data/data";
import { texts } from "../Data/texts";

export default function ProjectCard({
  title,
  description,
  github,
  demo,
  video,
  images,
  techs,
  deploy,
  lang = "es",
}) {
  const [current, setCurrent] = useState(0);
  const hasImages = images && images.length > 0;
  const t = texts[lang];

  const techObjects = techs
    .map((t) => techsData.find((td) => td.name === t))
    .filter(Boolean);

  return (
    <article className="relative group rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.15] shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-[1.02] hover:border-cyan-400/30 h-full flex flex-col" data-aos="fade-up">
      
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {video && (
        <div className="relative w-full aspect-video sm:aspect-[16/9] overflow-hidden bg-black/30">
          <video src={video} controls className="w-full h-full object-contain" preload="metadata" />
          <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md text-white text-xs px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border border-white/20 text-center">
            Demo user: test<br/>Demo pass: test123
          </div>
          <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 bg-black/60 backdrop-blur-md text-white text-xs px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border border-white/20">
            Recomend: Fullscreen
          </div>
        </div>
      )}

      {!video && hasImages && (
        <div className="relative w-full aspect-video sm:aspect-[16/9] overflow-hidden bg-black/30 flex-grow">
          <img
            src={images[current]}
            alt={`${title} screenshot ${current + 1}`}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            loading="lazy"
          />

          {!demo && (
            <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md text-white text-xs px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border border-white/20 text-center">
              {t.projects.readmeNote}
            </div>
          )}

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

      <div className="relative p-3 sm:p-4 space-y-2 sm:space-y-3 flex-grow flex flex-col">
        <div className="space-y-1 sm:space-y-2 flex-grow">
          <h3 className="text-base sm:text-lg font-bold text-white leading-tight">{title}</h3>
          <p className="text-xs text-neutral-300 leading-relaxed">{description}</p>
        </div>

        {techObjects.length > 0 && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {techObjects.map((tech, i) => (
              <div key={i} className="group/tech flex items-center gap-1 sm:gap-1.5 bg-gradient-to-r from-white/10 to-white/5 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs text-white border border-white/10 hover:border-cyan-400/30 hover:from-cyan-400/20 hover:to-cyan-400/10 transition-all duration-300">
                <img src={tech.icon} alt={tech.name} className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-80 group-hover/tech:opacity-100 transition-opacity" />
                <span className="truncate">{tech.name}</span>
              </div>
            ))}
          </div>
        )}

        {deploy && Object.keys(deploy).length > 0 && (
          <div className="bg-black/30 backdrop-blur-sm px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg border border-white/10">
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

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-2 sm:pt-3 border-t border-white/10 mt-auto">
          <div className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start">
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-medium text-white transition-all duration-300 border border-white/20 hover:border-white/30"
            >
              <span className="text-xs sm:text-sm">{`</>`}</span>
              Code
            </a>
            {demo && (
              <a 
                href={demo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-purple-500/20 to-purple-600/20 hover:from-purple-500/30 hover:to-purple-600/30 rounded-lg text-xs font-medium text-purple-300 transition-all duration-300 border border-purple-400/30 hover:border-purple-400/50"
              >
                <span className="text-xs sm:text-sm">🔗</span>
                Demo
              </a>
            )}
          </div>
          
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs text-neutral-400">Live</span>
          </div>
        </div>
      </div>
    </article>
  );
}
