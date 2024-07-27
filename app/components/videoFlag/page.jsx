'use client';
import React from 'react';
import styles from './videoFlag.module.css';

export default function VideoFlag() {
  return (
    <div className={styles.servicesContainer}>
      <video autoPlay muted playsInline className={styles.backgroundVideo}>
        <source src="/videoMuscle1.mp4" type="video/mp4" />
        Your browser does not support the video tag
      </video>
    </div>
  );
}
