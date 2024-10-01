"use client";

import TypingEffect from "@/TypingEffect"; 
import { useState } from "react";
import "@/app/globals.css"; 
import { FaJsSquare, FaVuejs, FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { SiExpress, SiMysql, SiSpringboot, SiMongodb, SiNextdotjs, SiJest } from "react-icons/si"; 
import { SiHtml5, SiCss3, SiSass } from "react-icons/si"; 

// Objeto con los datos de las habilidades en iconos
const skillsData = {
  frontend: [
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 text-5xl transition-transform transform hover:rotate-180 duration-500" /> },
    { name: "Vue.js", icon: <FaVuejs className="text-green-600 text-5xl transition-transform transform hover:rotate-180 duration-500" /> },
    { name: "React.js", icon: <FaReact className="text-blue-600 text-5xl transition-transform transform hover:rotate-180 duration-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-write text-5xl transition-transform transform hover:rotate-180 duration-500" /> },
    { name: "HTML", icon: <SiHtml5 className="text-orange-500 text-5xl transition-transform transform hover:rotate-180 duration-500" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-500 text-5xl transition-transform transform hover:rotate-180 duration-500" /> },
    { name: "SASS", icon: <SiSass className="text-pink-500 text-5xl transition-transform transform hover:rotate-180 duration-500" /> },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-700 text-5xl transition-transform transform hover:rotate-180 duration-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-700 text-5xl transition-transform transform hover:rotate-180 duration-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400 text-5xl transition-transform transform hover:rotate-180 duration-500" /> },
    { name: "Java", icon: <span className="text-red-500 text-5xl transition-transform transform hover:rotate-180 duration-500">☕</span> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-800 text-5xl transition-transform transform hover:rotate-180 duration-500" /> },
  ],
  cloud: [
    { name: "EC2", icon: <FaAws className="text-orange-600 text-5xl transition-transform transform hover:rotate-180 duration-500" /> },
    { name: "S3", icon: <FaAws className="text-blue-600 text-5xl transition-transform transform hover:rotate-180 duration-500" /> },
    { name: "Route 53", icon: <FaAws className="text-blue-400 text-5xl transition-transform transform hover:rotate-180 duration-500" /> },
    { name: "RDS", icon: <FaAws className="text-purple-600 text-5xl transition-transform transform hover:rotate-180 duration-500" /> },
    { name: "VPC", icon: <FaAws className="text-green-500 text-5xl transition-transform transform hover:rotate-180 duration-500" /> },
    { name: "CloudWatch", icon: <FaAws className="text-yellow-500 text-5xl transition-transform transform hover:rotate-180 duration-500" /> },
    { name: "CloudTrail", icon: <FaAws className="text-gray-700 text-5xl transition-transform transform hover:rotate-180 duration-500" /> },
    { name: "Aurora", icon: <FaAws className="text-cyan-500 text-5xl transition-transform transform hover:rotate-180 duration-500" /> },
    { name: "DynamoDB", icon: <FaAws className="text-amber-600 text-5xl transition-transform transform hover:rotate-180 duration-500" /> },
  ],
  general: [
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-5xl transition-transform transform hover:rotate-180 duration-500" /> },
    { name: "AWS", icon: <FaAws className="text-orange-500 text-5xl transition-transform transform hover:rotate-180 duration-500" /> },
    { name: "Jest", icon: <SiJest className="text-red-600 text-5xl transition-transform transform hover:rotate-180 duration-500" /> },
  ],
};

// Definir un tipo para las claves de skillsData
type SkillCategory = keyof typeof skillsData;

export default function About() {
  const [selectedSkill, setSelectedSkill] = useState<SkillCategory | null>(null);

  // Función para mostrar los íconos según la habilidad seleccionada en botones
  const renderIcons = (category: SkillCategory) => {
    return skillsData[category].map((skill) => (
      <div key={skill.name} className="flex flex-col items-center">
        {skill.icon}
        <p className="mt-2 text-lg">{skill.name}</p>
      </div>
    ));
  };

  return (
    <div className="mainContenedor bg-black text-primary py-12 mb-4 h-screen">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
            <img
              src="/img/main-ilustracion.png"
              alt="programadora"
              className="w-2/3 md:w-full"
            />
          </div>
          <div className="w-full md:w-1/2 text-center">
            <h2 className="text-3xl font-bold text-destacado mb-4">Hola! Soy</h2>
            <h3 className="text-2xl font-semibold text-primary mb-2">
              Nathalie Carrasco
            </h3>
            <h4 className="text-xl text-secondary mb-6">
              <TypingEffect text="Desarrolladora Web Full Stack" speed={100} />
            </h4>
            <p className="text-primary mb-6">
              Con experiencia en el ecosistema MERN (MongoDB, Express.js, React.js, Node.js) y en el desarrollo de aplicaciones web. Diseño soluciones que se ajustan a las necesidades de los clientes, maximizando el uso de la nube y aplicando medidas de seguridad robustas. Actualmente, me enfoco en ciberseguridad, adquiriendo habilidades prácticas en detección y configuración. Estoy motivada por enfrentar desafíos técnicos y colaborar con equipos talentosos para lograr soluciones innovadoras.
            </p>
            <div className="flex justify-center space-x-4 mb-7">
              <button
                type="button"
                className="btn bg-brown-700 hover:bg-secondary text-white py-2 px-6 rounded-md"
              >
                Descargar CV
              </button>
              <button
                type="button"
                className="btn bg-brown-700 hover:bg-secondary text-white py-2 px-6 rounded-md"
              >
                Contacto
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="skills bg-gris py-12 h-screen" id="skills">
        <section className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-destacado mb-4">Mis Skills</h2>
          <div className="flex justify-center space-x-4 mb-8">
            <button
              className={`btn ${selectedSkill === 'frontend' ? 'bg-primary' : 'bg-brown-700'} hover:bg-secondary py-2 px-6 rounded-md text-white`}
              onClick={() => setSelectedSkill('frontend')}
            >
              Frontend
            </button>
            <button
              className={`btn ${selectedSkill === 'backend' ? 'bg-primary' : 'bg-brown-700'} hover:bg-secondary py-2 px-6 rounded-md text-white`}
              onClick={() => setSelectedSkill('backend')}
            >
              Backend
            </button>
            <button
              className={`btn ${selectedSkill === 'cloud' ? 'bg-primary' : 'bg-brown-700'} hover:bg-secondary py-2 px-6 rounded-md text-white`}
              onClick={() => setSelectedSkill('cloud')}
            >
              Cloud
            </button>
            <button
              className={`btn ${selectedSkill === 'general' ? 'bg-primary' : 'bg-brown-700'} hover:bg-secondary py-2 px-6 rounded-md text-white`}
              onClick={() => setSelectedSkill('general')}
            >
              General
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {selectedSkill ? renderIcons(selectedSkill) : null}
          </div>
        </section>
      </div>
    </div>
  );
}