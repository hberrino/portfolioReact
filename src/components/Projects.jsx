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
      className="min-h-screen pt-26 pb-32 px-4 sm:px-6 flex flex-col items-center relative z-10"
    >
      
      <div className="text-center mb-12 sm:mb-16">
        <div className="relative inline-block">
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
            {title}
          </h2>
        </div>
        
        <p className="text-center text-base sm:text-lg text-neutral-200 max-w-2xl mx-auto mb-8 font-light">
          {texts[lang]?.sections?.projectsSubtitle}
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
    </section>
  );
}
