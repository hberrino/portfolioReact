import JSIcon from '../assets/icons/JS.svg';
import ReactIcon from '../assets/icons/React.svg';
import NodeIcon from '../assets/icons/Node.svg';
import ExpressIcon from '../assets/icons/Express.svg';
import TailwindIcon from '../assets/icons/Tailwind.svg';
import MySQLIcon from '../assets/icons/MySQL.svg';
import JavaIcon from '../assets/icons/Java.svg';
import MongoDBIcon from '../assets/icons/MongoDB.svg';
import HTMLIcon from '../assets/icons/html5.svg';
import CSSIcon from '../assets/icons/CSS.svg';
import GitHubIcon from '../assets/icons/github.svg';
import Linkedin from '../assets/icons/linkedin.svg';
import GitIcon from '../assets/icons/git.svg';
import VScodeIcon from '../assets/icons/vscode.svg';
import ViteIcon from '../assets/icons/vite.svg';
import IntellijIcon from '../assets/icons/intellij.svg';


export const techs = [
  { name: "JS", icon: JSIcon },
  { name: "React", icon: ReactIcon },
  { name: "Node", icon: NodeIcon },
  { name: "Express", icon: ExpressIcon },
  { name: "Tailwind", icon: TailwindIcon },
  { name: "MySQL", icon: MySQLIcon },
  { name: "Java", icon: JavaIcon },
  { name: "MongoDB", icon: MongoDBIcon },
  { name: "HTML", icon: HTMLIcon },
  { name: "CSS", icon: CSSIcon },
  { name: "Github", icon: GitHubIcon },
  { name: "Git", icon: GitIcon },
  { name: "VSCode", icon: VScodeIcon },
  { name: "Vite", icon: ViteIcon },
  { name: "IntelliJ", icon: IntellijIcon },
];
export const techGroups = {
  frontend: ["JS", "React", "HTML", "CSS", "Tailwind"],
  backend: ["Node", "Express", "Java", "MongoDB", "MySQL"],
  tools: ["Git", "Github", "VSCode", "NPM", "Vite", "IntelliJ"],
};

export const projects = [
  {
    title: {
      es: "Parking dinámico con calculador de costo",
      en: "Dynamic parking with cost calculator",
    },
    description: {
      es: "Aplicación full stack para gestión de estacionamiento, con cálculo automático de tarifas según duración y tipo de vehículo.",
      en: "Full stack application for parking management, with automatic fare calculation based on duration and vehicle type.",
    },
    github: "https://github.com/hberrino/ParkingV1",
    demo: "https://hberrino.github.io/ParkingV1/",
    video: `${import.meta.env.BASE_URL}videos/Parkingvid.mp4`,
  },

  {
    title: {
      es: "Página informativa de motocicletas",
      en: "Motorcycle information website",
    },
    description: {
      es: "Sitio web desarrollado con JavaScript, CSS y HTML, consumiendo una API para el sistema de ranking.",
      en: "Website built with JavaScript, CSS and HTML, consuming an API for the ranking system.",
    },
    github: "https://github.com/hberrino/Mototopsweb",
    demo: "https://hberrino.github.io/Mototopsweb/",
    images: [
      `${import.meta.env.BASE_URL}images/mototops1.jpg`,
      `${import.meta.env.BASE_URL}images/mototops2.jpg`,
      `${import.meta.env.BASE_URL}images/mototops3.jpg`,
      `${import.meta.env.BASE_URL}images/mototops4.jpg`,
    ],
  },

  {
    title: {
      es: "Web de fotografía y contenido audiovisual",
      en: "Photography and audiovisual content website",
    },
    description: {
      es: "Sitio web desarrollado con React y Tailwind para una empresa de fotografía.",
      en: "Website developed with React and Tailwind for a photography company.",
    },
    github: "https://github.com/hberrino/",
  },
];
