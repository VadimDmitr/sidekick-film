'use client';
import React from 'react';
import styles from './videoMuscle.module.css';

export default function VideoMuscle() {
  return (
    <div className={styles.servicesContainer}>
      <video autoPlay muted playsInline className={styles.backgroundVideo}>
        <source src="/videoMuscle1.mp4" type="video/mp4" />
        Your browser does not support the video tag
      </video>
      {/* <h1 className={styles.serviceTitle}>Video Muscle</h1> */}
    </div>
  );
}
