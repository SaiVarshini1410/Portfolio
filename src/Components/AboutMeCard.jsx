import React, { useState, useEffect } from 'react';
import ProfileCardImg from '../assets/profileCard.png';
import aboutMe from '../Utils/aboutMe.json';
import './aboutMeCard.css';
import KeywordAnimation from './KeywordAnimation';

function AboutMeCard() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const fullText = aboutMe.aboutMe;
    let isMounted = true;

    const type = () => {
      if (!isMounted) return;
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
        requestAnimationFrame(type);
      } else {
        console.log('Typing complete');
      }
    };

    requestAnimationFrame(type);
    return () => {
      isMounted = false;
    };
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
    <div className="profile-about-section">
      <div className="profile-card-container">
        <div className="profileCard-mn-cls">
          <img src={ProfileCardImg} alt="profileCard-img" className="profileCard-img-cls" />
        </div>
      </div>
      
      <div className="about-card-container">
        <div className="card-mn-cls">
          <KeywordAnimation />
          <div className="aboutMeCard-mn-cls">
            <div
              className="about-text"
              style={{ whiteSpace: 'pre-wrap', overflow: 'visible', maxWidth: 'none' }}
              dangerouslySetInnerHTML={{
                __html: enhanceText(typedText) + (showCursor ? '<span class="blinking-cursor">|</span>' : '')
              }}
            ></div>

            <div className="quote-mark quote-mark-start">"</div>
            <div className="quote-mark quote-mark-end">"</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeCard;