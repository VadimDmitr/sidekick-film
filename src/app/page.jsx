import Link from 'next/link';
import styles from './page.module.css';
import Services from '../../pages/services';

export default function Home() {
  return (
    <>
      <div className={styles.backgroundImageContainer}>
        <h1 className={styles.welcomeTitle}>Welcome to Our Website</h1>
      </div>
      <section>
        <Services />
        {/* <Link href="/services" className={styles.serviceLink}>Services</Link> */}
        {/*additional services with corresponding links */}
      </section>
      <section id="about" className={styles.section}>
        <h2>About Us</h2>
        {/* Content about the company */}
      </section>
      {/* Sections for additional content */}
      {/* ... */}
    </>
  );
}
