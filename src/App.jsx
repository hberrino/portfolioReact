import { useState, useEffect, useRef, useCallback } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Tecnologias from "./components/Tecnologias.jsx";
import Sobremi from "./components/Sobremi.jsx";
import Contacto from "./components/Contacto.jsx";
import Footer from "./components/Footer.jsx";

import * as THREE from "three";
import CELLS from "vanta/dist/vanta.cells.min";

import { texts } from "./Data/texts.js";

export default function App() {
  const [lang, setLang] = useState("es");
  const t = texts[lang];

  const [isMobileDevice, setIsMobileDevice] = useState(false);

  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const scrollTimeout = useRef(null);
  const vantaObserver = useRef(null);

  // -------------------
  // Detectar dispositivo móvil de forma segura
  // -------------------
  useEffect(() => {
    const handleResize = () => setIsMobileDevice(window.innerWidth < 768);

    // Ejecutar después del montaje para evitar warning
    requestAnimationFrame(() => handleResize());

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // -------------------
  // Scroll smooth para links internos
  // -------------------
  const handleSmoothScroll = useCallback((e) => {
    const href = e.target.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);

      requestAnimationFrame(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const rect = targetElement.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const offsetTop = rect.top + scrollTop - 80;

          window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }
      });
    }
  }, []);

  // -------------------
  // Scroll progress bar
  // -------------------
  const handleScroll = useCallback(() => {
    if (!scrollTimeout.current) {
      scrollTimeout.current = setTimeout(() => {
        scrollTimeout.current = null;
        requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrollPercent = (scrollTop / docHeight) * 100;

          const progressBar = document.getElementById("scroll-progress");
          if (progressBar) progressBar.style.width = `${scrollPercent}%`;
        });
      }, 16);
    }
  }, []);

  // -------------------
  // Inicialización global
  // -------------------
  useEffect(() => {
    document.addEventListener("click", handleSmoothScroll);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      if (vantaEffect.current) vantaEffect.current.destroy();
      if (vantaObserver.current) vantaObserver.current.disconnect();
    };
  }, [handleSmoothScroll, handleScroll]);

  // -------------------
  // Lazy load Vanta para mejorar LCP y TBT
  // -------------------
  useEffect(() => {
    if (isMobileDevice) return;

    vantaObserver.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !vantaEffect.current) {
          vantaEffect.current = CELLS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 0.8,
            color1: 0x000000,
            color2: 0x0a4a7c,
            size: 1.8,
            speed: 1.5,
            THREE,
          });
          vantaObserver.current.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (vantaRef.current) vantaObserver.current.observe(vantaRef.current);
  }, [isMobileDevice]);

  // -------------------
  // Render
  // -------------------
  return (
    <div
      ref={vantaRef}
      className={`relative min-h-screen w-full text-white overflow-hidden scroll-smooth ${
        isMobileDevice
          ? "bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950"
          : "bg-black"
      }`}
    >
      {/* Fallback estático para mejorar LCP */}
      {!isMobileDevice && (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
          <h1 className="text-white text-5xl font-bold">Mi Portfolio</h1>
        </div>
      )}

      {/* Barra de progreso */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
        <div
          id="scroll-progress"
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300"
          style={{ width: "0%" }}
        ></div>
      </div>

      {/* Contenido */}
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Projects title={t.sections.projectsTitle} lang={lang} />
      <Tecnologias lang={lang} />
      <Sobremi lang={lang} />
      <Contacto lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
