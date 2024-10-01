'use client';

import React from 'react';

const Home = () => {
    const handleClick = () => {
        // Tu lógica aquí
        window.location.href = '/about';
    };

    return (
        <div className="flex flex-col items-center mt-10">
            <h1 className="text-3xl font-bold">Bienvenido a Mi Portafolio</h1>
            <button
                onClick={handleClick}
                className="mt-5 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
                Ver más
            </button>
        </div>
    );
};

export default Home;