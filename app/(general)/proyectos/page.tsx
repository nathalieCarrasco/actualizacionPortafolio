'use client'; 

import React from 'react';
import '@/app/globals.css'; 

const Proyectos = () => {
    return (
        <div className="flex flex-col items-center mt-10">
            {/* Banner de la página con imagen de fondo */}
            <div
                className="w-full h-80 bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: 'url("/img/proyectosBanner.png")', // Ajusta la ruta de la imagen si es necesario
                    backgroundColor: '#0a0a0a', // Fondo gris oscuro si la imagen no se carga xsia
                }}
            >
                <h2 className="text-4xl font-bold p-4 rounded-lg"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente
                        color: '#E2cdcc', // Color destacado
                    }}
                >
                    Mis Proyectos
                </h2>
            </div>

            {/* Contenedor de proyectos con un diseño de grid */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-8">
                {/* Tarjeta de proyecto 1 */}
                <div className="bg-black p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-primary mb-4" style={{ color: '#E2cdcc' }}>
                        Proyecto 1
                    </h3>
                    <p className="text-lg" style={{ color: '#D4B2A7' }}>
                        Descripción del proyecto 1: Desarrollo de una aplicación web fullstack con integración de APIs RESTful y despliegue en AWS.
                    </p>
                </div>

                {/* Tarjeta de proyecto 2 */}
                <div className="bg-black p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-primary mb-4" style={{ color: '#E2cdcc' }}>
                        Proyecto 2
                    </h3>
                    <p className="text-lg" style={{ color: '#D4B2A7' }}>
                        Descripción del proyecto 2: Implementación de infraestructura como código usando Terraform en un entorno multi-cloud.
                    </p>
                </div>

                {/* Tarjeta de proyecto 3 */}
                <div className="bg-black p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-primary mb-4" style={{ color: '#E2cdcc' }}>
                        Proyecto 3
                    </h3>
                    <p className="text-lg" style={{ color: '#D4B2A7' }}>
                        Descripción del proyecto 3: Desarrollo de una solución de ciberseguridad para aplicaciones web usando OWASP.
                    </p>
                </div>
            </div>

            {/* Efecto Hover para las tarjetas que debo pasar a componente individual solo prueba */}
            <style jsx>{`
                .shadow-lg:hover {
                    transform: translateY(-5px);
                    transition: transform 0.3s ease;
                }
            `}</style>
        </div>
    );
};

export default Proyectos;
