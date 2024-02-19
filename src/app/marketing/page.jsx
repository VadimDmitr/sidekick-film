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
      <h1 className={styles.serviceTitle}>
        Video Muscle (---American Flag loop video---)
      </h1>
      <div
        ref={firstCardRef}
        className={`${styles.serviceCard} ${firstCardInView ? styles.animateLeft : ''}`}
      >
        <p className={styles.serviceDescription}>
          ??? If your audience uses a smart phone and Internet, they are looking
          at video content. <br /> Over 254 Million Americans watch YouTube in
          the US.
          <br />
          Over 73.3% of consumers 25-55 years-old watch YouTube.
        </p>
      </div>
      <div
        ref={secondCardRef}
        className={`${styles.serviceCard} ${secondCardInView ? styles.animateRight : ''}`}
      >
        <p className={styles.serviceDescription}>
          <span className={styles.emphasizedText}>
            ???? Two-thirds of consumers say they’d rather watch a video to
            learn about a product or service than read about it.
          </span>
          <br />
          Video production used to be tedious, slow, and expensive. Thankfully,
          not anymore.
          <br />
          Sidekick utilizes high-tech equipment, hyper-efficient editing
          software, with tried & true sound, lighting, and filming practices.
          <br />
          The result, stunning & effective media at a price that won’t bust your
          marketing budget.
        </p>
      </div>

      <div
        ref={thirdCardRef}
        className={`${styles.serviceCard} ${thirdCardInView ? styles.animateLeft : ''}`}
      >
        <p className={styles.serviceDescription}>
          ???? Sidekick Film Co. produces, writes, shoots & edits video. <br />
          {/* We
          want to help your organization promote events, increase brand loyalty,
          and advertise with video. */}
        </p>
      </div>
      <div>
        <p className={styles.serviceDescription}>
          <span className={styles.emphasizedTitle}>
            ???? Meet your new video production team
          </span>
          <br />
          We promise, your initial consultation will be wildly informative, and
          yet totally-free <br />
          Call us{' '}
          <a href="tel:+19842224153" className={styles.contactLink}>
            Color for the links??? 984-222-4153
          </a>{' '}
          or email us at{' '}
          <a
            href="mailto:danschaefer123@hotmail.com?subject=Inquiry%20from%20SideKick%20Website&body=Hello,%20I%20would%20like%20to%20discuss..."
            className={styles.contactLink}
          >
            danschaefer123@hotmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
