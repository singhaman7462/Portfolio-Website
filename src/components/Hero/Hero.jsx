import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"
function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi I am Aman</h1>
        <p className={styles.description}>I am a MERN Stack Developer.Reach out if you'd like to learn more.</p>
        <a className={styles.contactBtn} href="mailto:singh03aman2103@gmail.com">Contact Me</a>

      </div>
      <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="My Image"></img>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
}

export default Hero;
