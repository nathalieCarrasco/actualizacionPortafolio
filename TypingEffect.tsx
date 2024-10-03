// TypingEffect.tsx

import React, { useEffect, useState } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [showCursor, setShowCursor] = useState<boolean>(true);

  useEffect(() => {
    if (!text) return;
    let index = 0;
    setDisplayedText('');

    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [text, speed]);

  return (
    <span>
      {displayedText}
      {showCursor && <span className="text-white">|</span>}
    </span>
  );
};

export default TypingEffect;
