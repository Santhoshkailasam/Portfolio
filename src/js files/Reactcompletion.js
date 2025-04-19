import React from "react";
import HeaderComponent from "../components/headercomponent";
import reactcertificate from "../js files/asserts/react.png";
import "../css files/Reactcompletion.css";
import Footer from "../components/footer";
function ReactCompletion() {
  return (
    <div >
     <HeaderComponent text="ReactJS Certificate" />
     <div className="react-container">
        <img src={reactcertificate} alt="React Completion Certificate" className="react-img" />
     </div>
     <div>
      <h3 className="about-cert">About Certificate</h3>
      <p className="about-cert">This Certificate is provided By infosys for completing the React Js Course</p>
     </div>
     <div className="foot1">
     <Footer />
     </div>
    </div>
  );
}
export default ReactCompletion;