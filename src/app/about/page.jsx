import Head from 'next/head';
import styles from './about.module.css';

export default function About() {
  return (
    <div className={styles.aboutContainer} id="about">
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about us" />
      </Head>
      <h1 className={styles.aboutTitle}>About Us </h1>
      <p className={styles.aboutDescription}>
        This is the about page where you can learn more about our company.
      </p>
    </div>
  );
}
