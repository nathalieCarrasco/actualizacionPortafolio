'use client';

import React, { useEffect, useState } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number; // Velocidad de escritura en milisegundos
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState<string>('');

  useEffect(() => {
    if (!text) return; // Si text es undefined o vacío, no hacer nada
    let index = 0;
    setDisplayedText(''); // Reiniciar el texto mostrado

    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  // Asegúrate de que el texto mostrado no sea undefined
  return <span>{displayedText}</span>;
};

export default TypingEffect;


