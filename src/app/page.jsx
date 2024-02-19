import React from 'react';
import styles from './home.module.css';
import About from './about/page';
import Marketing from './marketing/page';
import Contact from './contact/page';
import VideoComponent from './video/page';

export default function Home() {
  return (
    <>
      <div className={styles.backgroundImageContainer}>
        <div className={styles.textOverlay}>
          <h1 className={styles.welcomeTitle}>Are you invisible?</h1>
          <p className={styles.welcomeText}>Video will get you noticed.</p>
        </div>
      </div>
      {/* Gradient Transition Div */}
      <div className={styles.gradientTransition}></div>
      <section className={styles.section}>
        <Marketing />
        <VideoComponent />
        <About />
        <Contact />
      </section>
    </>
  );
}
