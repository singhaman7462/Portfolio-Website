import React from 'react'
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css"
function ProjectCard({project}) {
  return (
        <div className={styles.container}>
          <img className={styles.image} src={getImageUrl(project.imageSrc)} alt={project.title} />
          <h3 className={styles.title} >{project.title}</h3>
          <p className={styles.description} >{project.description}</p>
          <ul className={styles.skills}>
            {project.skills.map((skill, id) => {
              return(<li key={id} className={styles.skill}>{skill}</li>);
            })}
          </ul>
          <div className={styles.links}>
            <a href={project.demo} className={styles.link}>Demo</a>
            <a href={project.source} className={styles.link}>Source</a>
          </div>
        </div>
  )
  
}

export default ProjectCard