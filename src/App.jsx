import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectCard from './components/ProjectCard'
import { projects } from './Data/data.js'
import { useEffect, useRef } from "react";
import * as THREE from "three";
import CELLS from "vanta/dist/vanta.cells.min";

export default function App() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    vantaEffect.current = CELLS({
      el: vantaRef.current,
      mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  color1: 0x0,
  color2: 0x3a0a75,
  size: 2.20,
  speed: 1.3,
      THREE,
    });

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <div ref={vantaRef} className="min-h-screen w-full text-white relative">
      <Navbar />
      <Hero />

      <section
        id="sobremi"
        className="min-h-screen py-20 px-6 flex flex-col items-center justify-center pt-24"
      >
        <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>
        <p className="max-w-xl text-center">
          CONTENIDO SOBRE MI PROXIMAMENTE
        </p>
      </section>

      <section
        id="tecnologias"
        className="min-h-screen py-20 px-6 flex flex-col items-center justify-center pt-24"
      >
        <h2 className="text-3xl font-bold mb-6">Tecnologías</h2>
        <p>LOGOS / ICONS PROXIMAMENTE</p>
      </section>

      <section
        id="projects"
        className="min-h-screen py-12 px-4 flex flex-col items-center justify-center pt-24"
      >
        <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
          Mis Proyectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard
              key={i}
              title={p.title}
              description={p.description}
              github={p.github}
            />
          ))}
        </div>
      </section>

      <section
        id="contacto"
        className="min-h-screen py-20 px-6 flex flex-col items-center justify-center pt-24"
      >
        <h2 className="text-3xl font-bold mb-6">Contacto</h2>
        <p>FORMULARIO PROXIMAMENTE</p>
      </section>
    </div>
  )
}
