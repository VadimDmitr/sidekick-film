'use client';

import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [isHovered, setIsHovered] = useState(false);
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
    right: '1rem',
    backgroundColor: 'transparent',
    color: '#4CAF50',
    border: 'none',
    width: 'auto',
    height: 'auto',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    cursor: 'pointer',
    zIndex: 1000,
    transition: 'opacity 0.3s ease',
    opacity: isVisible ? 1 : 0,
  };

  return isVisible ? (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={scrollToTop}
      style={backToTopButtonStyle}
    >
      ↑
    </button>
  ) : null;
};

export default BackToTopButton;
