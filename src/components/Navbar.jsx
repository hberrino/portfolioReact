import { navbarLinks } from "../Data/data";
import Logo from "../assets/imgs/LOGO.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0B0A10]/70 border-b border-white/10 animate-fade-in-down">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#inicio" className="flex items-center gap-3 group scale">
          <img
    src={Logo}
    alt="Logo HB DEV"
    className="w-12 h-12 scale-[3] pt-1 object-contain"
  />
  
  </a>

        {/* LINKS */}
        <ul className="flex gap-6 text-gray-300">
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

      </div>
    </nav>
  );
}
