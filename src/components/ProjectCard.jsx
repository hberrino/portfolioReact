export default function ProjectCard({
  title,
  description,
  github,
  video,
  demo,
  image,
}) {
  return (
    <article
      className="
        relative rounded-2xl overflow-hidden
        bg-white/5 backdrop-blur-md
        border border-white/10
        shadow-lg
        hover:border-white/20 hover:shadow-xl
        transition-all duration-300
        flex flex-col
      "
      data-aos="fade-up"
    >
      {/* Media */}
      {(video || image) && (
        <div className="relative w-full aspect-video overflow-hidden">
          {video ? (
            <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 bg-black/20" />
        </div>
      )}

      {/* Content */}
      <div className="p-5 flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-white">
          {title}
        </h3>

        <p className="text-xs text-neutral-300 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center gap-4 mt-2">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-xs font-medium text-neutral-300
              hover:text-white
              transition-colors
            "
          >
            Código
          </a>

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-xs font-medium text-purple-400
                hover:text-purple-300
                transition-colors
              "
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
