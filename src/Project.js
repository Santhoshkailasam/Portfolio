import React from "react";
import HeaderComponent from "./components/headercomponent";
import Spotify from "./asserts/spotifytemplate.png";
import Parking from "./asserts/parking.png";
import { useNavigate } from "react-router-dom";
import "./project.css";
function Project() {
    // navigation
  const navigate = useNavigate();
  // Handle navigation
  const handleNavigation = (id) => {
    if (id === 1) {
      navigate("/kcginnothon");
    } else if (id === 2) {
      navigate("/kcgwebquest");
    }
}
    const projectData = [
        {
            id: 1,
            description: "A visually appealing Spotify clone built using React Native, featuring a seamless user interface and smooth navigation. A perfect project to showcase front-end development skills using React Native.",
            image: Spotify,
            title: "Spotify Clone"
          },
          {
            id: 2,
            description: "Parking App is a user-friendly React Native frontend that simplifies the parking experience.It features a home screen displaying nearbyparking spots, a booking system for reserving spaces.",
            image: Parking,
            title: "Parking App"
          },
          
        ];  

    return(
        <div className="project">
            <HeaderComponent text="Projects" />

            <div className="participations-container">
                    {projectData.map((projectData) => (
                        <div
                            key={projectData.id}
                            className="project-card" 
                        >
                            <h3 className="card-text">{projectData.title}</h3>
                            <img
                                src={projectData.image}
                                alt={projectData.title}
                                className="participation-img"
                            />
                            <p className="description">{projectData.description}</p>
                            <button className="Project-btn"  onClick={() => handleNavigation(projectData.id)}>View Project</button>
                        </div>
                    ))}
                </div>
        </div>
    )
}
export default Project;