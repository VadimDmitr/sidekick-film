'use client';

import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.subscribeSection}>
        <span>SUBSCRIBE TO OUR </span>
        <div className={styles.youtubeLinkContainer}>
          <a
            href="https://www.youtube.com/@sidekickfilmco.273"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            SIDEKICK YOUTUBE
          </a>
          <a
            href="https://www.youtube.com/@sidekickfilmco.273"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
          >
            <FaYoutube size="1.4em" />
          </a>
        </div>
        <span> CHANNEL</span>
      </div>
      <div className={styles.copyRight}>
        <div>BUILT WITH THOUGHT BY VADKO</div>
        <div>COPYRIGHT © 2024 ALL RIGHTS RESERVED.</div>
      </div>
    </footer>
  );
};

export default Footer;
