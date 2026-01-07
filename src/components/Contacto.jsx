import { useState } from "react";
import { texts } from "../Data/texts";

export default function Contacto({ lang }) {
  const t = texts[lang]?.contact ?? texts.es.contact;
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;

    try {
      const res = await fetch("https://formspree.io/f/xwvpgbdn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
          message: form.message.value,
        }),
      });

      if (!res.ok) throw new Error();

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

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
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            {t.title}
          </h2>
          <span
            className="
              block w-12 h-1 mx-auto rounded-full
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
              px-7 py-3 rounded-full
              border border-white/20 bg-white/5
              text-sm font-medium
              hover:bg-white/10 hover:border-white/30
              transition
            "
          >
            <img
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              className="w-5 h-5"
            />
            {t.linkedin}
          </a>

          <a
            href="mailto:tuemail@gmail.com"
            className="
              flex items-center gap-3
              px-7 py-3 rounded-full
              border border-white/20 bg-white/5
              text-sm font-medium
              hover:bg-white/10 hover:border-white/30
              transition
            "
          >
            <img
              src="/icons/gmail.svg"
              alt="Email"
              className="w-5 h-5"
            />
            {t.gmail}
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            name="name"
            type="text"
            placeholder={t.name}
            required
            className="
              bg-white/5 border border-white/10
              rounded-xl px-5 py-4 text-sm
              outline-none focus:border-purple-400/60
              transition
            "
          />

          <input
            name="email"
            type="email"
            placeholder={t.email}
            required
            className="
              bg-white/5 border border-white/10
              rounded-xl px-5 py-4 text-sm
              outline-none focus:border-purple-400/60
              transition
            "
          />

          <textarea
            name="message"
            placeholder={t.message}
            rows={5}
            required
            className="
              md:col-span-2
              bg-white/5 border border-white/10
              rounded-xl px-5 py-4 text-sm
              outline-none resize-none
              focus:border-purple-400/60
              transition
            "
          />

          <div className="md:col-span-2 flex flex-col items-center mt-4 gap-3">
            <button
              type="submit"
              disabled={status === "loading"}
              className="
                px-10 py-4 rounded-full
                bg-gradient-to-r from-purple-600 to-fuchsia-600
                text-sm font-medium
                hover:opacity-90
                transition
                disabled:opacity-60
              "
            >
              {status === "loading" ? "Enviando..." : t.send}
            </button>

            {status === "success" && (
              <p className="pt-5 text-green-600 text-sm">
                Gracias por contactarme!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 text-sm">
                Ocurrió un error. Intentá nuevamente.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
