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
  };

  return isVisible ? (
    <button onClick={scrollToTop} style={backToTopButtonStyle}>
      ↑ Up
    </button>
  ) : null;
};

export default BackToTopButton;
