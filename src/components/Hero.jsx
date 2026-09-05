import { techs } from "../Data/data";
import { texts } from "../Data/texts";

export default function Hero({ lang }) {
  const es = lang === "es";
  const t = texts[lang];
  return (
    <section id="inicio" className="hero section-wrap">
      <div className="hero-copy">
        <div className="hero-introduction"><img src="/imgs/yop.jpg" alt="Hernán Berrino" width="76" height="76" fetchPriority="high" /><div><span className="portfolio-label">{es ? "PORTFOLIO PERSONAL / BUENOS AIRES, ARGENTINA" : "PERSONAL PORTFOLIO / BUENOS AIRES, ARGENTINA"}</span><div className="availability"><span />{es ? "Abierto a nuevas oportunidades" : "Open to new opportunities"}</div></div></div>
        <h1 className="personal-name">Hernán<br /><em>Berrino.</em></h1>
        <h2 className="hero-role">{es ? "Desarrollador de aplicaciones" : "Application developer"}</h2>
        <p className="hero-description">{es ? "Construyo aplicaciones completas: sistemas de gestión, soluciones con IA y productos digitales. Me involucro desde entender el problema hasta poner la solución en manos de quienes la usan." : "I build complete applications: management systems, AI solutions and digital products. From understanding the problem to putting the solution in the hands of its users."}</p>
        <div className="hero-actions"><a href="#projects" className="button button-primary">{t.hero.buttons.projects}<span aria-hidden="true">↗</span></a><a href="#contacto" className="hero-talk">{es ? "Hablemos" : "Let's talk"} <span>↗</span></a></div>
        <div className="cv-links"><span>{es ? "CONOCÉ MI PERFIL" : "EXPLORE MY EXPERIENCE"}</span><a href="/docs/CV_Hernan_Berrino_Full_Stack.pdf" download><span className="cv-file">PDF</span>CV Full Stack <span>↓</span></a><a href="/docs/CV_Hernan_Berrino_Backend_Java.pdf" download><span className="cv-file">PDF</span>CV Java Backend <span>↓</span></a></div>
      </div>
      <div className="hero-visual orbital-visual">
        <div className="visual-topline"><span>{es ? "ASÍ CONSTRUYO SOLUCIONES" : "HOW I BUILD SOLUTIONS"}</span><span>HB / FULL STACK</span></div>
        <div className="orbital-art application-art" role="img" aria-label={es ? "Una idea se convierte en una solución completa: producto, cómo lo presentamos; cliente, su mirada; interfaz, lo que ves; lógica, lo que lo hace funcionar; datos, todo conectado; y cloud, despliegue." : "An idea becomes a complete solution: product presentation, the client perspective, interface, logic, connected data and cloud deployment."}>
          <div className="orbit-halo" aria-hidden="true" />
          <div className="orbital-sphere" aria-hidden="true">{Array.from({length: 16}, (_, i) => <i key={i} style={{"--angle": `${i * 11.25}deg`}} />)}<b /></div>
          <div className="orbit-path orbit-path-one" aria-hidden="true" /><div className="orbit-path orbit-path-two" aria-hidden="true" />
          <div className="application-core" aria-hidden="true">
            <div className="app-window-bar"><span /><span /><span /><b>HB.</b></div>
            <div className="app-window-body"><span className="app-core-kicker">{es ? "DE UNA IDEA" : "FROM AN IDEA"}</span><strong>{es ? "a una aplicación." : "to an application."}</strong><div className="app-mini-layout"><i /><div><i /><i /><i /></div></div><span className="app-core-signature">{es ? "PENSADA Y CONSTRUIDA POR MÍ" : "DESIGNED AND BUILT BY ME"}</span></div>
          </div>
          <div className="app-node app-node-product" aria-hidden="true"><span>◇</span><div><strong>{es ? "Producto" : "Product"}</strong><small>{es ? "Cómo lo presentamos" : "How we present it"}</small></div></div>
          <div className="app-node app-node-client" aria-hidden="true"><span>◎</span><div><strong>{es ? "Cliente" : "Client"}</strong><small>{es ? "Su mirada" : "Their perspective"}</small></div></div>
          <div className="app-node app-node-cloud" aria-hidden="true"><span>☁</span><div><strong>Cloud</strong><small>{es ? "Despliegue" : "Deployment"}</small></div></div>
          <div className="app-node app-node-interface" aria-hidden="true"><span>▤</span><div><strong>{es ? "Interfaz" : "Interface"}</strong><small>{es ? "Lo que ves" : "What you see"}</small></div></div>
          <div className="app-node app-node-logic" aria-hidden="true"><span>&lt;/&gt;</span><div><strong>{es ? "Lógica" : "Logic"}</strong><small>{es ? "Lo que lo hace funcionar" : "What makes it work"}</small></div></div>
          <div className="app-node app-node-data" aria-hidden="true"><span>▥</span><div><strong>{es ? "Datos" : "Data"}</strong><small>{es ? "Todo conectado" : "Everything connected"}</small></div></div>
        </div>
        <div className="visual-bottomline"><span>{es ? "CONECTO LAS PIEZAS. CONSTRUYO LA SOLUCIÓN." : "CONNECT THE PIECES. BUILD THE SOLUTION."}</span></div>
      </div>
      <div className="hero-bottom"><span>{es ? "DESDE BUENOS AIRES, ARGENTINA. PARA DONDE HAGA FALTA." : "FROM BUENOS AIRES, ARGENTINA. TO WHEREVER IT TAKES."}</span><a href="#projects">{es ? "EXPLORÁ MIS TRABAJOS" : "EXPLORE MY WORK"} ↓</a></div>
      <div className="stack-ticker" aria-label={es ? "Tecnologías principales" : "Core technologies"}><div className="stack-ticker-track">{[0, 1].map(copy => <div className="stack-ticker-group" key={copy} aria-hidden={copy === 1}>{techs.slice(0, 12).map(tech => <span key={tech.name}><img src={tech.icon} alt="" />{tech.name}</span>)}</div>)}</div></div>
    </section>
  );
}