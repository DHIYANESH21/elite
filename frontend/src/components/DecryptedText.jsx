import React, { useState, useEffect } from 'react';

const DecryptedText = ({ text, speed = 50, delay = 0, className = '' }) => {
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

  useEffect(() => {
    let timeoutId;
    let intervalId;

    const startAnimation = () => {
      setIsAnimating(true);
      let iteration = 0;
      
      intervalId = setInterval(() => {
        setDisplayText(
          text.split('')
            .map((char, index) => {
              if (index < iteration) {
                return char;
              }
              if (char === ' ') return ' ';
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          clearInterval(intervalId);
          setIsAnimating(false);
          setDisplayText(text);
        }

        iteration += 1 / 3;
      }, speed);
    };

    timeoutId = setTimeout(startAnimation, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, delay]);

  return (
    <span className={`${className} ${isAnimating ? 'font-mono' : ''}`}>
      {displayText || ' '}
    </span>
  );
};

export default DecryptedText;
