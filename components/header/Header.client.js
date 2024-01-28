import styles from './Header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.mainLogo}>
        Logo
      </Link>
      <nav className={styles.nav}>
        {/* <Link href="/" className={styles.navlink}>
          Home
        </Link> */}
        <a href="#services" className={styles.navlink}>
          Services
        </a>
        <a href="#about" className={styles.navlink}>
          About
        </a>
        {/* <a href="#contact" className={styles.navlink}>
          Contact
        </a> */}
        <Link href="/contact" className={styles.navlink}>
          Contact
        </Link>
      </nav>
      <button className={styles.menubutton}>Menu</button>
    </header>
  );
};

export default Header;
