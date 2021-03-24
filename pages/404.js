import Link from "next/link";
import styles from "./404.module.scss";

const NotFound = () => {
  return (
    <div className={styles.flexContainer}>
      <div>
        <h1>Oops...</h1>
        <h2>
          You're not supposed to be here!{" "}
          <span role='img' aria-label=''>
            👀
          </span>
        </h2>
        <Link href='/'>
          <a className={styles.btn}>Head home!</a>
        </Link>
      </div>
      <div className={styles.notFoundImage}>
        <img src='./404-img.png' alt='' />
      </div>
    </div>
  );
};

export default NotFound;
