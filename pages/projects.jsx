import HeadComp from "../components/HeadComp";
import { motion } from "framer-motion";
import styles from "../styles/Projects.module.scss";

const projects = () => {
  return (
    <>
      <HeadComp title="Contact"></HeadComp>

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
        <div className={styles.projectCard}>
          <div>
            <div>
              <h1 className={styles.projectTitle}>JavaScripting, The Game</h1>
              <p className={styles.projectInfo}>
                Built using JavaScript Object Oriented Programming architecture
                and HTML canvas.
              </p>
            </div>
            <div className={styles.projectImg}>
              <img src="/img/JavaScripting.webp" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.projectCard}>
          <div>
            <div>
              <h1 className={styles.projectTitle}>BandTracker</h1>
              <p className={styles.projectInfo}>
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
        <div className={styles.projectCard}>
          <div>
            <div>
              <h1 className={styles.projectTitle}>Vanilla Jobs</h1>
              <p className={styles.projectInfo}>
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
