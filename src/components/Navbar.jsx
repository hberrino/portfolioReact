import { useState, useEffect } from "react";
import { texts } from "../Data/texts.js";

export default function Navbar({ lang, setLang }) {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const Logo = "/imgs/LOGO.png";

  const languages = [
    { code: "es", label: "ES", flag: "/icons/argflag.svg" },
    { code: "en", label: "EN", flag: "/icons/usaflag.svg" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLangChange = (code) => {
    setLang(code);
    setLangOpen(false);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
      scrolled 
        ? 'bg-black/40 border-b border-white/20 shadow-lg' 
        : 'bg-black/10 border-b border-white/10'
    } animate-fade-in-down`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#inicio" className="flex items-center gap-3 group">
          <img
            src={Logo}
            alt="Logo HB DEV"
            className="w-12 h-12 scale-[3] pt-1 object-contain transition-transform duration-300 group-hover:scale-[3.2]"
          />
        </a>

        <ul className="hidden md:flex gap-6 text-gray-300 items-center">
          {Object.values(texts[lang].nav).map((label, i) => (
            <li key={i}>
              <a
                href={`#${Object.keys(texts[lang].nav)[i]}`}
                className={`relative pb-1 border-b-2 border-transparent transition-all duration-300 hover:border-purple-400/70 ${
                  scrolled ? 'hover:text-white' : 'hover:text-purple-300'
                }`}
              >
                {label}
              </a>
            </li>
          ))}

          <li className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className={`flex items-center gap-2 px-3 py-1 rounded-md border border-white/20 bg-white/10 hover:bg-white/20 transition-all ${
                scrolled ? 'bg-white/20' : 'bg-white/10'
              }`}
            >
              <img
                src={languages.find((l) => l.code === lang).flag}
                alt={lang}
                className="w-5 h-5"
              />
              <span className="text-sm font-semibold">
                {lang.toUpperCase()}
              </span>
            </button>

            {langOpen && (
              <ul className="absolute right-0 mt-2 w-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-md shadow-lg overflow-hidden">
                {languages.map((l) => (
                  <li key={l.code}>
                    <button
                      onClick={() => handleLangChange(l.code)}
                      className="flex items-center gap-2 w-full px-3 py-2 hover:bg-white/20 transition-all"
                    >
                      <img src={l.flag} alt={l.label} className="w-5 h-5" />
                      <span className="text-sm">{l.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      <div
        className={`md:hidden bg-[#0B0A10]/90 backdrop-blur-md absolute w-full left-0 px-6 py-4 transition-all ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 text-gray-300">
          {Object.values(texts[lang].nav).map((label, i) => (
            <li key={i}>
              <a
                href={`#${Object.keys(texts[lang].nav)[i]}`}
                className="block py-2 hover:text-purple-400 transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}

          <li className="flex justify-center mt-2 relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-md border border-white/20 bg-white/10 hover:bg-white/20 transition-all"
            >
              <img
                src={languages.find((l) => l.code === lang).flag}
                alt={lang}
                className="w-5 h-5"
              />
              <span className="text-sm font-semibold">
                {lang.toUpperCase()}
              </span>
            </button>

            {langOpen && (
              <ul className="absolute mt-2 w-28 bg-white/10 backdrop-blur-md border border-white/20 rounded-md shadow-lg">
                {languages.map((l) => (
                  <li key={l.code}>
                    <button
                      onClick={() => handleLangChange(l.code)}
                      className="flex items-center gap-2 w-full px-3 py-2 hover:bg-white/20 transition-all"
                    >
                      <img src={l.flag} alt={l.label} className="w-5 h-5" />
                      <span className="text-sm">{l.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
