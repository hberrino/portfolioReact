import { useState } from "react";

export default function ProjectCard({
  title,
  description,
  github,
  video,
  demo,
  images,
}) {
  const [current, setCurrent] = useState(0);

  const hasImages = images && images.length > 0;

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
      {/* ===== MEDIA ===== */}

      {/* Video (proyecto destacado) */}
      {video && (
        <div className="relative w-full aspect-video overflow-hidden">
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      )}

      {/* Slider de imágenes */}
      {!video && hasImages && (
        <div className="relative w-full aspect-video overflow-hidden">
          <img
  src={images[current]}
  alt={`${title} screenshot ${current + 1}`}
  className="max-w-full h-auto object-contain transition-opacity duration-300"
  loading="lazy"
/>

          <div className="absolute inset-0 bg-black/20" />

          {images.length > 1 && (
            <>
              {/* Flecha izquierda */}
              <button
                onClick={() =>
                  setCurrent(
                    current === 0 ? images.length - 1 : current - 1
                  )
                }
                className="
                  absolute left-3 top-1/2 -translate-y-1/2
                  bg-black/40 backdrop-blur-sm
                  w-8 h-8 rounded-full
                  flex items-center justify-center
                  text-white text-sm
                  hover:bg-black/60
                  transition
                "
              >
                ‹
              </button>

              {/* Flecha derecha */}
              <button
                onClick={() =>
                  setCurrent((current + 1) % images.length)
                }
                className="
                  absolute right-3 top-1/2 -translate-y-1/2
                  bg-black/40 backdrop-blur-sm
                  w-8 h-8 rounded-full
                  flex items-center justify-center
                  text-white text-sm
                  hover:bg-black/60
                  transition
                "
              >
                ›
              </button>

              {/* Indicadores */}
              <div className=" absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full ${
                      i === current
                        ? "bg-white"
                        : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* ===== CONTENT ===== */}
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
