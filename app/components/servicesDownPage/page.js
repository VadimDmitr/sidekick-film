import React from 'react';
import Image from 'next/image';
import styles from './servicesDown.module.css';

const servicesDownPage = () => {
  return (
    <div className={styles.contentContainer}>
      <h1 id="services">We are ready to produce your custom videos.</h1>
      <p>
        Sidekick designs thoughtful orchestration of imagery, narration, music
        and visual effects. Delivering this meaningful experience to your
        audience creating a memorable impression improving the value for all
        communication channels.
      </p>
      <div className={styles.simplyBetterMedia}>Simply better media.</div>
      <div className={styles.blackBar}>
        <div className={styles.imageContainer}>
          <Image
            src="/Sidekick_services.jpg"
            alt="Sidekick Services"
            fill
            style={{ objectFit: 'contain' }}
            className={styles.responsiveImage}
          />
        </div>
      </div>
      <div className={styles.serviceGrid}>
        <div>Event Promotion</div>
        <div>Fundraising</div>
        <div>Drone</div>
        <div>Branding</div>
        <div>Product Demo</div>
        <div>PR</div>
        <div>Company News</div>
        <div>Social Media</div>
        <div>Testimonials</div>
        <div>Interviews Q&A</div>
        <div>Education</div>
        <div>Presentations</div>
      </div>
    </div>
  );
};

export default servicesDownPage;
