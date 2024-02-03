import styles from './home.module.css';
import About from './about/page';
import Services from './services/page';
import Contact from './contact/page';
import VideoComponent from './video/page';

export default function Home() {
  return (
    <>
      <div className={styles.backgroundImageContainer}>
        <h1 className={styles.welcomeTitle}>Welcome to Our Website</h1>
        <p className={styles.welcomeText}>
          Maybe we must remove the title and add something here
        </p>
      </div>
      <section className={styles.section}>
        <About />
        <Services />
        <VideoComponent />
        <Contact />
      </section>
    </>
  );
}
