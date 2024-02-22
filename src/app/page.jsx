import styles from './home.module.css';
import SidekickAd from './sidekickAd/page';
import VideoMuscle from './videoMuscle/page';
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
        <VideoMuscle />
        <SidekickAd />
        <VideoComponent />
        <Contact />
      </section>
    </>
  );
}
