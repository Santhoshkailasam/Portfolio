import React from "react";
import HeaderComponent from "../components/headercomponent";
import Hackathon from "../js files/asserts/kcg-hackathon.jpg";
import "../css files/ParticipationDetails.css";
import Footer from "../components/footer";
function Kcghackathon() {
    return (
        <div>
         <HeaderComponent text="KCG hackathon"/>
         <div className="img-container">
         <img src={Hackathon} alt="KCG Hackathon" className="Innothon-img" />
         </div>
         <div className="About-container" >
         <h3 className="subheading">About My Project</h3>
         <p className="project-text">Our project focuses on promoting responsible consumption by
             helping users make informed decisions about the products they use. 
             Many people are unaware of the ingredients present in the products they purchase,
             which can lead to health risks or negative environmental impact. To address
             this, we created a mobile application where users can simply scan the barcode
             of any product to instantly access detailed information about its ingredients.
             The app explains the advantages and disadvantages of each ingredient, making 
             it easy for users to understand what they’re consuming. Additionally, the 
             application is powered by AI, which automatically suggests healthier or more 
             sustainable alternative products based on the scan. This not only protects
             consumers but also encourages smarter, safer, and more responsible purchasing habits.
</p>
         <h3  className="subheading">Challenges I Have Faced</h3>
         <p  className="project-text">one of the main challenges we faced was figuring out how to 
            structure the user interface in a way that was both informative and easy to use.
             We had to carefully plan the layout for displaying ingredient details, advantages,
             disadvantages, and alternate product suggestions in a clean and user-friendly manner.
             As a team working together for the first time, we also faced challenges in task distribution, 
             maintaining consistent design styles, and managing time effectively within the short hackathon
             period.
         </p>
         <h3  className="subheading">How I Solve It</h3>
         <p  className="project-text    "> we started by clearly dividing tasks among our team members based 
            on individual strengths, which helped improve coordination and productivity. 
            For the user interface, we sketched out wireframes and used design tools like Figma 
            to visualize the flow and structure of the app before actually building it.</p>
         </div>
         <Footer/>
        </div>
    )
    }
export default Kcghackathon;