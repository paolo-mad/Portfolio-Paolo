import { useLoaderData } from "react-router-dom"


const About = () => {
    console.log(useLoaderData())
    return (
        <h1 className="text-green-900">about me</h1>
    )
}

export default About