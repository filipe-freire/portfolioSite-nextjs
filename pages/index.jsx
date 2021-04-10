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
          <p></p>
          <p>Welcome to my spot in the Internet!</p>
        </motion.div>
      </motion.div>
      {/* <div className={styles.servicesSection}> */}
      <div className={styles.servicesContainer}>
        <h2 className={styles.subTitle}>Services</h2>
        <div className={styles.flexContainer}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Responsive Web Design</h3>
            Implementing web designs which render well on multiple devices and screen sizes,
            assuring its quality no matter where it's viewed. <br />
            <br />
            Did you know 50% of worldwide internet usage takes place on mobile devices?
            <sup className='reference'>
              <a
                href='https://www.thinkwithgoogle.com/intl/en-154/marketing-strategies/app-and-mobile/mobile-world/'
                rel='noopener'
              >
                [1]
              </a>
            </sup>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Quality Front-End & Backend code</h3>
            Enabling growth by writing quality Front-End & Backend code. <br />
            <br />
            Let's face it, as much as we may love pasta, nobody likes spaghetti code!
            <br />
            <br />
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Continuous learning and growth</h3>
            Managing the prospect of increased demand is no easy task, but enforcing best practices
            regarding data architecture, code readability and the use of relevant tech/frameworks
            prevents code dept in the long run. <br />
            <br />
            Keeping up with the latest standards and techniques is a must! <br />
            <br />
          </div>
        </div>
      </div>
      {/* <h2 className={styles.subTitle}>Hobbies</h2> */}

      <p className={styles.text}>
        Thank you for visiting! <br />
        Feel free to explore and stay for as long as you want!
      </p>
      <Button href='/contact' text='get in touch!' />
    </>
  );
}
