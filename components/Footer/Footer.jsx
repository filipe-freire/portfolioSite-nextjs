import Link from "next/link";
import * as config from "../../config";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      ©{" "}
      <span className="active clrTransition">
        <Link href="/">{config.COMPANY_NAME}</Link>
      </span>{" "}
      | {new Date().getFullYear()}
    </footer>
  );
}
