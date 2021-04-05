import styles from "./Button.module.scss";
import Link from "next/link";

const Button = ({ href, text }) => {
  return (
    <>
      <Link href={href}>
        <a className={styles.btn}>{text}</a>
      </Link>
    </>
  );
};

export default Button;
