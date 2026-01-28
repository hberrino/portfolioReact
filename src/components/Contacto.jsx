import { useState, useEffect, useRef } from "react";
import { texts } from "../Data/texts";

export default function Contacto({ lang }) {
  const t = texts[lang]?.contact ?? texts.es.contact;
  const [status, setStatus] = useState("idle");
  const [visible, setVisible] = useState(false);
  const [visibleElements, setVisibleElements] = useState(new Set());
  const sectionRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elementsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleElements((prev) => new Set(prev).add(index));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    elementsRef.current.forEach((element) => {
      if (element) elementsObserver.observe(element);
    });

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
      elementsRef.current.forEach((element) => {
        if (element) elementsObserver.unobserve(element);
      });
    };
  }, []);

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
      className="min-h-screen px-4 sm:px-6 py-20 sm:py-28 flex items-center justify-center relative"
    >
      
      <div
        ref={sectionRef}
        className={`w-full max-w-2xl lg:max-w-3xl rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 p-4 sm:p-6 md:p-10 transform transition-all duration-400 ${
          visible
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-8 scale-95'
        }`}
      >
        <div 
          ref={(el) => (elementsRef.current[0] = el)}
          data-index="0"
          className={`text-center mb-8 sm:mb-10 transform transition-all duration-400 ${
            visibleElements.has(0)
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
          style={{
            transitionDelay: visibleElements.has(0) ? '100ms' : '0ms'
          }}
        >
          <div className="relative inline-block mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
              {t.title}
            </h2>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-lg rounded-full"></div>
          </div>
          
          <div className="relative mt-6 mb-6">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
            </div>
            <div className="relative flex items-center justify-center gap-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-cyan-500"></div>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
              </div>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-cyan-500"></div>
            </div>
          </div>
          
          <p className="text-base sm:text-lg text-neutral-100 max-w-xl mx-auto leading-relaxed font-light tracking-wide text-center">
            {t.subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            ref={(el) => (elementsRef.current[1] = el)}
            data-index="1"
            className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 rounded-full border border-white/20 bg-white/5 text-sm font-medium hover:bg-white/10 hover:border-white/30 transition-all transform ${
              visibleElements.has(1)
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
            style={{
              transitionDelay: visibleElements.has(1) ? '200ms' : '0ms'
            }}
          >
            <img
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
            {t.linkedin}
          </a>

          <a
            href="mailto:tuemail@gmail.com"
            ref={(el) => (elementsRef.current[2] = el)}
            data-index="2"
            className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 rounded-full border border-white/20 bg-white/5 text-sm font-medium hover:bg-white/10 hover:border-white/30 transition-all transform ${
              visibleElements.has(2)
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
            style={{
              transitionDelay: visibleElements.has(2) ? '300ms' : '0ms'
            }}
          >
            <img
              src="/icons/gmail.svg"
              alt="Email"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
            {t.gmail}
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4"
        >
          <input
            name="name"
            type="text"
            placeholder={t.name}
            required
            className="bg-white/5 border border-white/10 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-sm outline-none focus:border-cyan-400/60 transition-all"
          />

          <input
            name="email"
            type="email"
            placeholder={t.email}
            required
            className="bg-white/5 border border-white/10 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-sm outline-none focus:border-cyan-400/60 transition-all"
          />

          <textarea
            name="message"
            placeholder={t.message}
            rows={4}
            required
            className="md:col-span-2 bg-white/5 border border-white/10 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-sm outline-none resize-none focus:border-cyan-400/60 transition-all"
          />

          <div className="md:col-span-2 flex flex-col items-center mt-2 gap-3">
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 sm:px-10 py-2.5 sm:py-3.5 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-sm font-medium hover:opacity-90 transition disabled:opacity-60"
            >
              {status === "loading" ? "Enviando..." : t.send}
            </button>

            {status === "success" && (
              <p className="pt-3 text-green-600 text-sm">
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

      <div className="absolute top-12 sm:top-20 left-4 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-12 sm:bottom-20 right-4 sm:right-10 w-32 sm:w-40 h-32 sm:h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
}
