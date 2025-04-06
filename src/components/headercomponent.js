import React from "react";
import { FaArrowLeft } from "react-icons/fa";
function HeaderComponent(props) {
    return(
        <div className="header-container">
                   <div className="header-content">
                    <div className="back-icon-circle" onClick={() => window.history.back()}>
                    <FaArrowLeft className="back-icon"  />
                    </div>
                      <h3 className="header">{props.text}</h3>
                   </div>
                </div>
    )
}
export default HeaderComponent;