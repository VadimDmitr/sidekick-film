import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const emailTo = 'vadzzimluch@gmail.com';
  const subject = encodeURIComponent('New Inquiry via Sidekick Website');
  const body = encodeURIComponent(
    "Hello, I'm interested in discussing collaboration opportunities related to website development",
  );

  return (
    <footer className={styles.footer}>
      <div className={styles.subscribeSection}>
        <span>SUBSCRIBE TO OUR </span>
        <a
          href="https://www.youtube.com/@sidekickfilmco.273"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.combinedLink}
        >
          <span className={styles.textWithMargin}>SIDEKICK YOUTUBE</span>
          <FaYoutube size="1.4em" color="#FF0000" />
          <span className={styles.textWithMargin}> CHANNEL</span>
        </a>
      </div>
      <div className={styles.copyRight}>
        <div className={styles.copyRightText}>
          BUILT WITH THOUGHT BY
          <a
            href={`mailto:${emailTo}?subject=${subject}&body=${body}`}
            className={styles.emailLink}
          >
            VADKO
          </a>
        </div>

        <div>COPYRIGHT © 2024 ALL RIGHTS RESERVED.</div>
      </div>
    </footer>
  );
};

export default Footer;
