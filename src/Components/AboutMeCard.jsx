import React, { useState, useEffect } from 'react';
import aboutMe from '../Utils/aboutMe.json';
import './aboutMeCard.css';

function AboutMeCard() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const fullText = aboutMe.aboutMe;
    const typingSpeed = 30;
    let isMounted = true;

    const type = () => {
      if (!isMounted) return;
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
        setTimeout(type, typingSpeed);
      }
    };

    type();
    return () => { isMounted = false; };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const enhanceText = (text) => {
    const highlightWords = [
      'developer', 'passionate', 'innovative', 'creative',
      'experienced', 'dedicated', 'skilled', 'professional'
    ];

    let highlighted = text;
    highlightWords.forEach(word => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      highlighted = highlighted.replace(regex,
        `<span class="highlight-word">${word}</span>`
      );
    });

    return highlighted;
  };

  return (
    <div className="about-me-section">
      <div className="card-mn-cls">
        <div className="aboutMeCard-mn-cls">
          <div
            className="about-text"
            dangerouslySetInnerHTML={{
              __html: enhanceText(typedText) + (showCursor ? '<span class="blinking-cursor">|</span>' : '')
            }}
          ></div>

          <div style={{
            position: 'absolute',
            top: '15px',
            left: '15px',
            fontSize: '3rem',
            color: 'rgba(255, 107, 107, 0.2)',
            fontFamily: 'serif',
            lineHeight: 1,
            zIndex: -1
          }}>"</div>

          <div style={{
            position: 'absolute',
            bottom: '15px',
            right: '15px',
            fontSize: '3rem',
            color: 'rgba(78, 205, 196, 0.2)',
            fontFamily: 'serif',
            lineHeight: 1,
            zIndex: -1,
            transform: 'rotate(180deg)'
          }}>"</div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeCard;
