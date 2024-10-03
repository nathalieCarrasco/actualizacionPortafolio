'use client';

import React, { useState } from 'react';

// Estilos de animación personalizados para el borde resplandeciente
const Terminal = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('Hola, bienvenido a mi portafolio.\nEscribe "ingresar"');

    // Función para manejar el comando de consola 
    const handleCommand = () => {
        if (input.toLowerCase() === 'ingresar') {
            window.location.href = '/about';
        } else {
            setOutput(prev => prev + '\nComando no reconocido. Intenta nuevamente con "ingresar".');
        }
        setInput(''); // Limpia el input después de procesar el comando 
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black to-gris p-8">
            <div className="w-4/5 max-w-4xl bg-black p-6 rounded-lg shadow-lg text-primary font-mono">
                {/* Contenedor del nombre con el borde resplandeciente */}
                <h1 className="text-3xl font-bold text-destacado mb-4 text-center glow-border p-4">
                    <span className="bg-black text-secondary p-2 rounded">&lt; Nathalie /&gt;</span>
                </h1>

                <div className="bg-gris p-4 rounded text-primary overflow-auto h-96"> {/* Overflow para scroll si el output es grande */}
                    <pre>{output}</pre> {/* Muestra el output de salida */}
                    <div className="flex items-center mt-2">
                        <span className="text-secondary">Nath@portafolioWebSecurity:~$</span>
                        <input
                            className="bg-transparent border-none outline-none text-primary ml-2 flex-1"
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleCommand()}
                            placeholder="Escribe 'ingresar'."
                            autoFocus
                        />
                    </div>
                </div>
            </div>

            {/* Estilos para el borde resplandeciente sii yo y mis niñerias nerd XD*/}
            <style jsx>{`
                .glow-border {
                    border: 2px solid rgba(128, 0, 128, 0.7); /* Borde morado */
                    animation: glow 1.5s infinite alternate;
                    border-radius: 8px;
                }

                @keyframes glow {
                    from {
                        box-shadow: 0 0 10px rgba(128, 0, 128, 0.5);
                    }
                    to {
                        box-shadow: 0 0 20px rgba(128, 0, 255, 1), 0 0 30px rgba(128, 0, 255, 0.7);
                    }
                }
            `}</style>
        </div>
    );
};

export default Terminal;
