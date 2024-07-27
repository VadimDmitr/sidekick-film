import React from 'react';
import Image from 'next/image';
import styles from './contact.module.css';

const Contact = () => {
  const emailTo = 'danschaefer123@hotmail.com';
  const subject = 'Inquiry from SideKick Website';
  const body = 'Hello, I would like to discuss...';
  const googleMapsUrl = 'https://www.google.com/maps/place/Cary/+NC';

  return (
    <>
      <div className={styles.topBar}></div>
      <div id="contact" className={styles.contact}>
        <div className={styles.logoImageWrapper}>
          <div className={styles.imageContainer}>
            <Image
              src="/Sidekick_media.jpg"
              alt="Sidekick media"
              fill
              style={{ objectFit: 'contain' }}
              className={styles.responsiveImage}
            />
          </div>
        </div>
        <p className={styles.producer}>Dan Schaefer | Producer</p>
        <p className={styles.contactUs}>Contact Us</p>
        <p>
          <strong>Phone: </strong>
          <a href="tel:19842224153" className={styles.contactLink}>
            +1 984-222-4153
          </a>
        </p>
        <p>
          <strong>Email: </strong>
          <a
            href={`mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
            className={styles.contactLink}
          >
            {emailTo}
          </a>
        </p>
        <p>
          <strong>Address: </strong>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            Cary, North Carolina
          </a>
        </p>
        <a
          href={`mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
          className={styles.contactLink}
        >
          <button type="button" className={styles.contactButton}>
            Send Email
          </button>
        </a>
      </div>
    </>
  );
};

export default Contact;
