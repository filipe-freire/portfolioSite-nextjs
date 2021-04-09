import HeadComp from "../components/HeadComp";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Projects.module.scss";
import { useState } from "react";

const projectsArr = [
  {
    title: "JavaScripting, The Game",
    description: `Built using JavaScript Object Oriented Programming architecture
and HTML canvas.`,
    link: "https://javascriptin.netlify.app/",
    image: "assets/img/javaScriptin-gif-1.gif"
  },
  {
    title: "BandTracker",
    description: `Allows the user to search for his favorite bands/artists and
    check whether they're performing and where. Built using NodeJS,
    ExpressJS, Handlebars and API integrations.`,
    link: "https://bandtrackerapp.herokuapp.com/",
    image: "assets/img/bandtracker-demo.gif"
  },
  {
    title: "Vanilla Jobs",
    description: `A Web Develompent job search Single Page Application (SPA) using
    React and REST API. Built mobile first using SCSS.`,
    link: "https://vanilla-jobs.netlify.app/",
    image: "assets/img/vanilla-jobs-demo.gif"
  },
  {
    title: "IronHack Class Timer",
    description: `A timer built with HTML | CSS | JavaScript in order to properly time breaks during Ironhack Remote Bootcamp's!`,
    link: "https://filipe-freire.github.io/ironhack-class-timer/",
    image: "assets/img/ih-timer.gif"
  }
];

const Projects = () => {
  const [count, setCount] = useState(0);
  const [cardPosition, setcardPosition] = useState(300);

  function handleClick(e) {
    if (e.currentTarget.id === "btnLeft") {
      setcardPosition(-300);
      return !count ? setCount(projectsArr.length - 1) : setCount(count - 1);
    } else {
      setcardPosition(300);
      return count === projectsArr.length - 1 ? setCount(0) : setCount(count + 1);
    }
  }

  return (
    <>
      <HeadComp title='Contact'></HeadComp>
      <motion.div
        className={styles.container}
        initial='hidden'
        animate='visible'
        exit={{ opacity: 0 }}
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.2
            }
          }
        }}
      >
        <div className={styles.contactLayout}>
          <h1 className={styles.title}>
            My Projects{" "}
            <span role='img' aria-label=''>
              💻
            </span>
          </h1>
        </div>
        <div className={styles.flexContainer}>
          <button id='btnLeft' onClick={e => handleClick(e)} className={styles.btn}>
            <img src='/assets/img/arrow.svg' alt='' />
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
            id='btnRight'
            onClick={e => handleClick(e)}
            className={`${styles.btn} ${styles.right}`}
          >
            <img src='/assets/img/arrow.svg' alt='' />
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
              transition: { duration: 0.2 }
            }}
          >
            <div>
              <div>
                <h1 className={styles.projectTitle}>{projectsArr[count].title}</h1>
                <p className={styles.projectInfo}>{projectsArr[count].description}</p>
              </div>
              <a href={projectsArr[count].link} className={styles.link} target='_blank'>
                <div className={styles.projectImg}>
                  <img src={projectsArr[count].image} alt='' />
                </div>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Projects;
