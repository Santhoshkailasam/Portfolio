import React from "react";
import "./portfolio.css";
import github from "./asserts/github.png";
import linkedin from "./asserts/Linkedin.png";
import phone from "./asserts/Phone.png";
import email from "./asserts/mail.png";
import profile from "./asserts/profile.jpg";
import Innothon from "./asserts/Kcg-innothon.jpg";
import Webquest from "./asserts/kcg-webquest.jpg";
import Hackathon from "./asserts/kcg-hackathon.jpg";
function Portfolio() {
  return (
    <div>
        {/* Navbar */}
    <div className="navbarbox">
       <div>
        <h3 className="name">KAILASAM N</h3>
       </div>
       <div className="navbar">
        <div >
            <h3>Participations</h3>
        </div>
        <div>
        <h3>Projects</h3>
        </div>
        <div>
            <h3>Certificates</h3>
        </div>
        <div>
            <button  className="btn">Get in Touch</button>
        </div>
        </div>
    </div>

    {/* Desription */}

    <div className="container">
        <div>
          <p className="description">I'm a dedicated web developer with a passion for creating seamless and visually 
           <br/> appealing websites that provide exceptional user experiences. Skilled in both
           <br/>front-end and back-end technologies, I build responsive, efficient, and scalable
           <br /> web applications that adapt to the evolving digital landscape. My approach 
           <br />combines clean code with thoughtful design to turn complex ideas into intuitive<br /> solutions.
           Whether it’s developing a new site from scratch or enhancing an <br />existing platform, 
           I’m committed to delivering high-quality, impactful results for <br />every project.</p>
         </div>
       {/* Profille-image */}
         <div>
           <img src={profile} alt="Profile" className="profile-img" />
         </div>
     </div>
     <div className="icons-container">
           <img src={github} alt="GitHub Icon" className="icon" />
           <img src={linkedin} alt="LinkedIn Icon" className="icon" />
           <img src={phone} alt="Phone Icon" className="icon" />
           <img src={email} alt="Email Icon" className="icon" />
     </div>
     <hr></hr>
     {/* Participation container */}
       <div className="participation-container">
          <div className="participation">
            <h3 className="participation-text">Participations</h3>
          </div> 
          <div>
            <button  className="btn2">Explore More &gt;&gt;</button>
          </div>
        </div>
        <div className="participation-card-container">
            <div className="circleleft">
                <h3 style={{color:"#313131",fontSize:25,margin:0,paddingLeft:7}}>&lt;</h3>
            </div>
               <div className="card-container">
                 <div className="card">
                   <h3 className="card-text">KCG <br /> Innothon</h3>
                   <img src={Innothon} alt="KCG Innothon" className="innothon-img" />
                   <p className="para">I have participated in KCG Innothon which Gives<br/>me a lot of experience</p>
                   <button className="btn3">View in detail</button>
                 </div>
                 <div className="card">
                   <h3 className="card-text">KCG <br /> Webquest</h3>
                   <img src={Webquest} alt="KCG Webquest" className="innothon-img" />
                   <p className="para">I have participated in KCG Webquest which Gives<br/>me a lot of experience</p>
                   <button className="btn3">View in detail</button>
                 </div>
                 <div className="card">
                   <h3 className="card-text">KCG <br /> Hackathon</h3>
                   <img src={Hackathon} alt="KCG Hackathon" className="innothon-img" />
                   <p className="para">I have participated in KCG Hackathon which Gives<br/>me a lot of experience</p>
                   <button className="btn3">View in detail</button>
                 </div>
                </div>
                <div className="circleright">
                <h3 style={{color:"#313131",fontSize:25,margin:0,paddingLeft:7}}>&gt;</h3>
            </div>
        </div>
       <hr></hr>  

       {/* Projects */}

       <div className="participation-container">
          <div className="participation">
            <h3 className="projects-text">Projects</h3>
          </div> 
          <div>
            <button  className="btn2">Explore More &gt;&gt;</button>
          </div>
        </div>

        {/* Project Card */}

          <div className="projectcard-container">
             <h3 className="title">Title</h3>
          </div>

     </div>
  );
}
export default Portfolio;