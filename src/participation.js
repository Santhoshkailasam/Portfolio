import React from "react";
import "./participation.css";
import Innothon from "./asserts/Kcg-innothon.jpg";
import Webquest from "./asserts/kcg-webquest.jpg";
import Hackathon from "./asserts/kcg-hackathon.jpg";
import Footer from "./components/footer";
import HeaderComponent from "./components/headercomponent";
import { useNavigate } from "react-router-dom";
const participation = [
    {
      id: 1,
      description: "I have participated in KCG Innothon which Gives me a lot of experience.",
      image: Innothon,
      title: "KCG Innothon"
    },
    {
      id: 2,
      description: "I have participated in KCG Webquest which Gives me a lot of experience.",
      image: Webquest,
      title: "KCG Webquest"
    },
    {
      id: 3,
      description: "I have participated in KCG Hackathon which Gives me a lot of experience.",
      image: Hackathon,
      title:"Hackathon"
    },
  ];
  
function Participation() {
  // navigation
  const navigate = useNavigate();
  // Handle navigation
  const handleNavigation = (id) => {
    if (id === 1) {
      navigate("/kcginnothon");
    } else if (id === 2) {
      navigate("/kcgwebquest");
    }
    else if (id === 3) {
      navigate("/kcghackathon");
    }
  };
    return (
        <div>
        <HeaderComponent text="Participation"/>
        <div className="participations-container">
                    {participation.map((participation) => (
                        <div
                            key={participation.id}
                            className="participation-card" 
                        >
                            <h3 className="card-text">{participation.title}</h3>
                            <img
                                src={participation.image}
                                alt={participation.title}
                                className="participation-img"
                            />
                            <p className="para">{participation.description}</p>
                            <button className="View-btn"  onClick={() => handleNavigation(participation.id)}>View in detail</button>
                        </div>
                    ))}
                </div>
                   <Footer />

        </div>
    );
    }
    export default Participation;