import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import * as THREE from "three";
import CELLS from "vanta/dist/vanta.cells.min";
import { texts } from "./Data/texts.js";
import Tecnologias from "./components/Tecnologias.jsx";
import Sobremi from "./components/Sobremi.jsx"
import Contacto from "./components/Contacto.jsx";
import Footer from "./components/Footer.jsx"

export default function App() {
  const [lang, setLang] = useState("es");
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
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      color1: 0x000000,
      color2: 0x3a0a75,
      size: 2.2,
      speed: 2.9,
      THREE,
    });

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <div
  ref={vantaRef}
  className="
    min-h-screen
    w-full
    text-white
    relative
    bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950
    overflow-x-hidden
  "
  style={{ backgroundAttachment: "fixed" }}
>
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />

      <Projects
  title={t.sections.projectsTitle}
  lang={lang}
/>
      <Tecnologias lang={lang} />


      <Sobremi lang={lang} />

      <Contacto lang={lang} />
      <Footer lang={lang}/>
    </div>
  );
}
