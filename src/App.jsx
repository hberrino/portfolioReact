import { useState, useEffect, useRef } from "react";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectCard from './components/ProjectCard'
import { projects } from './Data/data.js'
import * as THREE from "three";
import CELLS from "vanta/dist/vanta.cells.min";
import { texts } from "./Data/texts.js";

export default function App() {
  const [lang, setLang] = useState("es"); // <- Estado global del idioma
  const t = texts[lang];

  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const isMobile = () => window.innerWidth < 768;

  useEffect(() => {
    if (isMobile()) return;

    vantaEffect.current = CELLS({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      color1: 0x000000,
      color2: 0x3a0a75,
      size: 2.20,
      speed: 2.90,
      THREE,
    });

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="min-h-screen w-full text-white relative bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950"
    >
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />

      <section
        id="sobremi"
        className="min-h-screen py-20 px-6 flex flex-col items-center justify-center pt-24"
      >
        <h2 className="text-3xl font-bold mb-6">{t.sections.aboutTitle}</h2>
        <p className="max-w-xl text-center">{t.sections.aboutPlaceholder}</p>
      </section>

      <section
        id="tecnologias"
        className="min-h-screen py-20 px-6 flex flex-col items-center justify-center pt-24"
      >
        <h2 className="text-3xl font-bold mb-6">
          {lang === "es" ? "Tecnologías" : "Technologies"}
        </h2>
        <p>LOGOS / ICONS PROXIMAMENTE</p>
      </section>

      <section
        id="projects"
        className="min-h-screen py-12 px-4 flex flex-col items-center justify-center pt-24"
      >
        <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
          {t.sections.projectsTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard
              key={i}
              title={p.title}
              description={p.description}
              github={p.github}
              lang={lang} 
            />
          ))}
        </div>
      </section>

      <section
        id="contacto"
        className="min-h-screen py-20 px-6 flex flex-col items-center justify-center pt-24"
      >
        <h2 className="text-3xl font-bold mb-6">
          {t.sections.contactTitle}
        </h2>
        <p>FORMULARIO PROXIMAMENTE</p>
      </section>
    </div>
  );
}
