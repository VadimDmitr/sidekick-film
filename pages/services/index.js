import Head from 'next/head';
import styles from './services.module.css'; // This will be your CSS module for styling

export default function Services() {
  return (
    <div className={styles.servicesContainer}>
      <Head>
        <title>Our Services</title>
        <meta name="description" content="Explore our services" />
      </Head>
      <h1>Our Services</h1>
      <div className={styles.serviceItem}>Service 1</div>
      <div className={styles.serviceItem}>Service 2</div>
      <div className={styles.serviceItem}>Service 3</div>
      {/* Add more services as needed */}
    </div>
  );
}