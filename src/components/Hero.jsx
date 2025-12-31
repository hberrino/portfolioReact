 export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-8 bg-[#0B0A10] text-white overflow-hidden animate-fade-in-right"
      id="inicio"
    >
      <div className="pointer-events-none absolute -top-40 -left-40 w-[450px] h-[450px] bg-purple-600/20 blur-[150px] rounded-full"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-700/10 blur-[220px] rounded-full"></div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 py-20">
        
        <div className="flex flex-col justify-center text-left">
  <p className="text-sm text-purple-400 tracking-wide font-medium">
    Disponible – Buscando primer experiencia
  </p>

  {/* Título + foto lado a lado */}
  <div className="flex items-center gap-6 mt-2">
    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
      Hola, soy <span className="text-purple-400">Hernán</span>
    </h1>

    {/* Foto en círculo tipo card */}
    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-purple-800 shadow-lg">
      <img
        src="./src/assets/imgs/FotoCV.jpg"
        alt="Hernán Berrino"
        className="w-full h-full object-cover scale-170 object-[center_35%]"
      />
    </div>
  </div>

  <h2 className="text-2xl text-gray-300 mt-4 font-light">
    Full Stack Developer
  </h2>

  <p className="text-lg text-gray-300 leading-relaxed mt-6 max-w-xl">
    Último año de TUDAI – UNICEN. Desarrollo aplicaciones full stack y estoy listo para sumarme a un equipo profesional, aportar valor y seguir creciendo mediante desafíos reales.
  </p>

  <div className="flex flex-wrap gap-4 mt-10">
    <a
      href="#projects"
      className="px-8 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition shadow-md"
    >
      Ver Proyectos
    </a>
    <a
      href="#tecnologias"
      className="px-8 py-3 bg-white/10 rounded-lg border border-white/10 hover:bg-white/20 transition"
    >
      Tecnologías
    </a>
  </div>
</div>

        <div className="hidden md:flex items-center justify-center">
  <div className="relative w-full h-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col gap-6">
    <h3 className="text-lg font-semibold text-gray-200">
      Qué puedo aportar
    </h3>

    {/* Tecnologías principales */}
    <div className="flex flex-wrap gap-2">
      {["JS", "React", "Node", "Express", "MySQL", "MongoDB", "Git"].map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 bg-purple-600/30 text-purple-200 text-sm rounded-md"
        >
          {tech}
        </span>
      ))}
    </div>

    <hr className="border-white/10" />

    {/* Descripción corta del valor aportable */}
    <p className="text-sm text-gray-300 leading-relaxed">
  Bases sólidas en lógica y programación con Java. Desarrollo APIs, CRUDs y 
  dashboards con stack moderno. Capaz de avanzar con autonomía, investigar, 
  destrabar problemas y entregar resultados funcionales.
  <span className="block mt-1 text-gray-400/90">
    No solo estudio: ejecuto, entrego y demuestro con proyectos reales.
  </span>
</p>
<div>
  <h4 className="text-sm font-semibold text-gray-100 tracking-wide flex items-center gap-2">
    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
    Soft skills
  </h4>

  <div className="flex flex-wrap gap-2 mt-2">
    {["Disciplina", "Constancia", "Iniciativa", "Comunicación", "Mentalidad resolutiva", "Curiosidad", "Adaptabilidad"].map((skill) => (
      <span
        key={skill}
        className="px-3 py-1 text-xs text-white bg-white/15 border border-white/20 rounded-lg backdrop-blur-sm hover:bg-white/25 hover:border-white/30 transition-all font-medium"
      >
        {skill}
      </span>
    ))}
  </div>
  </div>

  </div>
  </div>
      </div>
    </section>
    
  );
}
