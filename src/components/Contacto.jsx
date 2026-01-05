import { texts } from "../Data/texts";
import LinkedinIcon from "../assets/icons/linkedin.svg";
import MailIcon from "../assets/icons/gmail.svg";

export default function Contacto({ lang }) {
  const t = texts[lang]?.contact ?? texts.es.contact;

  return (
    <section
      id="contacto"
      className="min-h-screen px-6 py-28 flex items-center justify-center"
    >
      <div
        className="
          w-full max-w-4xl
          rounded-3xl
          bg-gradient-to-br from-white/5 to-white/[0.02]
          backdrop-blur-md
          border border-white/10
          p-10 md:p-14
        "
        data-aos="fade-up"
      >
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            {t.title}
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
          <p className="text-white/70 max-w-xl mx-auto pt-4">
            {t.subtitle}
          </p>
        </div>

        {/* Quick actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-3
              px-7 py-3
              rounded-full
              border border-white/20
              bg-white/5
              text-sm font-medium
              hover:bg-white/10 hover:border-white/30
              transition
            "
          >
            <img src={LinkedinIcon} alt="LinkedIn" className="w-5 h-5" />
            {t.linkedin}
          </a>

          <a
            href="mailto:tuemail@gmail.com"
            className="
              flex items-center gap-3
              px-7 py-3
              rounded-full
              border border-white/20
              bg-white/5
              text-sm font-medium
              hover:bg-white/10 hover:border-white/30
              transition
            "
          >
            <img src={MailIcon} alt="Email" className="w-5 h-5" />
            {t.gmail}
          </a>
        </div>

        {/* Form */}
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder={t.name}
            className="
              col-span-1
              bg-white/5
              border border-white/10
              rounded-xl
              px-5 py-4
              text-sm
              outline-none
              focus:border-purple-400/60
              transition
            "
          />

          <input
            type="email"
            placeholder={t.email}
            className="
              col-span-1
              bg-white/5
              border border-white/10
              rounded-xl
              px-5 py-4
              text-sm
              outline-none
              focus:border-purple-400/60
              transition
            "
          />

          <textarea
            placeholder={t.message}
            rows={5}
            className="
              md:col-span-2
              bg-white/5
              border border-white/10
              rounded-xl
              px-5 py-4
              text-sm
              outline-none
              resize-none
              focus:border-purple-400/60
              transition
            "
          />

          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="
                px-10 py-4
                rounded-full
                bg-gradient-to-r from-purple-600 to-fuchsia-600
                text-sm font-medium
                hover:opacity-90
                transition
              "
            >
              {t.send}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
