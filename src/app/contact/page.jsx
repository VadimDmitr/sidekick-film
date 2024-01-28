import styles from './contact.module.css';

const Contact = () => {
  const emailTo = 'danschaefer123@hotmail.com';
  const subject = 'Inquiry from Website';
  const body = 'Hello, I would like to discuss...';
  const googleMapsUrl =
    'https://www.google.com/maps/place/300+S+Dixon+Ave,+Cary,+NC+27511';

  return (
    <div id="contact" className={styles.contact}>
      <h1>Contact Us</h1>
      <p>
        <strong>Address: </strong>
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactLink}
        >
          300 S Dixon Ave, Cary, NC 27511
        </a>
      </p>
      <p>
        <strong>Phone: </strong>
        <a href="tel:19196694879" className={styles.contactLink}>
          +1 919-669-4879
        </a>{' '}
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

      <a
        href={`mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
        className={styles.contactLink}
      >
        <button type="button" className={styles.contactButton}>
          Send Email
        </button>
      </a>
    </div>
  );
};

export default Contact;
