import styles from './home.module.css';
import About from './about/page';
import Services from './services/page';
import Contact from './contact/page';

export default function Home() {
  return (
    <>
      <div className={styles.backgroundImageContainer}>
        <h1 className={styles.welcomeTitle}>Welcome to Our Website</h1>
      </div>
      <section id="about" className={styles.section}>
        <Services />
        <About />
        <Contact />
      </section>
    </>
  );
}
