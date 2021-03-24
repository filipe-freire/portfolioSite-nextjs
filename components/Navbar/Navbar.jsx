import Link from "next/link";
import ActiveLink from "../ActiveLink";
import styles from "./Navbar.module.scss";
import * as config from "../../config";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href='/'>
          <a>
            <h1 className={`${styles.logo} clrTransition`}>{config.COMPANY_NAME}</h1>
          </a>
        </Link>

        {/* Hamburguer Menu */}

        {/* Desktop Links */}
        <div className={styles.navLinksDesktop}>
          <ul>
            <li>
              <ActiveLink href='/' activeClassName='active'>
                <a className={`${styles.navLink} clrTransition`}>Home</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href='#' activeClassName='active'>
                <a className={`${styles.navLink} clrTransition`}>Blog</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href='#' activeClassName='active'>
                <a className={`${styles.navLink} clrTransition`}>About</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href='#' activeClassName='active'>
                <a className={`${styles.navLink} clrTransition`}>Contact</a>
              </ActiveLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
