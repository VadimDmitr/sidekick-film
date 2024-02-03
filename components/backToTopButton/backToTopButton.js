'use client';

import React, { useState, useEffect } from 'react';
const BackToTopButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
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
    backgroundColor: isHovered ? '#367a38' : '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '2.8rem',
    height: '2.8rem',
    textAlign: 'center',
    lineHeight: '2.8rem',
    fontSize: '1.5rem',
    cursor: 'pointer',
    zIndex: 1000,
    transition: 'opacity 0.3s ease, backgroundColor 0.3s ease',
    opacity: isVisible ? 1 : 0,
    paddingTop: '0.001rem',
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
