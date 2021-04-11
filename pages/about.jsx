import HeadComp from "../components/HeadComp";
import { motion } from "framer-motion";
import styles from "../styles/About.module.scss";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

const helloWorldInstances = [
  "🇵🇹 Olá Mundo!",
  "🇬🇧 Hello World!",
  "🇪🇸 Hola Mundo!",
  "🇸🇪 Hej världen!",
  "🇩🇪 Hallo Welt!",
  "🇷🇺 Привет мир!",
];

const tools = [
  { name: "HTML", imgSrc: "/assets/img/tools/html.svg" },
  { name: "CSS", imgSrc: "/assets/img/tools/css.svg" },
  { name: "JavaScript", imgSrc: "/assets/img/tools/javascript.svg" },
  { name: "TypeScript", imgSrc: "/assets/img/tools/TypeScript.png" },
  { name: "NodeJS", imgSrc: "/assets/img/tools/nodejs.png" },
  { name: "MongoDB", imgSrc: "/assets/img/tools/mongodb.svg" },
  { name: "React", imgSrc: "/assets/img/tools/react.png" },
  { name: "NextJS", imgSrc: "/assets/img/tools/Nextjs-logo.svg" },
];

const About = () => {
  const [count, setCount] = useState(0);

  function changeLang() {
    setTimeout(() => {
      return count === helloWorldInstances.length - 1
        ? setCount(0)
        : setCount(count + 1);
    }, 3000);
  }

  return (
    <>
      <HeadComp title="About"></HeadComp>
      <motion.div
        key="about"
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
        <AnimatePresence exitBeforeEnter>
          <motion.h1
            className={styles.title}
            key={count}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.2 },
            }}
            onLoad={changeLang()}
          >
            {helloWorldInstances[count]}
          </motion.h1>
        </AnimatePresence>
        <div className={styles.flexContainer}>
          <div className={styles.aboutContainer}>
            <Image
              src="/assets/img/profile-pic.jpg"
              alt="Filipe Freire's profile"
              width={250}
              height={240}
            />
          </div>
          <motion.div className={styles.infoContainer}>
            <p className={styles.paragraph}>
              🙋🏻‍♂️ Hey, I'm Filipe, a Web Developer with a background in music &
              nutrition, passionate about music, javascript, learning new things
              and improving people's lives through technology.
            </p>
            <br />
            <p className={styles.paragraph}>
              👨‍💻 Transitioned into the field of Web Development due to its
              fast-paced environment and immense learning opportunities.
            </p>
          </motion.div>
        </div>
        <p className={styles.toolbelt}>🛠 Toolbelt:</p>
        <div className={styles.tools}>
          {tools.map((tool, i) => (
            <Image
              key={i}
              className={styles.tool}
              src={tool.imgSrc}
              alt={tool.name}
              width={65}
              height={65}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default About;
