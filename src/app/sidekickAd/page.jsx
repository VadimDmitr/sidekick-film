import React from 'react';
import styles from './sidekickAd.module.css';

const sidekickAd = () => {
  return (
    <div className={styles.sidekickContainer}>
      <p>
        Sidekick leverages creative video content with strategic messaging to
        build higher awareness, and loyalty to your brand & organization.
      </p>
      <p>
        The extremely competitive world of Internet and email marketing demands
        content to be expertly crafted, and memorable to reach the target
        audience.
      </p>
      <p className={styles.highlightedText}>
        Two-thirds of consumers say they’d rather watch a video to learn about a
        product or service than read about it.
      </p>
      <p>That’s why video is the KING of the Internet!</p>
      <p>
        Video production used to be tedious, slow, and expensive. Thankfully,
        not anymore.
      </p>
      <p>
        Sidekick utilizes high-tech equipment, hyper-efficient editing software,
        with tried & true sound, lighting, and filming practices.
      </p>
      <p>
        The result, stunning & effective media at a price that won’t bust your
        marketing budget.
      </p>
      <p className={styles.highlightedText}>
        Meet your new video production team{' '}
      </p>
      <p>
        We promise, your initial consultation will be wildly informative, and
        yet totally-free
      </p>

      <div className={styles.contactInfo}>
        <p>
          Call us <a href="tel:984-222-4153">984-222-4153</a> or{' '}
          <a href="mailto:danschaefer123@hotmail.com?subject=Inquiry from SideKick Website&body=Hello, I would like to discuss...">
            danschaefer123@hotmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default sidekickAd;
