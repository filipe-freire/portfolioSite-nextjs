import styles from "./Button.module.scss";
import Link from "next/link";

export default function Button({ href, text, noOpener, blank }) {
  return (
    <Link href={href}>
      <a
        className={styles.btn}
        target={`${(blank && "_blank") || ""}`}
        rel={`${(noOpener && "noopener") || ""}`}
      >
        {text}
      </a>
    </Link>
  );
}
