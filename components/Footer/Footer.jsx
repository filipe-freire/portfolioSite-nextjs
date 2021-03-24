import styles from "./Footer.module.scss";
import * as config from "../../config";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      © <span>{config.COMPANY_NAME}</span> | {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
