'use client';
import React from 'react';
import styles from './videoTraffic.module.css';

export default function VideoTraffic() {
  return (
    <div className={`${styles.videoTrafficContainer} ${styles.videoTop}`}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className={styles.backgroundVideo}
        // onLoadedData={(e) => e.target.play()}
      >
        <source src="/videoMountains.mp4" type="video/mp4" />
        Your browser does not support the video tag
      </video>
      {/* <h1 className={styles.videoTrafficTitle}>Video Muscle</h1> */}
    </div>
  );
}
