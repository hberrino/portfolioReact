import { projects } from "../Data/data";
import ProjectCard from "./ProjectCard";

export default function Projects({ title, lang }) {
  return (
    <section
      id="projects"
      className="min-h-screen pt-26 pb-32 px-6 flex flex-col items-center"
    >
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-neutral-100">
          {title}
        </h2>
        <span
          className="block w-12 h-1 mx-auto mt-1 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500"
        />
      </div>

      <div className="w-full max-w-3xl flex flex-col gap-14">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            title={project.title[lang]}
            description={project.description[lang]}
          />
        ))}
      </div>
    </section>
  );
}
