import HeadComp from "../components/HeadComp";
import { motion } from "framer-motion";
import Button from "../components/Button/Button";

import styles from "../styles/Homepage.module.scss";

export default function Home() {
  return (
    <>
      <HeadComp title='Home'></HeadComp>
      <h1 className='hidden'>Filipe Freire - Homepage</h1>
      <motion.div
        className={styles.intro}
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
        <div className={styles.img}>
          <img src='/assets/img/illustrations/Work-from-home.svg' alt='' />
        </div>
        <motion.div
          className={styles.container}
          initial='hidden'
          animate='visible'
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
          <p className={styles.introText}>
            Hey there!{" "}
            <span role='img' aria-label=''>
              👋
            </span>
            <br />
            My name is <span className={styles.accent}>Filipe</span>, <br />
            I'm a<span className={styles.accent}> Web Developer!</span>
          </p>
          {/* <p>Welcome to my spot in the Internet!</p> */}
        </motion.div>
      </motion.div>
      {/* <div className={styles.servicesSection}> */}
      <div className={styles.servicesContainer}>
        <h2 className={styles.subTitle}>Services</h2>
        <div className={styles.flexContainer}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Responsive Web Design</h3>
            <p>
              Implementing web designs which render well on
              <span className='bold'> multiple devices </span>and screen sizes, assuring their
              quality <span className='bold'>no matter where they're viewed.</span> <br />
              <br />
              Did you know <span className='bold'>50% of worldwide internet</span> usage takes place
              on <span className='bold'>mobile devices</span>?
              <sup className='reference'>
                <a
                  href='https://www.thinkwithgoogle.com/intl/en-154/marketing-strategies/app-and-mobile/mobile-world/'
                  rel='noopener'
                >
                  [1]
                </a>
              </sup>
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Quality Front-End & Backend code</h3>
            <p>
              Managing the prospect of increased demand is no easy task.
              <br />
              <br />
              <span className='bold'>Enforcing best practices </span>
              regarding data structures, <span className='bold'>code readability</span> and the use
              of <span className='bold'>relevant frameworks</span> prevents code debt in the long
              run.
            </p>
            <br />
            <p>
              Let's face it, as much as we may love pasta,{" "}
              <span className='bold'>
                nobody likes{" "}
                <a
                  className={styles.link}
                  href='https://en.wikipedia.org/wiki/Spaghetti_code'
                  rel='noopener'
                >
                  spaghetti code
                </a>
              </span>
              !
            </p>
            <br />
            <br />
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Continuous learning and growth</h3>
            <p>Keeping up with the latest standards and techniques is a must!</p> <br />
            <br />
          </div>
        </div>
      </div>

      <p className={styles.text}>
        Thank you for visiting! <br />
        Feel free to explore and stay for as long as you want!
      </p>
      <Button href='/contact' text='get in touch!' />
    </>
  );
}
