import { texts } from "../Data/texts.js";
import { useEffect, useRef, useState } from "react";

export default function Sobremi({ lang }) {
  const t = texts[lang];
  const [visible, setVisible] = useState(false);
  const [visibleElements, setVisibleElements] = useState(new Set());
  const sectionRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elementsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleElements((prev) => new Set(prev).add(index));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    elementsRef.current.forEach((element) => {
      if (element) elementsObserver.observe(element);
    });

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
      elementsRef.current.forEach((element) => {
        if (element) elementsObserver.unobserve(element);
      });
    };
  }, []);

  return (
    <section
      id="sobremi"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 py-20 sm:py-24 relative"
    >
      
      <div 
        ref={sectionRef}
        className="max-w-4xl lg:max-w-5xl w-full transform transition-all duration-500"
      >
        <div 
          ref={(el) => (elementsRef.current[0] = el)}
          data-index="0"
          className={`text-center mb-12 sm:mb-16 transform transition-all duration-400 ${
            visibleElements.has(0)
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: visibleElements.has(0) ? '100ms' : '0ms'
          }}
        >
          <div className="relative inline-block mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
              {t.sections.aboutTitle}
            </h2>
          </div>
          
          <p className="text-center text-base sm:text-lg text-neutral-200 max-w-2xl mx-auto mb-8 font-light">
            {lang === 'es' ? 'Conoce más sobre mí y lo que hago' : 'Get to know more about me and what I do'}
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 pt-8 sm:pt-10">
          <div
            ref={(el) => (elementsRef.current[1] = el)}
            data-index="1"
            className={`rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 transition-all duration-500 hover:border-white/20 transform ${
              visibleElements.has(1)
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            }`}
            style={{
              transitionDelay: visibleElements.has(1) ? '300ms' : '0ms'
            }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {t.sections.aboutMeTitle}
            </h3>
            <div className="w-12 h-[2px] bg-cyan-500/70 mb-6" />
            <p className="text-white/80 leading-relaxed whitespace-pre-line text-sm sm:text-base">
              {t.about.me}
            </p>
          </div>

          <div
            ref={(el) => (elementsRef.current[2] = el)}
            data-index="2"
            className={`rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 transition-all duration-500 hover:border-white/20 transform ${
              visibleElements.has(2)
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
            }`}
            style={{
              transitionDelay: visibleElements.has(2) ? '500ms' : '0ms'
            }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {t.sections.aboutOfferTitle}
            </h3>
            <div className="w-12 h-[2px] bg-cyan-500/70 mb-6" />
            <p className="text-white/80 leading-relaxed whitespace-pre-line text-sm sm:text-base">
              {t.about.offer}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-12 sm:top-20 left-4 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-12 sm:bottom-20 right-4 sm:right-10 w-32 sm:w-40 h-32 sm:h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
}
