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
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const isMobile = () => window.innerWidth < 768;

  useEffect(() => {
    const checkMobile = () => setIsMobileDevice(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleSmoothScroll = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) {
        progressBar.style.width = `${scrollPercent}%`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileDevice) return;

    vantaEffect.current = CELLS({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      color1: 0x000000,
      color2: 0x0a4a7c,
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
      className={`
        min-h-screen
        w-full
        text-white
        relative
        ${isMobileDevice 
          ? 'bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950' 
          : 'bg-black'
        }
        overflow-hidden
        scroll-smooth
      `}
      style={{ scrollBehavior: 'smooth' }}
    >
      <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
        <div id="scroll-progress" className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300" style={{ width: '0%' }}></div>
      </div>

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
