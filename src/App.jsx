import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectCard from './components/ProjectCard'
import { projects } from './Data/data.js'

export default function App() {
  return (
    <>
      <Navbar /> 
      <section id="inicio">
      <Hero />
      </section>
      <section
        id="sobremi"
        className="min-h-screen bg-gray-50 py-20 px-6 flex flex-col items-center justify-center pt-24"
      >
        <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>
        <p className="max-w-xl text-center text-gray-700">
          Contenido sobre vos...
        </p>
      </section>
      <section
        id="tecnologias"
        className="min-h-screen bg-white py-20 px-6 flex flex-col items-center justify-center pt-24"
      >
        <h2 className="text-3xl font-bold mb-6">Tecnologías</h2>
        <p>Acá irán los logos...</p>
      </section>
      <section
        id="projects"
        className="min-h-screen bg-gray-100 py-12 px-4 flex flex-col items-center justify-center pt-24"
      >
        <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
          Mis Proyectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard
              key={i}
              title={p.title}
              description={p.description}
              github={p.github}
            />
          ))}
        </div>
      </section>
      <section
        id="contacto"
        className="min-h-screen bg-gray-50 py-20 px-6 flex flex-col items-center justify-center pt-24"
      >
        <h2 className="text-3xl font-bold mb-6">Contacto</h2>
        <p>Aquí pondremos un formulario luego...</p>
      </section>
    </>
  )
}
