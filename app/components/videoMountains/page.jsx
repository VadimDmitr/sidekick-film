'use client';
import React from 'react';
import styles from './videoMountains.module.css';

export default function VideoMountains() {
  return (
    <div className={`${styles.videoTrafficContainer} ${styles.videoTop}`}>
      <video autoPlay muted loop playsInline className={styles.backgroundVideo}>
        <source src="/videoMountains.mp4" type="video/mp4" />
        Your browser does not support the video tag
      </video>
    </div>
  );
}
