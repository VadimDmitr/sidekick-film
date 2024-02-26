import styles from './home.module.css';
import VideoMuscle from './components/videoMuscle/page';
import SidekickAd from './components/sidekickAd/page';
import VideoComponent from './components/videoProjects/page';
import VideoTraffic from './components/videoTraffic/page';
import Contact from './components/contact/page';
import ServicesUpPage from './components/sevicesUpPage/page';

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
        <Contact />
      </section>
    </>
  );
}
