// 'use client';
import React from 'react';
import styles from './videoTraffic.module.css';

export default function videoTraffic() {
  return (
    <div
      className={`${styles.videoTrafficContainer} ${styles.videoTop}`}
      id="services"
    >
      <video autoPlay muted loop className={styles.backgroundVideo}>
        <source src="/videoTraffic2.mp4" type="video/mp4" />
        Your browser does not support the video tag
      </video>
      {/* <h1 className={styles.videoTrafficTitle}>Video Muscle</h1> */}
    </div>
  );
}
