import { techs, techGroups } from "../Data/data.js";
import { texts } from "../Data/texts.js";
import { useEffect, useRef, useState } from "react";

export default function Tecnologias({ lang }) {
  const t = texts[lang];
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [visibleCards, setVisibleCards] = useState(new Set());
  const sectionsRef = useRef([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleSections((prev) => new Set(prev).add(index));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const cardObserver = new IntersectionObserver(
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
        rootMargin: '0px 0px -30px 0px'
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) sectionObserver.observe(section);
    });

    cardsRef.current.forEach((card) => {
      if (card) cardObserver.observe(card);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) sectionObserver.unobserve(section);
      });
      cardsRef.current.forEach((card) => {
        if (card) cardObserver.unobserve(card);
      });
    };
  }, []);

  const getTech = (name) => techs.find((t) => t.name === name);

  return (
    <section
      id="tecnologias"
      className="w-full max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-24 sm:pb-32 flex flex-col gap-20 sm:gap-28 relative"
    >
      <div 
        ref={(el) => (sectionsRef.current[0] = el)}
        data-index="0"
        className={`text-center mb-4 sm:mb-6 transform transition-all duration-500 ${
          visibleSections.has(0)
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="relative inline-block mb-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
            {lang === 'es' ? 'Tecnologías' : 'Technologies'}
          </h2>
        </div>
        <p className="text-center text-base sm:text-lg text-neutral-200 max-w-2xl mx-auto mb-8 font-light">
          {t?.sections?.technologiesSubtitle}
        </p>
      </div>
      <TechSection 
        title={t?.sections?.backend || "Backend"} 
        sectionIndex={2}
        visibleCards={visibleCards}
        cardsRef={cardsRef}
      >
        {techGroups.backend.map((name, index) => (
          <TechCard 
            key={name} 
            tech={getTech(name)} 
            cardIndex={index}
            totalOffset={techGroups.frontend.length}
          />
        ))}
      </TechSection>

      <TechSection 
        title={t?.sections?.frontend || "Frontend"} 
        sectionIndex={1}
        visibleCards={visibleCards}
        cardsRef={cardsRef}
      >
        {techGroups.frontend.map((name, index) => (
          <TechCard 
            key={name} 
            tech={getTech(name)} 
            cardIndex={index}
            totalOffset={0}
          />
        ))}
      </TechSection>

      <TechSection 
        title={t?.sections?.tools || "Tools"} 
        sectionIndex={3}
        visibleCards={visibleCards}
        cardsRef={cardsRef}
      >
        {techGroups.tools.map((name, index) => (
          <TechCard 
            key={name} 
            tech={getTech(name)} 
            cardIndex={index}
            totalOffset={techGroups.frontend.length + techGroups.backend.length}
          />
        ))}
      </TechSection>
    </section>
  );
}

function TechSection({ title, children, sectionIndex, visibleCards, cardsRef }) {
  return (
    <div 
      ref={(el) => (cardsRef.current[sectionIndex] = el)}
      data-index={sectionIndex}
      className={`flex flex-col gap-8 sm:gap-12 transform transition-all duration-200 ${
        visibleCards.has(sectionIndex)
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: visibleCards.has(sectionIndex) ? `${sectionIndex * 50}ms` : '0ms'
      }}
    >
      <div className="flex items-center gap-4 sm:gap-5">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-white">
          {title}
        </h2>
        <span className="flex-1 h-px bg-gradient-to-r from-cyan-500/70 to-transparent"></span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {children}
      </div>
    </div>
  );
}

function TechCard({ tech, cardIndex, totalOffset }) {
  const [visible, setVisible] = useState(false);
  const cardRef = useRef(null);
  const globalIndex = totalOffset + cardIndex;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  if (!tech) return null;

  return (
    <div
      ref={cardRef}
      className={`group flex flex-col items-center justify-center gap-3 p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.4)] ${
        visible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-8 scale-95'
      }`}
      style={{
        transitionDelay: visible ? `${globalIndex * 50}ms` : '0ms'
      }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
        
        <img
          src={tech.icon}
          alt={tech.name}
          className="relative w-8 h-8 sm:w-10 sm:h-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
        />
      </div>

      <span className="text-xs sm:text-sm text-white/80 tracking-wide transition-colors duration-300 group-hover:text-white">
        {tech.name}
      </span>
    </div>
  );
}