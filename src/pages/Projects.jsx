import { useEffect, useState } from 'react'
import Project from "../components/project"
import projectService from '../services/projectService'


const Projects = () => {

    const [projects, setProjects] = useState([]);

const getProjects = async() => {
              const products = await projectService.getProjects()
              setProjects(products)
         };

useEffect(() => {
    getProjects()
},[]);

    return (
       <>
       <h1>projects</h1>
       <ul>
        {projects.map((project) => (
           <Project project={project} key={project.id}/>
        ))}
       </ul>


       </>
    )
    
}

export default Projects 

