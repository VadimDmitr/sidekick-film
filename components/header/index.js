import styles from './Header.module.css'
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <nav className={styles.nav}>

        <Link href="/" className={styles.navlink}>
          Home
        </Link>
        <Link href="/about" className={styles.navlink}>
          About
        </Link>
        <Link href="/services" className={styles.navlink}>
          Services
        </Link>
        <Link href="/contact" className={styles.navlink}>
          Contact
        </Link>
      </nav>
      <button className={styles.menubutton}>Menu</button>
    </header>
  );
};

export default Header;