import {createBrowserRouter} from "react-router-dom"
import Root from "./Root"
import About from "../pages/About"
import Projects from "../pages/Projects"
import ProjectDetail from "../pages/ProjectDetail"
import projectService from "../services/projectService"
import '../index.css'


const getProjects = async () => {
  const projects = await projectService.getProjects();
  return projects;
}

const getProject = async ({params}) => {
  console.log(params.id)
  const project = await projectService.getProject(params.id);
  return project
}

export const router = createBrowserRouter([
    {
        path: "/home",
        element: <Root/>,
        children: [
           {
            path: "/home/about",
            element: <About/>,
            loader: getProjects
          },
          {
            path: "/home/projects",
            element: <Projects/>,
            loader: getProjects
          },
          {
            path: "/home/projectDetail/:id",
            element: <ProjectDetail/>,
            loader: getProject
          }
        ]
    },
])