import HeadComp from "../components/HeadComp";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Projects.module.scss";
import { useState } from "react";
import Image from "next/image";

const projectsArr = [
  {
    title: "JavaScripting, The Game",
    description: [
      `- Built using JavaScript Object Oriented Programming architecture and HTML canvas.`,
      `- Developed during Ironhack's Full Stack Web Development 1st module project week.`,
      `- Winner of the "Most Creative Game" award! 🏆`,
    ],
    link: "https://javascriptin.netlify.app/",
    video: "/assets/videos/javaScriptin-demo.webm",
  },
  {
    title: "BandTracker",
    description: [
      `- Allows the user to search for his favorite bands/artists and
    check whether they're performing and where. Built using NodeJS,
    ExpressJS, Handlebars and API integrations.`,
    ],
    link: "https://bandtrackerapp.herokuapp.com/",
    video: "/assets/videos/bandtracker-demo.webm",
  },
  {
    title: "Vanilla Jobs",
    description: [
      `- A Web Develompent job search Single Page Application (SPA) using
    React and REST API. Built mobile first using SCSS.`,
    ],
    link: "https://vanilla-jobs.netlify.app/",
    video: "/assets/videos/vanilla-jobs-demo.webm",
  },
  {
    title: "IronHack Class Timer",
    description: [
      `- A timer built with HTML | CSS | JavaScript in order to properly time breaks during Ironhack Remote Bootcamp's!`,
    ],
    link: "https://filipe-freire.github.io/ironhack-class-timer/",
    video: "/assets/videos/ih-timer.webm",
  },
];

const Projects = () => {
  const [count, setCount] = useState(0);
  const [cardPosition, setcardPosition] = useState(250);

  function handleClick(e) {
    if (e.currentTarget.id === "btnLeft") {
      setcardPosition(-250);
      return !count ? setCount(projectsArr.length - 1) : setCount(count - 1);
    } else {
      setcardPosition(250);
      return count === projectsArr.length - 1
        ? setCount(0)
        : setCount(count + 1);
    }
  }

  return (
    <>
      <HeadComp title="Contact"></HeadComp>
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
        </div>
        <div className={styles.flexContainer}>
          <button
            id="btnLeft"
            onClick={(e) => handleClick(e)}
            className={styles.btn}
            tabindex="0"
            aria-label="Previous Project"
          >
            <Image src="/assets/img/arrow.svg" alt="" width={35} height={35} />
          </button>
          <div
            onClick={() => setCount(0)}
            className={`${styles.projectNavBtn} ${count === 0 && styles.line}`}
          ></div>
          <div
            onClick={() => setCount(1)}
            className={`${styles.projectNavBtn} ${count === 1 && styles.line}`}
          ></div>
          <div
            onClick={() => setCount(2)}
            className={`${styles.projectNavBtn} ${count === 2 && styles.line}`}
          ></div>
          <div
            onClick={() => setCount(3)}
            className={`${styles.projectNavBtn} ${count === 3 && styles.line}`}
          ></div>
          <button
            id="btnRight"
            onClick={(e) => handleClick(e)}
            className={`${styles.btn} ${styles.right}`}
            tabindex="0"
            aria-label="Next Project"
          >
            <Image src="/assets/img/arrow.svg" alt="" width={35} height={35} />
          </button>
        </div>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className={styles.projectCard}
            key={count}
            initial={{ x: cardPosition, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 0.4,
              transition: { duration: 0.2 },
            }}
          >
            <div>
              <div>
                <a
                  href={projectsArr[count].link}
                  className={styles.link}
                  target="_blank"
                  rel="noopener"
                >
                  <h1 className={styles.projectTitle}>
                    {projectsArr[count].title}
                  </h1>
                </a>
              </div>

              <div className={styles.projectImg}>
                <video
                  autoPlay
                  muted
                  className="video"
                  width="420"
                  height="240"
                  controls
                >
                  <source
                    src={projectsArr[count].video}
                    type="video/webm"
                  ></source>
                  Your browser does not support the video tag.
                </video>
                {/* <Image
                    src={projectsArr[count].image}
                    alt=""
                    width={495}
                    height={295}
                  /> */}
              </div>

              <h2 className={styles.summary}>Summary</h2>
              {projectsArr[count].description.map((p, i) => (
                <p key={i} className={styles.projectInfo}>
                  {p}
                </p>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Projects;
