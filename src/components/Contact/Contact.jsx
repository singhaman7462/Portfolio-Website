import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css"

function Contact() {
  return (
    <footer className={styles.container} id='contact'>
       <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
        </div> 
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt='Email Icon'></img>
                <a href='mailto:singh03aman2103@gmail.com'>singh03aman2103@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt='Linkedin Icon'></img>
                <a href='Linked in url'>Linkedin Profile</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt='GitHub Icon'></img>
                <a href='GitHub url'>GitHub Profile</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact