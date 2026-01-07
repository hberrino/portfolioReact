import { texts } from "../Data/texts";

export default function Footer({ lang }) {
  const t = texts[lang].sections;

  return (
    <footer
      className="
        border-t border-white/10
        py-10
        px-6
        text-center
        text-sm
        text-white/50
      "
    >
      <div className="flex flex-col items-center gap-4">
        <p>
          © 2026 Hernán Berrino — Full Stack Developer
        </p>

        <div className="flex items-center gap-3 text-white/40">
          <span className="text-xs">{t.footerBuilt}</span>

          <div className="flex items-center gap-2">
            <img src="/icons/React.svg" alt="React" className="w-4 h-4 opacity-70" />
            <img src="/icons/vite.svg" alt="Vite" className="w-4 h-4 opacity-70" />
            <img src="/icons/Tailwind.svg" alt="Tailwind CSS" className="w-4 h-4 opacity-70" />
          </div>
        </div>
      </div>
    </footer>
  );
}
