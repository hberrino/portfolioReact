import { useCallback, useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Tecnologias from "./components/Tecnologias";
import Sobremi from "./components/Sobremi";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import { texts } from "./Data/texts";

export default function App() {
  const [lang, setLang] = useState("es");
  const scrollTimeout = useRef(null);
  const t = texts[lang];

  const handleSmoothScroll = useCallback((event) => {
    const anchor = event.target.closest("a");
    const href = anchor?.getAttribute("href");
    if (!href?.startsWith("#")) return;

    event.preventDefault();
    const target = document.getElementById(href.slice(1));
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 76,
        behavior: "smooth",
      });
    }
  }, []);

  const handleScroll = useCallback(() => {
    if (scrollTimeout.current) return;
    scrollTimeout.current = window.setTimeout(() => {
      scrollTimeout.current = null;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? (window.scrollY / height) * 100 : 0;
      const bar = document.getElementById("scroll-progress");
      if (bar) bar.style.width = `${progress}%`;
    }, 16);
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleSmoothScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("click", handleSmoothScroll);
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) window.clearTimeout(scrollTimeout.current);
    };
  }, [handleSmoothScroll, handleScroll]);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="scroll-track">
        <div id="scroll-progress" className="scroll-progress" />
      </div>
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Projects title={t.sections.projectsTitle} lang={lang} />
        <Tecnologias lang={lang} />
        <Sobremi lang={lang} />
        <Contacto lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
