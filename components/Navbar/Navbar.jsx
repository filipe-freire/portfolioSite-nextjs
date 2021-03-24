import Link from "next/link";
import ActiveLink from "../ActiveLink";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href='/'>
          <a>
            <h1 className={styles.logo}>Filipe Freire</h1>
          </a>
        </Link>

        {/* Hamburguer Menu */}

        {/* Desktop Links */}
        <div className={styles.navLinksDesktop}>
          <ul>
            <li>
              <ActiveLink href='/' activeClassName='active'>
                <a className={styles.navLink}>Home</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href='#' activeClassName='active'>
                <a className={styles.navLink}>Blog</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href='#' activeClassName='active'>
                <a className={styles.navLink}>About</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href='#' activeClassName='active'>
                <a className={styles.navLink}>Contact</a>
              </ActiveLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
