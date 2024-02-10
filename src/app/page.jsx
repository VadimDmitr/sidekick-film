import styles from './home.module.css';
import About from './about/page';
import Services from './services/page';
import Contact from './contact/page';
import VideoComponent from './video/page';

export default function Home() {
  return (
    <>
      <div className={styles.backgroundImageContainer}>
        <div className={styles.textOverlay}>
          <h1 className={styles.welcomeTitle}>
            Video motivates your customers
          </h1>
          <p className={styles.welcomeText}>Let Sidekick tell your story.</p>
        </div>
      </div>
      <section className={styles.section}>
        <VideoComponent />
        <Services />
        <About />
        <Contact />
      </section>
    </>
  );
}
