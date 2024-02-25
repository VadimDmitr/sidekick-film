import React from 'react';
import styles from './servicesDown.module.css';

const servicesDownPage = () => {
  return (
    <div className={styles.contentContainer}>
      <h1>
        Shouldn’t you employ the most powerful communication tool in history?
      </h1>
      <p>We&rsquo;re ready to produce your custom videos.</p>
      <p>
        More descriptive than a thousand words, Sidekick videos combine a
        thoughtful orchestration of imagery, narration, music and visual effects
        to deliver a meaningful ‘experience’ for your audience. The memorable
        impression of a quality video can improve the ROI value for all your
        communication channels.
      </p>
      <h2>Better media made Simple.</h2>
      <p>
        Plug video into all your communications&mdash;it&rsquo;s a serious game
        changer!
      </p>
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
