import PropTypes from "prop-types";
import { Link } from "react-router-dom"


const Project = ({project}) => {


    return (
        <>
            <li className="h-1/4 bg-red-400 p-9 m-6">{project.title}</li>
            <Link to={`/home/projectdetail/${project.id}`}>
                <button className='bg-orange-500 p-2'>more info</button>
            </Link>
        </>
    );


}

Project.propTypes = {
    project: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      // Add other expected properties of the project object
    }).isRequired,
  };
  

export default Project