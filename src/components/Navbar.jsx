import { useState } from "react";
import Logo from "../assets/imgs/LOGO.png";
import { texts } from "../Data/texts.js";
import ArgFlag from "../assets/icons/argflag.svg";
import UsaFlag from "../assets/icons/usaflag.svg";



export default function Navbar({ lang, setLang }) {
  const [isOpen, setIsOpen] = useState(false); 
  const [langOpen, setLangOpen] = useState(false); 
  const languages = [
    { code: "es", label: "ES", flag: ArgFlag },
    { code: "en", label: "EN", flag: UsaFlag },
  ];
  const handleLangChange = (code) => {
    setLang(code);
    setLangOpen(false);
  };
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/10 border-b border-white/10 animate-fade-in-down">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src={Logo}
            alt="Logo HB DEV"
            className="w-12 h-12 scale-[3] pt-1 object-contain"
          />
        </a>
        <ul className="hidden md:flex gap-6 text-gray-300 items-center">
          {Object.values(texts[lang].nav).map((label, i) => (
            <li key={i}>
              <a
  href={`#${Object.keys(texts[lang].nav)[i]}`}
  className="relative pb-1 border-b-2 border-transparent hover:border-purple-400/70 transition-all duration-300"
>
  {label}
</a>
            </li>
          ))}
          <li className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 px-3 py-1 rounded-md border border-white/20 bg-white/10 hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              <img src={languages.find(l => l.code === lang).flag} alt={lang} className="w-5 h-5" />
              <span className="text-sm font-semibold">{lang.toUpperCase()}</span>
            </button>
            {langOpen && (
              <ul className="absolute right-0 mt-2 w-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-md shadow-lg overflow-hidden animate-fade-in-down">
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
          <span className={`block w-6 h-0.5 bg-gray-300 transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-300 transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-300 transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>
      <div className={`md:hidden bg-[#0B0A10]/90 backdrop-blur-md absolute w-full left-0 px-6 py-4 transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
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
              className="flex items-center gap-2 px-4 py-2 rounded-md border border-white/20 bg-white/10 hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              <img src={languages.find(l => l.code === lang).flag} alt={lang} className="w-5 h-5" />
              <span className="text-sm font-semibold">{lang.toUpperCase()}</span>
            </button>
            {langOpen && (
              <ul className="absolute mt-2 w-28 bg-white/10 backdrop-blur-md border border-white/20 rounded-md shadow-lg animate-fade-in-down">
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