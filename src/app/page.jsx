import styles from './home.module.css';
import SidekickAd from './about/page';
import Services from './service/page';
import Contact from './contact/page';
import VideoComponent from './video/page';

export default function Home() {
  return (
    <>
      <div className={styles.backgroundImageContainer}>
        <div className={styles.textOverlay}>
          <h1 className={styles.welcomeTitle}>Are you invisible?</h1>
          <p className={styles.welcomeText}>Video will get you noticed.</p>
        </div>
      </div>
      <section className={styles.section}>
        <Services />
        <SidekickAd />
        <VideoComponent />
        <Contact />
      </section>
    </>
  );
}
