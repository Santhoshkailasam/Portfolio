import React from "react";
import HeaderComponent from "../components/headercomponent";
import reactcertificate from "../js files/asserts/react.png";
import "../css files/Reactcompletion.css";
import Footer from "../components/footer";
function ReactCompletion() {
  return (
    <div>
     <HeaderComponent text="ReactJS Certificate" />
     <div className="react-container">
        <img src={reactcertificate} alt="React Completion Certificate" className="react-img" />
     </div>
     <Footer />
    </div>
  );
}
export default ReactCompletion;