import React from "react";
import HeaderComponent from "../components/headercomponent";
import Webquest from "../js files/asserts/kcg-webquest.jpg";
import "../css files/participation.css";
import Footer from "../components/footer";
function Kcgwebquest() {
    return (
        <div className="kcgwebquest-container">
        <HeaderComponent text="KCG Webquest"/>
        <div className="img-container">
        <img src={Webquest} alt="KCG Webquest" className="Innothon-img" />
        </div>
        <div className="About-container" >
         <h3 className="subheading">About My Project</h3>
         <p className="project-text">This is a YouTube Clone built to replicate the core user 
            interface and experience of the original YouTube platform. The goal of this project
             was to practice frontend development by recreating features like the video player, 
             homepage feed, search functionality, and responsive layout.
</p>
         <h3  className="subheading">Challenges I Have Faced</h3>
         <p  className="project-text">Since this was a team project, one of the main challenges we faced was 
            effective coordination and task distribution. We had to clearly divide responsibilities like layout design, 
            video card components, navbar, and sidebar, while ensuring a consistent design across the app. Managing different
             coding styles and merging code without conflicts required us to stay organized and communicate frequently. 
         </p>
         <h3  className="subheading">How I Solve It</h3>
         <p  className="project-text ">We used version control with Git to manage our codebase and avoid merge conflicts,
            and also made use of branches to work on different features in parallel. For responsiveness, we tested the UI on 
            different screen sizes and helped each other fix layout bugs. By staying organized, collaborating effectively, and 
            supporting each other’s work, we were able to overcome the initial hurdles and successfully complete the project as a team.</p>
         </div>
         <Footer/>
        </div>
         
    );
}
export default Kcgwebquest;