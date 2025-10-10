import { useState, useEffect } from 'react';
import './DimitriosName.css';

export default function DimitriosName() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Dimitrios';
  const typingSpeed = 150; // milliseconds per character

  useEffect(() => {
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <span className='highlight-name typing-effect'>
      {displayedText}
      <span className='blinking-cursor'>|</span>
    </span>
  );
}

