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
import GithubIcon from '../assets/icons/github.svg';
import Linkedin from '../assets/icons/linkedin.svg';


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

export const projects = [
  {
    title: "Parking Dinámico con Calculador de Costo",
    description: "Aplicación full stack para gestión de estacionamiento, con cálculo automático de tarifas basado en duración y tipo de vehículo. Desarrollada con JS, CSS, HTML, API, y librerias externas.",
    github: "https://github.com/hberrino/ParkingV1",
    demo: "https://hberrino.github.io/ParkingV1/",
    video: `${import.meta.env.BASE_URL}videos/Parkingvid.mp4`,
  },
  {
    title: "Pagina informativa de motocicletas",
    description: "Web realizada con JavaScript, CSS, HTML, y consumiendo una API para el sistema de ranking",
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
    title: "Portfolio v1",
    description: "Sitio web personal desarrollado con React y Tailwind.",
    github: "https://github.com/hernan/portfolio"
  }
];
