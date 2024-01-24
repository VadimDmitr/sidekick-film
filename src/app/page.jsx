import styles from './home.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.backgroundImageContainer}>
        <h1 className={styles.welcomeTitle}>Welcome to Our Website</h1>
      </div>
      <section id="about" className={styles.section}>
        <h2>About Us</h2>
      </section>
    </>
  );
}
