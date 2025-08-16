import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import './scrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-button"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;