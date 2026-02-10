export const techs = [
  { name: "Java", icon: "/icons/Java.svg" },
  { name: "Springboot", icon: "/icons/Springboot.svg" },
  { name: "Docker", icon: "/icons/Docker.svg" },
  { name: "JS", icon: "/icons/JS.svg" },
  { name: "React", icon: "/icons/React.svg" },
  { name: "Node", icon: "/icons/Node.svg" },
  { name: "Express", icon: "/icons/Express.png" },
  { name: "Tailwind", icon: "/icons/Tailwind.svg" },
  { name: "MySQL", icon: "/icons/MySQL.png" },
  { name: "MongoDB", icon: "/icons/MongoDB.png" },
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
      es: "tuMASCOTAndil",
      en: "tuMASCOTAndil",
    },
    description: {
      es: "Aplicación full stack desarrollada enteramente por mí, para aportar a la comunidad tandilense con un sistema para transitar, reportar y buscar mascotas perdidas.",
      en: "Full stack application developed entirely by me, to contribute to the Tandil community with a system to transit, report, and search for lost pets.",
    },
    github: "https://github.com/hberrino/tuMASCOTAndil",
    demo: "https://www.tumascotandil.site/",
    video: "/videos/tumascotandilpromo.mp4",
    techs: ["Java", "Springboot", "Postman", "MySQL", "Docker", "Git", "Tailwind", "React", "Node", "Vite"],
    deploy: {
      backend: "Render",
      frontend: "Vercel",
    },
    note: {
      es: "Pulsa online para ir al sitio",
      en: "Click online to go to the site",
    },
    demoLabel: {
      es: "Online",
      en: "Online",
    },
  },
  {
    title: {
      es: "Sistema backend E-commerce",
      en: "E-commerce backend system",
    },
    description: {
      es: "Backend para la gestión de un e-commerce, desarrollado con Java y Spring Boot. Implementa una arquitectura robusta en capas con manejo completo de inventario, pedidos y usuarios.",
      en: "Backend for e-commerce management, developed with Java and Spring Boot. Implements a robust layered architecture with complete inventory, orders, and user management.",
    },
    github: "https://github.com/hberrino/EcommerceAdministrador/",
    images: [
      "/images/ecommerce1.jpg",
      "/images/ecommerce2.jpg",
      "/images/ecommerce3.jpg",
      "/images/ecommerce4.jpg",
    ],
    techs: ["Java", "Springboot", "MySQL", "Postman", "Docker", "Git"],
    deploy: {
      backend: "Docker build",
    },
  },
  {
    title: {
      es: "Aplicación web estacionamiento",
      en: "Parking web application",
    },
    description: {
      es: "Gestión de estacionamiento con cálculo automático de tarifas según duración y tipo de vehículo. Sistema integral para control de ingresos y egresos de vehículos.",
      en: "Parking management with automatic fare calculation based on duration and vehicle type. Comprehensive system for vehicle entry and exit control.",
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
      es: "Sistema backend Gimnasio",
      en: "Gym backend system",
    },
    description: {
      es: "Backend para la gestión de un gimnasio, desarrollado desde cero con Java y Spring Boot, siguiendo arquitectura en capas y buenas prácticas, ejecutable con Docker.",
      en: "Backend for gym management, developed from scratch using Java and Spring Boot, following a layered architecture and good practices, and executable with Docker.",
    },
    github: "https://github.com/hberrino/Backend-Gimnasio",
    images: [
      "/images/backend1.jpg",
      "/images/backend2.jpg",
      "/images/backend3.jpg",
      "/images/backend4.jpg",
    ],
    techs: ["Java", "Springboot", "MySQL", "Postman", "Docker", "Git"],
    deploy: {
      backend: "Docker build",
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
