import HeadComp from "../components/HeadComp";
import { motion } from "framer-motion";
import Button from "../components/Button/Button";

import styles from "../styles/Homepage.module.scss";

export default function Home() {
  return (
    <>
      <HeadComp title="Home"></HeadComp>
      <motion.div
        className={styles.container}
        initial="hidden"
        animate="visible"
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
        <h1 className={styles.title}>
          Hey there!{" "}
          <span role="img" aria-label="">
            👋
          </span>
        </h1>
        <h2 className={styles.subTitle}>
          Welcome to my little spot in the Internet!
        </h2>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum veniam
          necessitatibus rem nemo cupiditate quidem.
        </p>

        <Button href="/contact" text="get in touch!" />
      </motion.div>
    </>
  );
}
