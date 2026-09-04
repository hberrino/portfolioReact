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

  useEffect(() => {
    const revealSelector = [
      ".hero-copy",
      ".hero-visual",
      ".section-heading",
      ".project-card",
      ".technology-group-detailed",
      ".about-photo",
      ".about-content",
      ".contact-copy",
      ".contact-form",
      ".footer-main",
    ].join(",");
    const observed = new WeakSet();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -45px 0px" },
    );

    const observeElements = (root = document) => {
      root.querySelectorAll(revealSelector).forEach((element, index) => {
        if (observed.has(element)) return;
        observed.add(element);
        element.classList.add("reveal-item");
        element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`);
        observer.observe(element);
      });
    };

    observeElements();
    const mutationObserver = new MutationObserver(() => observeElements());
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div className="site-shell">
      <div className="scroll-track">
        <div id="scroll-progress" className="scroll-progress" />
      </div>
      <Navbar lang={lang} setLang={setLang} />
      <main key={lang} className={`language-view language-${lang}`}>
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
