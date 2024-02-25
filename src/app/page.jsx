import styles from './home.module.css';
import VideoMuscle from './videoMuscle/page';
import SidekickAd from './sidekickAd/page';
import VideoComponent from './videoProjects/page';
import ServicesUpPage from './sevicesUpPage/page';
import ServicesDownPage from './servicesDownPage/page';
import VideoTraffic from './videoTraffic/page';
import Contact from './contact/page';

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
        <ServicesUpPage />
        <VideoTraffic />
        <ServicesDownPage />
        <Contact />
      </section>
    </>
  );
}
