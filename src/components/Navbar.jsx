import { useState } from "react";
import { navbarLinks } from "../Data/data";
import Logo from "../assets/imgs/LOGO.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0B0A10]/70 border-b border-white/10 animate-fade-in-down">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src={Logo}
            alt="Logo HB DEV"
            className="w-12 h-12 scale-[3] pt-1 object-contain"
          />
        </a>
        <ul className="hidden md:flex gap-6 text-gray-300">
          {navbarLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="hover:text-purple-400 hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.7)] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-300 transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-300 transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-300 transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>
      <div
        className={`md:hidden bg-[#0B0A10]/90 backdrop-blur-md absolute w-full left-0 px-6 py-4 transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 text-gray-300">
          {navbarLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="block py-2 hover:text-purple-400 transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
