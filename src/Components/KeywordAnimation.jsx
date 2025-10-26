import React, { useEffect, useState } from 'react';
import './keywordAnimation.css'; 

function KeywordAnimation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="keyword-animation-container">
      <div className="highlight-phrases">
        <span className={`phrase software-engineer ${isVisible ? 'visible' : ''}`}>
          Software Engineer
        </span>
        <span className={`phrase ai-ml-enthusiast ${isVisible ? 'visible' : ''}`}>
          AI/ML Enthusiast
        </span>
      </div>
    </div>
  );
}

export default KeywordAnimation;