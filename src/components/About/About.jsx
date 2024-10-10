import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css"

function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="me sitting with a laptop"
          className={styles.aboutImage}
        ></img>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor"></img>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I am a frontend developer with experience in React ,HTML ,CSS ,Javascript and SAP UI5.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server"></img>
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I am a backend developer with experience in Node.js and Express.js.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Designer"></img>
            <div className={styles.aboutItemText}>
              <h3>DSA Enthusiast</h3>
              <p>
                I am a Data Structures and Algorithms enthusiast with more than 1000 problems solved.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
