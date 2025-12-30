export default function ProjectCard({ title, description, github }) {
  return (
    <div className="bg-white shadow rounded p-4" data-aos="fade-up">
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <a
        className="text-blue-600 underline mt-3 inline-block"
        href={github}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver código
      </a>
    </div>
  );
}