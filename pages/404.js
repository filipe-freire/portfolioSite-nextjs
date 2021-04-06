import Link from "next/link";
import styles from "../styles/404.module.scss";

const NotFound = () => {
  return (
    <>
      <h1 className={styles.title}>
        <span>Error 404</span> - Page Not Found
      </h1>
      <div className={styles.flexContainer}>
        <div className={styles.content}>
          <p className={styles.subTitle}>Oops...</p>
          <p className={styles.paragraph}>
            Looks like the page you requested got lost in the internet void!{" "}
            <span role="img" aria-label="">
              😱
            </span>
          </p>
          <Link href="/">
            <a className={styles.btn}>Head home!</a>
          </Link>
        </div>
        <div className={styles.notFoundImage}>
          <img src="./404-img.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default NotFound;
