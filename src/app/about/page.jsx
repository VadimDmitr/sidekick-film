import Head from 'next/head';
import styles from './styles.module.css';

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about us" />
      </Head>
      <h1>About Us</h1>
      <p>This is the about page where you can learn more about our company.</p>
    </div>
  );
}
