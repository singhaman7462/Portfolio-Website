import React from 'react'
import skills from "../../data/skills.json"
import { getImageUrl } from '../../utils'
import history from "../../data/history.json"
import styles from "./Experience.module.css"
function Experience() {
  return (
   <section id="experience" className={styles.container}>
       <h2 className={styles.title}>Skils and Experience</h2>
       <div className={styles.content}>
        <div className={styles.skills}>
 {
    skills.map((skill,id)=>{
       return <div key={id} className={styles.skill}>
          <div className={styles.skillImageContainer}>
            <img src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
          </div>
          <p>
            {skill.title}
          </p>
        </div>
    }
)
 }
        </div>
        <ul className={styles.history}>
{
    history.map((historyItem,id)=>{
        return <li key={id} className={styles.historyItem}>
            <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} Logo`} height="75px" width="75px" />
            <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} to
                ${historyItem.endDate}`}</p>
                <ul>
                    {historyItem.experiences.map((exp,id)=>{
                        return <li key={id}>
                          {exp}
                        </li>
                    })}
                </ul>
            </div>
        </li>
    })
}
        </ul>
       </div>
   </section>
  )
}

export default Experience