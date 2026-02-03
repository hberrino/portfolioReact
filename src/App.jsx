import { useState, useEffect, useRef, useCallback } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Tecnologias from "./components/Tecnologias.jsx";
import Sobremi from "./components/Sobremi.jsx";
import Contacto from "./components/Contacto.jsx";
import Footer from "./components/Footer.jsx";

import "./styles/background.css";
import { texts } from "./Data/texts.js";

export default function App() {
  const [lang, setLang] = useState("es");
  const t = texts[lang];

  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const scrollTimeout = useRef(null);

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
    };
  }, [handleSmoothScroll, handleScroll]);


  // -------------------
  // Render
  // -------------------
  const oceanColors = ["bg-cyan-400", "bg-blue-500", "bg-teal-400", "bg-indigo-400", "bg-sky-400"];

  return (
    <div
      className="relative min-h-screen w-full text-white overflow-hidden scroll-smooth bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Enhanced Ocean Layers - Slightly Brighter */}
        <div className="absolute -inset-10 opacity-30">
          <div className={`absolute top-0 -left-4 w-80 h-80 ${oceanColors[0]} rounded-full mix-blend-screen filter blur-2xl animate-blob`}></div>
          <div className={`absolute top-0 -right-4 w-96 h-96 ${oceanColors[1]} rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000`}></div>
          <div className={`absolute -bottom-8 left-20 w-72 h-72 ${oceanColors[2]} rounded-full mix-blend-screen filter blur-2xl animate-blob animation-delay-4000`}></div>
          <div className={`absolute bottom-0 right-20 w-80 h-80 ${oceanColors[3]} rounded-full mix-blend-screen filter blur-2xl animate-blob animation-delay-6000`}></div>
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] ${oceanColors[4]} rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-8000`}></div>
        </div>
        
        {/* Additional Light Layer - Slightly Brighter */}
        <div className="absolute -inset-10 opacity-12">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-3000"></div>
        </div>
        
        {/* Subtle Wave Effect - Slightly Brighter */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-700/20 via-transparent to-cyan-700/20 animate-wave"></div>
        </div>
        
        {/* Enhanced Grid Pattern - Slightly Brighter */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16"></div>
        
        {/* Floating Particles - Slightly Brighter */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                width: `${Math.random() * 2 + 0.5}px`,
                height: `${Math.random() * 2 + 0.5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                opacity: Math.random() * 0.4 + 0.1
              }}
            ></div>
          ))}
        </div>

        {/* Caustic Light Effect - Slightly Brighter */}
        <div className="absolute inset-0 opacity-18">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/15 via-transparent to-blue-500/15 animate-caustic"></div>
        </div>

        {/* Aurora Effect - Slightly Brighter */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent filter blur-3xl animate-aurora"></div>
          <div className="absolute bottom-0 right-1/4 w-1/3 h-1/4 bg-gradient-to-l from-transparent via-blue-500/20 to-transparent filter blur-3xl animate-aurora animation-delay-4000"></div>
        </div>

        {/* Floating Light Orbs - Slightly Brighter */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={`orb-${i}`}
              className="absolute w-4 h-4 bg-cyan-400/25 rounded-full filter blur-xl animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>
      </div>

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
