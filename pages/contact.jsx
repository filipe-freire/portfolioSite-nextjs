import styles from "../styles/Contact.module.scss";
import HeadComp from "../components/HeadComp";
import { motion } from "framer-motion";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <HeadComp title="Contact">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
          integrity="sha256-46qynGAkLSFpVbEBog43gvNhfrOj+BmwXdxFgVK/Kvc="
          crossorigin="anonymous"
        />
      </HeadComp>
      <motion.div
        key="contact"
        className={styles.contactLayout}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0 }}
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.2,
            },
          },
        }}
      >
        <div className={styles.flexContainer}>
          <div className={styles.links}>
            <h1 className={styles.title}>Reach out! ✉️</h1>
            <div className={styles.messageImgMobile}>
              <Image
                src="/assets/img/illustrations/Social-Media-Notifications.svg"
                alt="Social Media"
                width={400}
                height={300}
              />
              {/* <img
                src="/assets/img/illustrations/Social-Media-Notifications.svg"
                alt=""
              /> */}
            </div>
            <p className={styles.paragraph}>
              Whether to talk business, propose a collaboration or just speak
              about the latest tech trends, feel free to send me a message! I'm
              always open to connect.
            </p>

            <p className={styles.paragraph}>
              {/* I'm usually active in the following social media platforms. ⬇️ */}
              Places where you can find me:
            </p>
            <ul className={styles.socialList}>
              <li>
                <a
                  className={styles.socialListItemTwitter}
                  href="https://twitter.com/Filipe__Freire"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="fab fa-twitter fa-2x" />
                </a>
              </li>
              <li>
                <a
                  className={styles.socialListItemGithub}
                  href="https://github.com/filipe-freire/"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="fab fa-github fa-2x" />
                </a>
              </li>
              <li>
                <a
                  className={styles.socialListItemLinkedIn}
                  href="https://linkedin.com/in/filiperpfreire/"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="fab fa-linkedin fa-2x" />
                </a>
              </li>
              <li>
                <a
                  className={styles.socialListItemInstagram}
                  href="https://www.instagram.com/filipe__freire/"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="fab fa-instagram fa-2x" />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.messageImg}>
            <img
              src="/assets/img/illustrations/Social-Media-Notifications.svg"
              alt=""
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
