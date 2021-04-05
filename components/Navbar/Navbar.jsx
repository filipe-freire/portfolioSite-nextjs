import { useState } from "react";
import Link from "next/link";
import ActiveLink from "../ActiveLink";
import * as config from "../../config";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/">
          <a className={`${styles.logo} clrTransition`}>
            {config.COMPANY_NAME}
          </a>
        </Link>

        {/* Hamburguer Menu */}
        <div
          className={`${styles.hamburguer} ${isOpen && styles.hamburguerOpen}`}
        >
          <div className={styles.navBtnContainer} onClick={handleClick}>
            <div className={styles.navBtn}></div>
          </div>
          <div className={styles.navLinks}>
            <Link href="/">
              <a onClick={handleClick}>Home</a>
            </Link>
            <Link href="/blog">
              <a onClick={handleClick}>Blog</a>
            </Link>
            <Link href="/about">
              <a onClick={handleClick}>About</a>
            </Link>
            <Link href="/contact">
              <a onClick={handleClick}>Contact</a>
            </Link>
          </div>
        </div>

        {/* Desktop Links */}
        <div className={styles.navLinksDesktop}>
          <ul>
            <li>
              <ActiveLink href="/" activeClassName="active">
                <a className={`${styles.navLink} clrTransition`}>Home</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/projects" activeClassName="active">
                <a className={`${styles.navLink} clrTransition`}>Projects</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/about" activeClassName="active">
                <a className={`${styles.navLink} clrTransition`}>About</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/contact" activeClassName="active">
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
