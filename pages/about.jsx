import HeadComp from "../components/HeadComp";
import styles from "../styles/About.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const helloWorldInstances = [
  { src: "/assets/flags/pt.png", text: "Olá Mundo!" },
  { src: "/assets/flags/gb.png", text: "Hello World!" },
  { src: "/assets/flags/es.png", text: "Hola Mundo!" },
  { src: "/assets/flags/se.png", text: "Hej världen!" },
  { src: "/assets/flags/de.png", text: "Hallo Welt!" },
  { src: "/assets/flags/ru.png", text: "Привет мир!" }
];

const tools = [
  { name: "HTML", imgSrc: "/assets/img/tools/html.svg" },
  { name: "CSS", imgSrc: "/assets/img/tools/css.svg" },
  { name: "JavaScript", imgSrc: "/assets/img/tools/javascript.svg" },
  { name: "TypeScript", imgSrc: "/assets/img/tools/TypeScript.png" },
  { name: "NodeJS", imgSrc: "/assets/img/tools/nodejs.png" },
  { name: "MongoDB", imgSrc: "/assets/img/tools/mongodb.svg" },
  { name: "React", imgSrc: "/assets/img/tools/react.png" },
  { name: "NextJS", imgSrc: "/assets/img/tools/Nextjs-logo.svg" }
];

const About = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      return count === helloWorldInstances.length - 1 ? setCount(0) : setCount(count + 1);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  return (
    <>
      <HeadComp title="About"></HeadComp>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <AnimatePresence exitBeforeEnter>
            <motion.img
              className={styles.flagImg}
              key={helloWorldInstances[count].src}
              src={helloWorldInstances[count].src}
              width="40"
              height="30"
              alt=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.h1
              key={helloWorldInstances[count].text}
              className={styles.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {helloWorldInstances[count].text}
            </motion.h1>
          </AnimatePresence>
        </div>

        <div className={styles.flexContainer}>
          <div className={styles.aboutContainer}>
            <Image
              src="/assets/img/profile-pic.webp"
              alt="Filipe Freire's profile"
              width={250}
              height={240}
            />
          </div>
          <div className={styles.infoContainer}>
            <p className={styles.paragraph}>
              🙋🏻‍♂️ Hey, I'm Filipe, a Web Developer with a background in music & nutrition, passionate
              about music, javascript, learning new things and improving people's lives through
              technology.
            </p>
            <br />
            <p className={styles.paragraph}>
              👨‍💻 Transitioned into the field of Web Development due to its fast-paced environment
              and immense learning opportunities.
            </p>
          </div>
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
      </div>
    </>
  );
};

export default About;
