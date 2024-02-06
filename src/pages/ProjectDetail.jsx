import { useLoaderData } from "react-router-dom"



const ProjectDetail = ()=> {

    const project = useLoaderData();

    console.log(project)

    return (
        <h1>{project.title}</h1>     
    )
}

export default ProjectDetail