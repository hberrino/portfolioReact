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
import GithubIcon from '../assets/icons/Github.svg';


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
  { name: "Git", icon: GithubIcon },
];

export const navbarLinks = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobremi', label: 'Sobre mí' },
  { id: 'tecnologias', label: 'Tecnologías' },
    { id: 'projects', label: 'Trabajos' },
    { id: 'contacto', label: 'Contacto' },
];

export const projects = [
  {
    title: "Parking Dinamico con Calculador de costo.",
    description: "App CRUD hecha con React y LocalStorage",
    github: "https://github.com/hberrino/ParkingV1"
  },
  {
    title: "API de Usuarios",
    description: "Backend REST usando Java + Spring Boot",
    github: "https://github.com/hernan/spring-api"
  },
  {
    title: "Portfolio v1",
    description: "Sitio web personal con React + Tailwind",
    github: "https://github.com/hernan/portfolio"
  }
];