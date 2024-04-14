import React from 'react';
import styles from './servicesDown.module.css';

const servicesDownPage = () => {
  return (
    <div className={styles.contentContainer}>
      <h1>We are ready to produce your custom videos.</h1>
      <p></p>
      <p>
        Sidekick designs thoughtful orchestration of imagery, narration, music
        and visual effects. Delivering this meaningful experience to your
        audience, leaves a memorable impression improving the value for all
        communication channels.
      </p>
      <h1>Simply better media.</h1>
      {/* <p>
        Plug video into all your communications&mdash;it&rsquo;s a serious game
        changer!
      </p> */}
       <h2>Sidekick Services</h2>
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
