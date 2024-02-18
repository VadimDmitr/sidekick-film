'use client';
import React from 'react';
import styles from './marketing.module.css';
import { useInView } from 'react-intersection-observer';

export default function Services() {
  const { ref: firstCardRef, inView: firstCardInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: secondCardRef, inView: secondCardInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: thirdCardRef, inView: thirdCardInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className={styles.servicesContainer} id="services">
      <video autoPlay muted loop className={styles.backgroundVideo}>
        <source src="/ourServices.mp4" type="video/mp4" />
        Your browser does not support the video tag
      </video>
      <h1 className={styles.serviceTitle}>Why video matters...</h1>
      <div
        ref={firstCardRef}
        className={`${styles.serviceCard} ${firstCardInView ? styles.animateLeft : ''}`}
      >
        <p className={styles.serviceDescription}>
          If your audience uses a smart phone and Internet, they are looking at
          video content. <br /> Over 254 Million Americans watch YouTube in the
          US.
          <br />
          Over 73.3% of consumers 25-55 years-old watch YouTube.
        </p>
      </div>
      <div
        ref={secondCardRef}
        className={`${styles.serviceCard} ${secondCardInView ? styles.animateRight : ''}`}
      >
        <p className={styles.serviceDescription}>
          Video is the most powerful & compelling way to reach your audience.
          New smaller cameras, LED lighting, high tech sound & editing software
          makes producing this medium more affordable than ever.
          <br /> At Sidekick, we are experts in getting maximum ROI for your
          marketing investment.
        </p>
      </div>
      <div
        ref={thirdCardRef}
        className={`${styles.serviceCard} ${thirdCardInView ? styles.animateLeft : ''}`}
      >
        <p className={styles.serviceDescription}>
          Sidekick Film Co. produces, writes, shoots & edits video. <br /> We
          want to help your organization promote events, increase brand loyalty,
          and advertise with video.
        </p>
      </div>
      <div>
        <p className={styles.serviceTitle}>
          Supercharge your marketing with Sidekick videos!
        </p>
      </div>
    </div>
  );
}
