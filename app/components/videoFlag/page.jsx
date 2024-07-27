'use client';
import React, { useRef } from 'react';
import styles from './videoFlag.module.css';

export default function VideoFlag() {
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 3;
      videoRef.current.play();
    }
  };

  return (
    <div className={styles.servicesContainer}>
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className={styles.backgroundVideo}
        onClick={handleVideoClick}
      >
        <source src="/videoFlag.mp4" type="video/mp4" />
        Your browser does not support the video tag
      </video>
    </div>
  );
}
