import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  );
}
