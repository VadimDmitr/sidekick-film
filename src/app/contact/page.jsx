import React from 'react';
import styles from './contact.module.css';

const Contact = () => {
  const emailTo = 'danschaefer123@hotmail.com';
  const subject = 'Inquiry from SideKick Website';
  const body = 'Hello, I would like to discuss...';
  const googleMapsUrl = 'https://www.google.com/maps/place/Raleigh/+NC';

  return (
    <>
      <div className={styles.topBar}></div>
      <div id="contact" className={styles.contact}>
        <h1>Sidekick Film Co.</h1>
        <p>Dan Schaefer - Producer </p>
        <p>
          <strong>Contact Us</strong>
        </p>

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
