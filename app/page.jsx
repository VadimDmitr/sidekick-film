import styles from './home.module.css';
import VideoMuscle from './components/videoMuscle/page';
import SidekickAd from './components/sidekickAd/page';
import VideoComponent from './components/videoProjects/page';
import ServicesUpPage from './components/servicesUpPage/page';
import VideoTraffic from './components/videoTraffic/page';
import ServicesDownPage from './components/servicesDownPage/page';
import Contact from './components/contact/page';

export default function Home() {
  return (
    <>
      <div className={styles.backgroundImageContainer}>
        <div className={styles.textOverlay}>
          <h1 className={styles.welcomeTitle}>Do you feel invisible?</h1>
          <p className={styles.welcomeText}>Video will get you noticed.</p>
        </div>
      </div>
      <section className={styles.section}>
        <SidekickAd />
        <VideoMuscle />
        <VideoComponent />
        <ServicesUpPage />
        <VideoTraffic />
        <ServicesDownPage />
        <Contact />
      </section>
    </>
  );
}
