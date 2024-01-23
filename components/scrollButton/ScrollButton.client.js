// components/ScrollButton.client.js
'use client';

const ScrollButton = ({ sectionId, children }) => {
  const scrollToSection = () => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return <button onClick={scrollToSection}>{children}</button>;
};

export default ScrollButton;
