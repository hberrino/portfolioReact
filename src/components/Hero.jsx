import Foto from "../assets/imgs/FotoCV.jpg";
import { techs } from '../Data/data.js';
import PdfIcon from "../assets/icons/pdf.svg";
import { texts } from "../Data/texts.js";
import GithubIcon from '../assets/icons/github.svg';
import Linkedin from '../assets/icons/linkedin.svg';


export default function Hero({lang}) {
  const t = texts[lang];
  const softSkills = t.card.softSkills;
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-8 text-white overflow-hidden animate-fade-in-right"
    >
      <div className="pointer-events-none absolute -top-40 -left-40 w-[450px] h-[450px] bg-purple-600/20 blur-[150px] rounded-full"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-700/10 blur-[220px] rounded-full"></div>

      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12 relative z-10 py-20 items-center">

        <div className="flex-1 flex flex-col justify-start items-center md:items-start text-center md:text-left gap-4 md:gap-2">
          <div className="w-full flex justify-between items-center pt-6 md:pt-2">
  <p className="text-xs md:text-sm text-purple-400 tracking-wide font-medium flex items-center gap-2">
  <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full inline-block"></span>
  {t.hero.availability}
</p>


  <div className="flex items-center gap-2 pb-1 pr-2 md:pb-0 md:pr-6">
    <span className="text-purple-400 text-lg hidden md:inline">→</span>
    <div className="flex gap-1">
      <a
        href="https://github.com/hberrino"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full hover:bg-purple-500/20 transition transform hover:scale-110"
      >
        <img src={GithubIcon} alt="GitHub" className="w-5 h-5" />
      </a>
      <a
        href="https://linkedin.com/in/hernanberrino"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full  hover:bg-purple-500/20 transition transform hover:scale-110"
      >
        <img src={Linkedin} alt="LinkedIn" className="w-5 h-5" />
      </a>
    </div>
  </div>
</div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
            <h1 className="pb-2 text-3xl md:text-5xl font-extrabold tracking-tight md:pt-6 md:pr-5">
              {t.hero.greeting} <span className="text-purple-400">Hernán</span>
            </h1>
            <div className="md:translate-y-7 w-24 h-24 rounded-full overflow-hidden border-2 border-purple-800 shadow-lg">
              <img
                src={Foto}
                alt="Hernán Berrino"
                className="w-full h-full object-cover scale-170 object-[center_35%]"
              />
            </div>
          </div>

          <h2 className="pt-2 text-2xl text-gray-300 font-light">
            {t.hero.role}
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mt-4 md:mt-6 max-w-xl">
            {t.hero.description}
          </p>
          <div className="flex flex-wrap gap-4 mt-6 md:mt-10 justify-center md:justify-start md:pb-2">
            <a
  href="#projects"
  className="px-8 py-3 bg-purple-600 rounded-lg text-white
             transition-all animate-glow hover:bg-purple-700"
>
  {t.hero.buttons.projects}
</a>
            <a
  href="docs/cv_hbmES.pdf"
  download="cv_hbmES.pdf"
  className="flex items-center gap-2 px-8 py-3 bg-white/10 rounded-lg border border-white/10 hover:bg-white/20 transition"
>
  {t.hero.buttons.downloadCV}
  <img src={PdfIcon} alt="PDF" className="w-5 h-5" />
</a>
          </div>
        </div>

        <div className="mt-4 flex-1 flex justify-center w-full md:w-auto">
          <div className="w-full md:w-auto relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col gap-6">
            <h3 className="text-center text-lg font-semibold text-gray-200 md:text-start">
              {t.card.contributionTitle}
            </h3>

            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
   {techs.map(({ name, icon }) => (
       <span
        key={name}
      className="flex items-center gap-1 px-3 py-1 bg-purple-600/30 text-purple-200 text-sm rounded-md"
    >
      <img src={icon} alt={name} className="w-4 h-4" />
      {name}
    </span>
  ))}
</div>

            <hr className="border-white/10" />
            <p className="text-center text-sm text-gray-300 leading-relaxed md:text-start">
              {t.card.description}
              <span className="block mt-1 text-gray-400/90">
                {t.card.highlight}
              </span>
            </p>

            <div>
              <h4 className="text-sm font-semibold text-gray-100 tracking-wide flex items-center gap-2 justify-center md:justify-start">
  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
  {t.card.softSkillsTitle}
</h4>

<div className="pt-3 flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
    {softSkills.map((skill) => (
      <span
        key={skill}
        className="px-3 py-1 text-xs font-medium rounded-lg backdrop-blur-sm transition-all
                   text-white bg-white/10 border border-white/20
                   hover:bg-white/20 hover:border-white/30"
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
