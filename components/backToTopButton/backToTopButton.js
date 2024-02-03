'use client';
import { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const backToTopButtonStyle = {
    position: 'fixed',
    bottom: '4rem',
    right: '3rem',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '2.8rem',
    height: '2.8rem',
    textAlign: 'center',
    lineHeight: '2.8rem',
    fontSize: '1.5rem',
    cursor: 'pointer',
    // boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    zIndex: 1000,
    transition: 'opacity 0.3s ease',
    opacity: isVisible ? 1 : 0,
    paddingTop: '0.001rem',
  };

  return isVisible ? (
    <button onClick={scrollToTop} style={backToTopButtonStyle}>
      ↑{/* Up */}
    </button>
  ) : null;
};

export default BackToTopButton;
