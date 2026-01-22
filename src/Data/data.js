export const techs = [
  { name: "Java", icon: "/icons/Java.svg" },
  { name: "Springboot", icon: "/icons/Springboot.svg" },
  { name: "Docker", icon: "/icons/Docker.svg" },
  { name: "JS", icon: "/icons/JS.svg" },
  { name: "React", icon: "/icons/React.svg" },
  { name: "Node", icon: "/icons/Node.svg" },
  { name: "Express", icon: "/icons/Express.svg" },
  { name: "Tailwind", icon: "/icons/Tailwind.svg" },
  { name: "MySQL", icon: "/icons/MySQL.svg" },
  { name: "MongoDB", icon: "/icons/MongoDB.svg" },
  { name: "HTML", icon: "/icons/html5.svg" },
  { name: "CSS", icon: "/icons/CSS.svg" },
  { name: "Github", icon: "/icons/github.svg" },
  { name: "Git", icon: "/icons/git.svg" },
  { name: "Vite", icon: "/icons/vite.svg" },
  { name: "Postman", icon: "/icons/Postman.png" },
];

export const techGroups = {
  frontend: ["JS", "React", "HTML", "CSS", "Tailwind"],
  backend: ["Java", "Springboot", "Docker", "MySQL", "Node", "Express", "MongoDB"],
  tools: ["Git", "Github", "NPM", "Vite", "Postman"],
};

export const projects = [
  {
    title: {
      es: "Parking dinámico con calculador de costo",
      en: "Dynamic parking with cost calculator",
    },
    description: {
      es: "Aplicación full stack creada desde cero por mí, como único participante de principio a fin. Gestión de estacionamiento, con cálculo automático de tarifas según duración y tipo de vehículo.",
      en: "Full-stack application built from scratch by me as the sole developer from start to finish. Parking management with automatic fare calculation based on duration and vehicle type.",
    },
    github: "https://github.com/hberrino/ParkingReactRemodel",
    demo: "https://parkingdemo-nine.vercel.app/",
    video: "/videos/Parkingvid.mp4",
    techs: ["React", "Tailwind", "MongoDB", "Node", "Express", "Vite", "Git"],
    deploy: {
      backend: "Render",
      frontend: "Vercel",
    },
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
    github: "https://github.com/hberrino/RuloFotografiaWeb",
    demo: "https://hberrino.github.io/RuloFotografiaWeb/",
    images: [
      "/images/RulowebLanding.jpg",
      "/images/sobremirulo.jpg",
      "/images/contacto.jpg",
      "/images/buscaterulo.jpg",
    ],
    techs: ["React", "Tailwind", "Vite", "Git"],
    deploy: {
      frontend: "GitHub Pages",
    },
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
      "/images/mototops1.jpg",
      "/images/mototops2.jpg",
      "/images/mototops3.jpg",
      "/images/mototops4.jpg",
    ],
    techs: ["JS", "HTML", "CSS", "API (Mockapi)"],
    deploy: {
      frontend: "GitHub Pages",
    },
  },
];
