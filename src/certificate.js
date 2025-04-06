import React from "react";
import HeaderComponent from "./components/headercomponent";
import Reactjs from "./asserts/react.png";
import webquest from "./asserts/certificates.jpg";
import Internship from "./asserts/internship.jpg";
import Footer from "./components/footer";
import "./certificate.css";
import { useNavigate } from "react-router-dom";
function Certificate() {
    const certificates = [
        {
            id: 1,
            title: "Reactjs",
            description: "This is a completion certificate of React JS received from the Infosys.",
            image: Reactjs,
        },
        {
            id: 2,
            title: "Web Quest",
            description: "This is a certificate of contribution received from the web quest project.",
            image: webquest,
        },
        {
            id: 3,
            title: "Internship Certificate",
            description: "This is a certificate of contribution received from the Interain Internship Certificate.",
            image: Internship,
        },
    ];
    // Navigation
    const navigate = useNavigate();
    const handleNavigation = (id) => {
      if(id===1){
         navigate("/react");
      }else if(id===2){
        navigate("/webquest");
      }else if(id===3){         
        navigate("/internship");
     }
 }
    return(
        <div>
            <HeaderComponent text="Certificates" />
            
            <div className="participations-container">
                    {certificates.map((certificates) => (
                        <div
                            key={certificates.id}
                            className="cert-card"  onClick={() => handleNavigation(certificates.id)}
                        >
                            <h3 className="card-text">{certificates.title}</h3>
                            <img
                                src={certificates.image}
                                alt={certificates.title}
                                className={certificates.id === 3 ? "participation-img large-img" : "participation-img"}
                            />
                            <p className="cert-description">{certificates.description}</p>
                        </div>
                    ))}
                </div>
                <Footer />
        </div>
    )
}
export default Certificate;