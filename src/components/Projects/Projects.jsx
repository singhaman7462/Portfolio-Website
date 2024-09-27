import React from 'react'
import projects from "../../data/projects.json"
import { getImageUrl } from '../../utils'

function Projects() {
  return (
    <section id="projects">
        <h2>Projects</h2>
        <div>
          {
            projects.map((project,id)=>{
                return <div key={id}>
                    <img src={getImageUrl(project.imageSrc)} alt={project.title} />
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul>
                        {project.skills.map((skill,id)=>{
                            <li key={id}>{skill}</li>
                        })}
                    </ul>
                    <div>
                        <a href={project.demo}>Demo</a>
                        <a href={project.source}>Source</a>
                    </div>
                </div>
            })
          }
        </div>
    </section>
  )
}

export default Projects