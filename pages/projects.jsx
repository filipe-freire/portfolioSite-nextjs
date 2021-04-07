import HeadComp from "../components/HeadComp";
import { motion } from "framer-motion";
import styles from "../styles/Projects.module.scss";

const projects = () => {
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

      {/* <motion.h1>another hey!</motion.h1> */}
      <motion.div
        className={styles.container}
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
        <div className={styles.contactLayout}>
          <h1 className={styles.title}>
            My Projects{" "}
            <span role="img" aria-label="">
              💻
            </span>
          </h1>
          {/* <p className={styles.paragraph}>
            I'm usually active in the following social media platforms ⬇️
          </p> */}
        </div>
        <div>
          <div>
            <div>
              <h1>JavaScripting, The Game</h1>
              <p>
                Built using JavaScript Object Oriented Programming architecture
                and HTML canvas.
              </p>
            </div>
            <div className={styles.projectImg}>
              <img src="/img/JavaScripting.webp" alt="" />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <h1>BandTracker</h1>
              <p>
                Allows the user to search for his favorite bands/artists and
                check whether they're performing and where. Built using NodeJS,
                ExpressJS, Handlebars and API integrations.
              </p>
            </div>
            <div className={styles.projectImg}>
              <img src="/img/Bandtracker.webp" alt="" />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <h1>Vanilla Jobs</h1>
              <p>
                A Web Develompent job search single page application (SPA) using
                React and REST API. Built mobile first using SCSS.
              </p>
            </div>
            <div className={styles.projectImg}>
              <img src="/img/Vanilla-Jobs.webp" alt="" />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default projects;
