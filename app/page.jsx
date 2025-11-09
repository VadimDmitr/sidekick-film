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
          content="video production company, video content creation, local videographer, independent film production, business video services, promotional video production, event videography, video marketing strategy, brand video production, affordable video production, professional video editing, commercial video services, video storytelling, corporate video production, digital video content, social media video content, video production Cary NC, video production Raleigh NC, video production prices, professional camera operator, video content strategy, video production packages, custom video production, short film production, music video production, training video production, real estate video production, product demo videos, company profile videos, video production team near me, video production studio rental, 4K video production, video production equipment rental, video production consultation, video marketing expert"
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
