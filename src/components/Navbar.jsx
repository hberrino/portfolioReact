import { navbarLinks } from "../Data/data";

export default function Navbar() {
  return (
    <nav className="px-2 py-4 flex justify-between items-center">
      <h1 className="text-2xl tracking-wide text-purple-950">HB DEV</h1>
      <ul className="flex gap-6">
        {navbarLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className="hover:text-violet-400 hover:scale-105 transition-transform transition-colors duration-300"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}