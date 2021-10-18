import React, {useState, useEffect} from "react";
import Content from "../components/css/Projects-styles"
function Projects(props) {
    const [projects, setProjects] = useState(null);
    const getProjectsData = async () => {
        const response = await fetch(props.URL + "projects")
        const data = await response.json()
        setProjects(data)
    }

    useEffect(() => getProjectsData(), [])

    const loaded = () => {
        return projects.map((project) => (
            <Content>
                <h1>{project.name}</h1>
                <img src={project.image} alt=""/>
                <div>
                <a href={project.git}>
                    <button>Github</button>
                </a>
                <a href={project.live}>
                    <button>live site</button>
                </a>
                </div>
            </Content>
        ))
    }
    
    return projects ? loaded() : <h1>Loading...</h1>
  }
  
  export default Projects;