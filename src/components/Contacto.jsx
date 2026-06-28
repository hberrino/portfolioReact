import { useState } from "react";
import { texts } from "../Data/texts";

export default function Contacto({ lang }) {
  const t = texts[lang].contact;
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    const form = event.currentTarget;
    try {
      const response = await fetch("https://formspree.io/f/xwvpgbdn", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
          message: form.message.value,
        }),
      });
      if (!response.ok) throw new Error();
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="section contact-section">
      <div className="section-wrap contact-layout">
        <div className="contact-copy">
          <span className="eyebrow">{texts[lang].sections.contactTitle}</span>
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
          <div className="contact-links">
            <a href="mailto:berrinohernan@gmail.com">berrinohernan@gmail.com</a>
            <a href="https://linkedin.com/in/hernanberrino" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            <span>{t.name}</span>
            <input name="name" type="text" required />
          </label>
          <label>
            <span>{t.email}</span>
            <input name="email" type="email" required />
          </label>
          <label className="full-field">
            <span>{t.message}</span>
            <textarea name="message" rows="5" required />
          </label>
          <div className="form-footer full-field">
            <button className="button button-primary" type="submit" disabled={status === "loading"}>
              {status === "loading" ? (lang === "es" ? "Enviando..." : "Sending...") : t.send}
            </button>
            {status === "success" && <p className="success">{lang === "es" ? "Mensaje enviado. ¡Gracias!" : "Message sent. Thank you!"}</p>}
            {status === "error" && <p className="error">{lang === "es" ? "No se pudo enviar. Intentá nuevamente." : "Could not send. Please try again."}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
