'use client'; // Esto marca el componente como "Client Component"

import React from 'react';
import '@/app/globals.css'; 

const SobreMi = () => {
    return (
        <div className="flex flex-col items-center mt-10">
            {/* Banner con imagen de fondo y colores personalizados */}
            <div
                className="w-full h-80 bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: 'url("/img/sobremi.png")', 
                    backgroundColor: '#0a0a0a', // Fondo gris si la imagen no carga 
                }}
            >
                <h2 className="text-4xl font-bold p-4 rounded-lg"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente 
                        color: '#E2cdcc', // Color destacado del título
                    }}
                >
                    Mi Trayectoria en TI
                </h2>
            </div>

            {/* Tarjeta de experiencia con colores personalizados */}
            <div
                className="mt-10 shadow-lg p-8 rounded-lg text-center max-w-3xl"
                style={{
                    backgroundColor: '#000000', // Fondo negro de la tarjeta
                    color: '#a78976', // Color principal de las letras
                }}
            >
                <h3 className="text-2xl font-bold mb-4"
                    style={{ color: '#E2cdcc' }} // Color destacado para el subtítulo
                >
                    Sobre Mi
                </h3>
                <p className="text-lg mb-4"
                    style={{ color: '#D4B2A7' }} // Color secundario para el párrafo
                >
                    Desde mis primeros pasos en el mundo de la programación, he estado profundamente fascinada por cómo la tecnología puede transformar procesos y resolver problemas. Inicié como desarrolladora web, y a lo largo del tiempo, me he especializado en el desarrollo de soluciones en la nube, logrando la certificación como <span className="font-bold text-light" style={{ color: '#E2cdcc' }}>AWS Certified Practitioner</span> y recientemente graduándome como <span className="font-bold text-light" style={{ color: '#E2cdcc' }}>AWS Architect</span>.
                </p>
                <p className="text-lg mb-4"
                    style={{ color: '#D4B2A7' }} // Color secundario para el párrafo
                >Además de mi enfoque en la nube, he descubierto una pasión particular por la ciberseguridad. A través de diversos proyectos, he adquirido habilidades clave para proteger aplicaciones e infraestructuras en entornos en la nube, lo cual me ha permitido contribuir activamente a la seguridad y eficiencia de los sistemas que desarrollo. Estoy en constante aprendizaje, preparándome con nuevas certificaciones, y buscando cómo mejorar mis competencias para enfrentar los desafíos actuales en este campo.</p>
                
                <p className="text-lg"
                    style={{ color: '#D4B2A7' }} // Color secundario para el texto adicional
                >
                    Lo que más me motiva es descubrir cómo la nube, hoy en día, ofrece soluciones innovadoras y escalables para diferentes niveles de aplicaciones, desde pequeños proyectos hasta grandes infraestructuras. Cada desafío es una oportunidad para aprender y aplicar los conocimientos que he adquirido, con el objetivo de mejorar la eficiencia y seguridad en la infraestructura.
                </p>
            </div>

            {/* Efecto Hover para la tarjeta */}
            <style jsx>{`
                .shadow-lg:hover {
                    transform: translateY(-3px);
                    transition: transform 0.3s ease;
                }
                .text-light {
                    text-shadow: 0 0 4px #E2cdcc, 0 0 10px #E2cdcc, 0 0 10px #E2cdcc;
                }
            `}</style>
        </div>
    );
};

export default SobreMi;

