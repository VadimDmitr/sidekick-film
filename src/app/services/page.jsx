import styles from './styles.module.css';

export default function Services() {
  return (
    <div className={styles.servicesContainer}>
      <h1 className={styles.serviceTitle}>Our Services</h1>
      <p className={styles.serviceDescription}>
        At SideKick Film Co., we are dedicated to bringing stories to life
        through the art of video production. Our team combines technical
        expertise with creative vision to produce high-quality videos that
        captivate and engage audiences. From concept to final cut, we offer a
        comprehensive suite of services to meet all your video needs.
      </p>
      <p className={styles.serviceDescription}>
        Whether you&apos;re looking to promote your brand, cover a special
        event, or produce educational content, our state-of-the-art equipment
        and skilled professionals are at your service. We understand the power
        of visual storytelling and strive to create content that not only looks
        great but also communicates your message effectively.
      </p>
      <p className={styles.serviceDescription}>
        Our services include corporate videos, commercial advertisements,
        documentary filmmaking, and more. We also specialize in dynamic
        interviews and cultural storytelling, ensuring that every project we
        take on is not just seen, but felt. With SideKick Film Co., your vision
        is our mission. Let us help you tell your story and leave a lasting
        impression on your audience.
      </p>
    </div>
  );
}
