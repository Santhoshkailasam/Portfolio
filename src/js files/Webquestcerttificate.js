import React from "react";
import HeaderComponent from "../components/headercomponent";
import webquestcertificate from "../js files/asserts/certificates.jpg";
import Friends from "../js files/asserts/kcg-webquest.jpg";
import "../css files/webquestcertificates.css";
import Footer from "../components/footer";
function WebquestCertificate() {
  return (
    <div>
      <HeaderComponent text="Webquest Certificate" />
      <div className="webquest-container">
        <img src={Friends} alt="Webquest Completion Certificate" className="webquestcertificate-img" />
      </div>
      <h3 className="Subheading">About This Program</h3>
      <p className="webquest-description">The WebQuest on Development and Deployment of Projects is an initiative
         designed to equip students with hands-on experience in the end-to-end lifecycle of software development.
         This program bridges the gap between academic knowledge and industry practices by guiding participants
         through the core phases of building real-world applications — from planning and coding to testing and 
         deployment.
        </p>
        <h3  className="Subheading">What I Have Learned From This</h3>
        <p className="webquest-description">Through the WebQuest on Development and Deployment of Projects, I have gained a comprehensive understanding
             of how real-world software projects are planned, developed, and deployed.I learned how to plan and structure a project effectively, write clean
             and functional code, and use tools like Git and GitHub for version control and collaboration. The program helped me understand how to test and 
             debug applications, as well as deploy them using platforms such as Firebase or Vercel. It also improved my ability to work in a team environment, 
             follow industry-standard workflows, and manage real-world project challenges.</p>
       <div className="Certified">
       <img src={webquestcertificate} alt="Webquest Completion Certificate" className="webquestcertificate-img2" />
       </div>
       <Footer />
    </div>
  );
}
export default WebquestCertificate;