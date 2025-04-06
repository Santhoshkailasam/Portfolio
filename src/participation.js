import React from "react";
import "./participation.css";
import { FaArrowLeft } from "react-icons/fa";
import Innothon from "./asserts/Kcg-innothon.jpg";
import Webquest from "./asserts/kcg-webquest.jpg";
import Hackathon from "./asserts/kcg-hackathon.jpg";
import Footer from "./components/footer";
const participation = [
    {
      id: 1,
      description: "I have participated in KCG Innothon which Gives me a lot of experience.",
      image: Innothon,
    },
    {
      id: 2,
      description: "I have participated in KCG Webquest which Gives me a lot of experience.",
      image: Webquest,
    },
    {
      id: 3,
      description: "I have participated in KCG Hackathon which Gives me a lot of experience.",
      image: Hackathon,
    },
  ];
function Participation() {
    return (
        <div>
        <div className="header-container">
           <div className="header-content">
           <FaArrowLeft className="back-icon" onClick={() => window.history.back()} />
              <h3 className="header">Participation</h3>
           </div>
        </div>
        <div className="participation-container">
                    {participation.map((participation) => (
                        <div
                            key={participation.id}
                            className="participation-card" 
                        >
                            <img
                                src={participation.image}
                                alt={participation.title}
                                className="participation-img"
                            />
                            <p className="para">{participation.description}</p>
                        </div>
                    ))}
                </div>
                   <Footer />

        </div>
    );
    }
    export default Participation;