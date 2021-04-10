import HeadComp from "../components/HeadComp";
import { motion } from "framer-motion";
import Button from "../components/Button/Button";

import styles from "../styles/Homepage.module.scss";

export default function Home() {
  return (
    <>
      <HeadComp title="Home"></HeadComp>
      <h1 className="hidden">Filipe Freire - Homepage</h1>
      <motion.div
        className={styles.intro}
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
        <div className={styles.img}>
          <img src="/assets/img/illustrations/Work-from-home.png" alt="" />
        </div>
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
          <p className={styles.introText}>
            Hey there!{" "}
            <span role="img" aria-label="">
              👋
            </span>
            <br />
            My name is <span className={styles.accent}>Filipe</span>, <br />
            I'm a<span className={styles.accent}> Web Developer!</span>
          </p>
          {/* <p>Welcome to my spot in the Internet!</p> */}
        </motion.div>
      </motion.div>
      <motion.div
        className={styles.servicesContainer}
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
        <h2 className={styles.subTitle}>Services</h2>
        <div className={styles.flexContainer}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Responsive Web Design</h3>
            <p>
              Implementing web designs which render well on
              <strong> multiple devices </strong>and screen sizes, assuring
              their quality <strong>no matter where they're viewed.</strong>{" "}
              <br />
              <br />
              Did you know <strong>50% of worldwide internet</strong> usage
              takes place on <strong>mobile devices</strong>?
              <sup className="reference">
                <a
                  href="https://www.thinkwithgoogle.com/intl/en-154/marketing-strategies/app-and-mobile/mobile-world/"
                  rel="noopener"
                >
                  [1]
                </a>
              </sup>
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              Quality Front-End & Backend code
            </h3>
            <p>
              Managing the prospect of increased demand is no easy task.
              <br />
              <br />
              <strong>Enforcing best practices </strong>
              regarding data structures, <strong>code readability</strong> and
              the use of <strong>relevant frameworks</strong> prevents code debt
              in the long run.
            </p>
            <br />
            <p>
              Let's face it, as much as we may love pasta,{" "}
              <strong>
                nobody likes{" "}
                <a
                  className={styles.link}
                  href="https://en.wikipedia.org/wiki/Spaghetti_code"
                  rel="noopener"
                >
                  spaghetti code
                </a>
                ! 🍝
              </strong>
            </p>
            <br />
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              Website Performance Optimization
            </h3>
            <p>
              ⌛ Did you know that around <strong>1 in every 2 users </strong>
              leaves a website if it takes more than <strong>3 seconds </strong>
              to load?
              <sup className="reference">
                <a href="https://www.thinkwithgoogle.com/intl/en-ca/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/">
                  [2]
                </a>
              </sup>{" "}
              <br />
              <br />
              <strong>Optimizing load times</strong> and overall performance is
              therefore of utmost importance to{" "}
              <strong>provide the best experience</strong> to users.
            </p>
            <br />
            <br />
          </div>
        </div>
      </motion.div>
      <div className={styles.contactCta}>
        <p className={styles.subtitleMobile}>Thank you for visiting!</p>
        <div className={styles.flexContainerCta}>
          <div className={styles.img}>
            <img src="/assets/img/illustrations/Messaging.svg" alt="" />
          </div>
          <div className={styles.content}>
            <p className={styles.subtitle}>Thank you for visiting!</p>
            <p className={styles.text}>
              Want to have your very own corner in the internet? Well you're in
              the right place!
            </p>
            <Button href="/contact" text="get in touch!" />
          </div>
        </div>
      </div>
    </>
  );
}
