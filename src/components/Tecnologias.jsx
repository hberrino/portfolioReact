import { techs, techGroups } from "../Data/data.js";
import { texts } from "../Data/texts.js";

export default function Tecnologias({ lang }) {
  const t = texts[lang];

  const getTech = (name) => techs.find((t) => t.name === name);

  return (
    <section
      id="tecnologias"
      className="
        w-full max-w-7xl mx-auto
        px-6 pt-24 pb-32
        flex flex-col gap-28
      "
    >
      <TechSection title={t?.sections?.frontend || "Frontend"}>
        {techGroups.frontend.map((name) => (
          <TechCard key={name} tech={getTech(name)} />
        ))}
      </TechSection>

      <TechSection title={t?.sections?.backend || "Backend"}>
        {techGroups.backend.map((name) => (
          <TechCard key={name} tech={getTech(name)} />
        ))}
      </TechSection>

      <TechSection title={t?.sections?.tools || "Tools"}>
        {techGroups.tools.map((name) => (
          <TechCard key={name} tech={getTech(name)} />
        ))}
      </TechSection>
    </section>
  );
}
function TechSection({ title, children }) {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex items-center gap-5">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
          {title}
        </h2>
        <span className="flex-1 h-px bg-gradient-to-r from-purple-500/70 to-transparent" />
      </div>

      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          gap-6
        "
      >
        {children}
      </div>
    </div>
  );
}

function TechCard({ tech }) {
  if (!tech) return null;

  return (
    <div
      className="
        group
        flex flex-col items-center justify-center
        gap-3
        p-6
        rounded-2xl
        bg-white/5
        border border-white/10
        backdrop-blur-md
        transition-all duration-300
        md:hover:-translate-y-1
        md:hover:border-purple-400/40
        md:hover:shadow-[0_0_25px_-10px_rgba(168,85,247,0.6)]
      "
    >
      <img
        src={tech.icon}
        alt={tech.name}
        className="
          w-10 h-10

          /* Mobile default */
          grayscale-0
          opacity-100

          /* Desktop behavior */
          md:grayscale
          md:opacity-80
          transition-all duration-300
          md:group-hover:grayscale-0
          md:group-hover:opacity-100
          md:group-hover:scale-110
        "
      />

      <span className="text-sm text-white/80 tracking-wide">
        {tech.name}
      </span>
    </div>
  );
}