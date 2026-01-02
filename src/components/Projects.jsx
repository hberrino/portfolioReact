import { projects } from "../Data/data";
import ProjectCard from "./ProjectCard";

export default function Projects({ title }) {
  const [featured, ...rest] = projects;

  return (
    <section
      id="projects"
      className="min-h-screen pt-24 pb-32 px-6 flex flex-col items-center"
    >
      <div className="text-center mb-14" data-aos="fade-up">
  <span className="text-xs uppercase tracking-widest text-purple-400">
    Portfolio
  </span>

  <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-neutral-100">
    {title}
  </h2>
</div>


      <div
        className="
          w-full max-w-5xl
          grid gap-8
          grid-cols-1
          lg:grid-cols-3
        "
      >
        <div className="lg:col-span-2">
          <ProjectCard {...featured} />
        </div>

        {rest.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
