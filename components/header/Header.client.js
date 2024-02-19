import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.mainLogo}>
        <>
          <Image
            src="/headerLogo1.webp"
            alt="Sidekick Logo"
            width={170}
            height={70}
          />
        </>
      </Link>
      {/* <div className={styles.marqueeContainer}>
        <a href="tel:+19842224153" className={styles.marquee}>
          CALL US 24/7 +1 984-222-4153
        </a>
      </div> */}
      <nav className={styles.nav}>
        {/* <Link href="/" className={styles.navlink}>
          Home
        </Link> */}
        {/* <a href="#contact" className={styles.navlink}>
          Contact
        </a> */}
        {/* <a href="#about" className={styles.navlink}>
          About
        </a> */}
        <a href="#ourWork" className={styles.navlink}>
          Projects
        </a>
        <a href="#services" className={styles.navlink}>
          Marketing
        </a>
        <Link href="#contact" className={styles.navlink}>
          Contacts
        </Link>
      </nav>
      {/* <button className={styles.menubutton}>Menu</button> */}
    </header>
  );
};

export default Header;
