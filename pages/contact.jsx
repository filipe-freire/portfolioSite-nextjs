import styles from "../styles/Contact.module.scss";
import HeadComp from "../components/HeadComp";

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
      <div className={styles.contactLayout}>
        <h1 className={styles.title}>
          Reach out!{" "}
          <span role="img" aria-label="">
            ✉️
          </span>
        </h1>
        <p className={styles.paragraph}>
          I'm usually active in the following social media platforms:
        </p>
        <ul className={styles.socialList}>
          <li>
            <a
              className={styles.socialListItemTwitter}
              href="https://twitter.com/Filipe__Freire"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter fa-2x" />
            </a>
          </li>
          <li className="social-list__item">
            <a
              className={styles.socialListItemGithub}
              href="https://github.com/filipe-freire/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github fa-2x" />
            </a>
          </li>
          <li className="social-list__item">
            <a
              className={styles.socialListItemLinkedIn}
              href="https://linkedin.com/in/filiperpfreire/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin fa-2x" />
            </a>
          </li>
          <li className="social-list__item">
            <a
              className={styles.socialListItemInstagram}
              href="https://www.instagram.com/filipe__freire/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram fa-2x" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contact;
