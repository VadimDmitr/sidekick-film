import Head from 'next/head';
import styles from './home.module.css';
import VideoFlag from './components/videoFlag/page';
import SidekickAd from './components/sidekickAd/page';
import VideoComponent from './components/videoProjects/page';
import ServicesUpPage from './components/servicesUpPage/page';
import VideoMountains from './components/videoMountains/page';
import ServicesDownPage from './components/servicesDownPage/page';
import Contact from './components/contact/page';

export default function Home() {
  return (
    <>
      <Head>
        <title>Our Services | Sidekick Media</title>
        <meta
          name="description"
          content="Sidekick Media offers professional video production services in the Triangle area, including Cary, Raleigh, Durham, Chapel Hill, and other cities in North Carolina. Get noticed with our high-quality creative video content."
        />
        <meta
          name="keywords"
          content="video production Cary, video production Raleigh, video production Durham, video production Chapel Hill, Triangle video production, professional video services North Carolina"
        />
      </Head>
      <div className={styles.backgroundImageContainer}>
        <div className={styles.textOverlay}>
          <h1 className={styles.welcomeTitle}>Do you feel invisible?</h1>
          <p className={styles.welcomeText}>Video will get you noticed</p>
        </div>
      </div>
      <section className={styles.section}>
        <SidekickAd />
        <VideoFlag />
        <VideoComponent />
        <ServicesUpPage />
        <VideoMountains />
        <ServicesDownPage />
        <Contact />
      </section>
    </>
  );
}
