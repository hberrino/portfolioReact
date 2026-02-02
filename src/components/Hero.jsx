import { techs } from "../Data/data.js";

import { texts } from "../Data/texts.js";

import { useEffect, useRef, useState } from "react";



export default function Hero({ lang }) {

  const t = texts[lang];

  const softSkills = t.card.softSkills;

  const Foto = "/imgs/yo.jpg";

  const [visible, setVisible] = useState(false);

  const [visibleElements, setVisibleElements] = useState(new Set());

  const elementsRef = useRef([]);



  useEffect(() => {

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

        rootMargin: '0px 0px -100px 0px'

      }

    );



    elementsRef.current.forEach((element) => {

      if (element) elementsObserver.observe(element);

    });



    return () => {

      elementsRef.current.forEach((element) => {

        if (element) elementsObserver.unobserve(element);

      });

    };

  }, []);



  return (

    <section

      id="inicio"

      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 text-white overflow-hidden"

    >

      <div className="pointer-events-none absolute -top-20 sm:-top-40 -left-20 sm:-left-40 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-cyan-600/15 blur-[100px] sm:blur-[150px] rounded-full"></div>

      <div className="pointer-events-none absolute bottom-0 right-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-blue-600/10 blur-[180px] sm:blur-[220px] rounded-full"></div>



      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8 sm:gap-12 relative z-10 py-16 sm:py-20 items-center">

        <div 

          ref={(el) => (elementsRef.current[0] = el)}

          data-index="0"

          className={`flex-1 flex flex-col justify-start items-center md:items-start text-center md:text-left gap-4 md:gap-2 transform transition-all duration-700 ${

            visibleElements.has(0)

              ? 'opacity-100 translate-x-0'

              : 'opacity-0 -translate-x-16'

          }`}

          style={{

            transitionDelay: visibleElements.has(0) ? '200ms' : '0ms'

          }}

        >

          <div className="w-full flex justify-between items-center pt-4 sm:pt-6 md:pt-2">

            <p className="text-xs sm:text-sm text-cyan-400 tracking-wide font-medium flex items-center gap-2 font-sans">

              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full inline-block animate-pulse"></span>

              {t.hero.availability}

            </p>



            <div className="flex items-center gap-2 pb-1 pr-2 sm:pb-0 sm:pr-6">

              <span className="text-cyan-400 text-lg hidden sm:inline">→</span>

              <div className="flex gap-1">

                <a

                  href="https://github.com/hberrino"

                  target="_blank"

                  rel="noopener noreferrer"

                  className="p-2 rounded-full hover:bg-cyan-500/20 transition transform hover:scale-110"

                >

                  <img src="/icons/github.svg" alt="GitHub" className="w-4 h-4 sm:w-5 sm:h-5" />

                </a>

                <a

                  href="https://linkedin.com/in/hernanberrino"

                  target="_blank"

                  rel="noopener noreferrer"

                  className="p-2 rounded-full hover:bg-cyan-500/20 transition transform hover:scale-110"

                >

                  <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-4 h-4 sm:w-5 sm:h-5" />

                </a>

              </div>

            </div>

          </div>



          <div className="mt-2 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">

            <h1 className="pb-2 text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight md:pt-6 md:pr-5 font-sans">

              {t.hero.greeting} <span className="text-cyan-400">Hernán</span>

            </h1>

            

            <div className="relative group -mt-1">

              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-300"></div>

              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl bg-black/20 backdrop-blur-sm">

                <img

                  src={Foto}

                  alt="Hernán Berrino"

                  className="scale-130 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"

                />

              </div>

            </div>

          </div>



          <h2 className="pt-2 text-xl sm:text-2xl text-gray-300 font-light font-sans">

            {t.hero.role}

          </h2>



          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mt-4 md:mt-6 max-w-xl px-4 sm:px-0 break-words font-sans">

            {t.hero.description}

          </p>



          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 md:mt-10 justify-center md:justify-start md:pb-2">

            <a

              href="#projects"

              className="px-6 sm:px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white transition-all hover:from-cyan-700 hover:to-blue-700 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 text-sm sm:text-base font-sans font-medium"

            >

              {t.hero.buttons.projects}

            </a>

            <a

              href="/docs/cv_hbmES.pdf"

              download="cv_hbmES.pdf"

              className="flex items-center gap-2 px-6 sm:px-8 py-3 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition transform hover:scale-105 text-sm sm:text-base font-sans font-medium"

            >

              {t.hero.buttons.downloadCV}

              <img src="/icons/pdf.svg" alt="PDF" className="w-4 h-4 sm:w-5 sm:h-5" />

            </a>

          </div>

        </div>



        <div 

          ref={(el) => (elementsRef.current[1] = el)}

          data-index="1"

          className={`mt-4 flex-1 flex justify-center w-full md:w-auto transform transition-all duration-700 ${

            visibleElements.has(1)

              ? 'opacity-100 translate-x-0'

              : 'opacity-0 translate-x-16'

          }`}

          style={{

            transitionDelay: visibleElements.has(1) ? '400ms' : '0ms'

          }}

        >

          <div className="w-full md:w-auto relative p-6 sm:p-8 flex flex-col gap-8">

            <div className="space-y-3">

              <h3 className="text-lg sm:text-xl font-bold text-white md:text-start pl-3 border-l-2 border-gradient-to-b from-cyan-500 to-blue-500" style={{borderImage: 'linear-gradient(to bottom, #06b6d4, #3b82f6) 1'}}>

                {t.card.contributionTitle}

              </h3>

            </div>



            <div className="flex flex-wrap gap-2 justify-center md:justify-start break-words">

              {techs.map(({ name, icon }) => (

                <span

                  key={name}

                  className="flex items-center gap-1.5 px-3 py-1.5 bg-cyan-500/10 text-cyan-300 text-xs sm:text-sm rounded-lg transition-all whitespace-nowrap hover:bg-cyan-500/20 hover:text-cyan-200"

                >

                  <img src={icon} alt={name} className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />

                  {name}

                </span>

              ))}

            </div>



            <div className="space-y-4">

              <p className="text-sm text-gray-300 leading-relaxed md:text-start">

                {t.card.description}

              </p>

              <p className="text-sm text-cyan-400 font-medium leading-relaxed md:text-start">

                {t.card.highlight}

              </p>

            </div>



            <div className="space-y-3">

              <h4 className="text-sm font-semibold text-cyan-300 tracking-wide flex items-center gap-2 justify-center md:justify-start">

                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>

                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>

                {t.card.softSkillsTitle}

              </h4>



              <div className="flex flex-wrap gap-2 justify-center md:justify-start">

                {softSkills.map((skill) => (

                  <span

                    key={skill}

                    className="px-3 py-1 text-xs font-medium rounded-lg transition-all

                               text-gray-300 bg-gray-800/50

                               hover:text-white hover:bg-gray-700/50 hover:scale-105"

                  >

                    {skill}

                  </span>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

