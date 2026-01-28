import { projects } from "../Data/data";
import ProjectCard from "./ProjectCard";
import { texts } from "../Data/texts";
import { useEffect, useRef, useState } from "react";

export default function Projects({ title, lang }) {
  const t = texts[lang];
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards((prev) => new Set(prev).add(index));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen pt-26 pb-32 px-4 sm:px-6 flex flex-col items-center relative"
    >
      
      <div className="text-center mb-12 sm:mb-16 relative z-10">
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-100 mb-4">
          {title}
        </h2>
        <span
          className="block w-12 sm:w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500"
        />
        <p className="mt-4 text-neutral-400 max-w-2xl mx-auto px-4 text-sm sm:text-base">
          {t.sections.projectsSubtitle}
        </p>
      </div>

      <div className="w-full max-w-6xl lg:max-w-7xl flex flex-col gap-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 items-start">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              data-index={index}
              className={`transform transition-all duration-700 h-full ${
                visibleCards.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: visibleCards.has(index) ? `${index * 150}ms` : '0ms'
              }}
            >
              <ProjectCard
                {...project}
                title={project.title[lang]}
                description={project.description[lang]}
                lang={lang}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-12 sm:top-20 left-4 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-12 sm:bottom-20 right-4 sm:right-10 w-32 sm:w-40 h-32 sm:h-40 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
}
