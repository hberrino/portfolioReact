import { texts } from "../Data/texts.js";

export default function Sobremi({ lang }) {
  const t = texts[lang];

  return (
    <section
      id="sobremi"
      className="
        min-h-screen
        flex items-center justify-center
        px-6 md:px-12
        py-24
      "
    >
      <div className="max-w-5xl w-full">
        <h2
          className="
            text-3xl md:text-4xl font-bold
            text-center mb-2
          "
          data-aos="fade-up"
        >
          {t.sections.aboutTitle}
        </h2>
        <span
  className="
    block
    w-12
    h-1
    mx-auto
    rounded-full
    bg-gradient-to-r from-purple-500 to-fuchsia-500
  "
/>
        <div
          className="
            grid grid-cols-1 md:grid-cols-2
            gap-12 pt-10
          "
        >
          <div
            className="
              rounded-2xl
              bg-white/5 backdrop-blur-md
              border border-white/10
              p-8
              transition-all duration-300
              hover:border-white/20
            "
            data-aos="fade-right"
          >
            <h3 className="text-xl font-semibold mb-2">
              {t.sections.aboutMeTitle}
            </h3>

            <div className="w-12 h-[2px] bg-violet-500/70 mb-6" />

            <p className="text-white/80 leading-relaxed whitespace-pre-line">
              {t.about.me}
            </p>
          </div>

          <div
            className="
              rounded-2xl
              bg-white/5 backdrop-blur-md
              border border-white/10
              p-8
              transition-all duration-300
              hover:border-white/20
            "
            data-aos="fade-left"
          >
            <h3 className="text-xl font-semibold mb-2">
              {t.sections.aboutOfferTitle}
            </h3>

            <div className="w-12 h-[2px] bg-violet-500/70 mb-6" />

            <p className="text-white/80 leading-relaxed whitespace-pre-line">
              {t.about.offer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
