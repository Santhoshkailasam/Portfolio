import React from "react";
import "./portfolio.css";
import { useState } from "react";
import github from "./asserts/github.png";
import linkedin from "./asserts/Linkedin.png";
import phone from "./asserts/Phone.png";
import email from "./asserts/mail.png";
import profile from "./asserts/profile.jpg";
import Innothon from "./asserts/Kcg-innothon.jpg";
import Webquest from "./asserts/kcg-webquest.jpg";
import Hackathon from "./asserts/kcg-hackathon.jpg";
import Spotify from "./asserts/spotifytemplate.png";
import Parking from "./asserts/parking.png";
import Certificate from "./asserts/certificates.jpg";
import Reactjs from "./asserts/react.png";
import iconphone from "./asserts/phone-icon.png";
import iconmail from "./asserts/email-icon.png";
function Portfolio() {
  // certificate

   const certificates = [
          {
              id: 1,
              title: "App Project",
              description: "This is a completion certificate of React JS received from the Infosys.",
              image: Reactjs,
          },
          {
              id: 2,
              title: "Web Quest",
              description: "This is a certificate of contribution received from the web quest project.",
              image: Certificate,
          },
          {
              id: 3,
              title: "KCG Innothon",
              description: "This is a certificate of contribution received from the Innothon project.",
              image: Innothon,
          },
      ];
  
      const [activeIndex, setActiveIndex] = useState(1);
  
      const prevSlide = () => {
          setActiveIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
      };
  
      const nextSlide = () => {
          setActiveIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
      };

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
     <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"60%"}}>
        <div>
            <button  className="resume-btn">Download Resume</button>
        </div>
     <div className="icons-container">
           <img src={github} alt="GitHub Icon" className="icon" />
           <img src={linkedin} alt="LinkedIn Icon" className="icon" />
           <img src={phone} alt="Phone Icon" className="icon" />
           <img src={email} alt="Email Icon" className="icon" />
     </div>
     </div>
     <hr></hr>
     {/* Participation container */}
       <div className="participation-container">
          <div className="participation">
            <h3 className="participation-text">Participations</h3>
          </div> 
          <div>
            <button  className="btn2">Explore More &g t;&gt;</button>
          </div>
        </div>
        <div className="participation-card-container">
            <div className="circleleft">
            <button style={{color:"#313131",fontSize:25,margin:0,paddingLeft:10,background:"none",border:"none",paddingTop:5,cursor:"pointer"}}>&lt;</button>
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
                <button style={{color:"#313131",fontSize:25,margin:0,paddingLeft:10,background:"none",border:"none",paddingTop:5,cursor:"pointer"}}>&gt;</button>
            </div>
        </div>
       <hr></hr>  

       {/* Projects */}

       <div className="participation-container">
          <div className="participation">
            <h3 style={{color: '#FFF',marginLeft:800}}>Projects</h3>
          </div> 
          <div>
            <button  className="btn2">Explore More &gt;&gt;</button>
          </div>
        </div>

        {/* Project Card */}

          <div className="projectcard-container">
             <h3 className="title">Title</h3>
             <p className="title-text">A visually appealing Spotify <br/>clone built using React 
             <br/>Native, featuring a seamless user interface and smooth navigation. A perfect project 
             to showcase front-end development skills using <br />React Native."</p>
             <button className="project-btn">View Project</button>
          </div>
          <div class="vertical-line"></div>
          <div style={{display:"flex",flexDirection:"row",marginLeft:"13%"}}>
          <div>
          <img src={Spotify} alt="Spotify" className="Spotify" />
          </div>
          <hr className="hr-line"/>
          <div className="projectcard-container2">
             <h3 className="title2">Title</h3>
             <p className="title-text">Parking App is a user-friendly React Native frontend 
              that simplifies the parking experience.It features a <br />home screen displaying nearby
               parking spots, a booking system for reserving spaces.</p>
             <button className="project-btn">View Project</button>
          </div>
          </div>
          <div class="vertical-line2"></div>
          <img src={Parking} alt="Spotify" className="Parking" />
          <hr className="hr-line3"></hr> 

          {/* Certificate section */}
          <div className="participation-container">
          <div className="participation">
            <h3 className="projects-text">Certificates</h3>
          </div> 
          <div>
            <button  className="btn2">Explore More &gt;&gt;</button>
          </div>
        </div>

          <div className="sliding-effect-container">
            <div className="carousel-container">
            <div className="certificate-circleleft">
            <button style={{color:"#313131",fontSize:25,margin:0,paddingLeft:10,background:"none",border:"none",paddingTop:5,cursor:"pointer"}} onClick={prevSlide}>&lt;</button>
            </div>
                <div className="carousel">
                    {certificates.map((certificate, index) => (
                        <div
                            key={certificate.id}
                            className={`certificate-card ${index === activeIndex ? "active" : index === (activeIndex - 1 + certificates.length) % certificates.length ? "left" : index === (activeIndex + 1) % certificates.length ? "right" : "hidden"}`}
                        >
                            <h3 className="card-text">{certificate.title}</h3>
                            <img
                                src={certificate.image}
                                alt={certificate.title}
                                className="certificate-img"
                            />
                            <p className="para">{certificate.description}</p>
                        </div>
                    ))}
                </div>
                <div className="certificate-circleright">
                <button style={{color:"#313131",fontSize:25,margin:0,paddingLeft:10,background:"none",border:"none",paddingTop:5,cursor:"pointer"}} onClick={nextSlide}>&gt;</button>
            </div>
            </div>
            <div className="pagination">
                {certificates.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === activeIndex ? "active" : ""}`}
                        onClick={() => setActiveIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
        <hr></hr>

        {/* Connect */}

        <div className="connect-container">
      <div className="form-box">
        <h2 className="heading">
          Let`s Connect
        </h2>

        <label className="label">Email</label>
        <input type="email" placeholder="Enter your email" className="input" />

        <label className="label">Mobile No</label>
        <input type="tel" placeholder="Enter your mobile no" className="input" />
        <br />
        <button className="button">Get in touch</button>
      </div>
    </div>
    <footer className="footer">
      <div style={{display:"flex",flexDirection:"row"}}> 
      <div className="footer-content">
       <h3 className="Social">Social Links</h3>
       <h5 className="contents">Instagram</h5>
       <h5 className="contents">Facebook</h5>
       <h5 className="contents">Github</h5>
       <h5 className="contents">Linkedin</h5>
       </div>
       <div className="page-content">
       <h3 className="Social">Page Links</h3>
        </div>
        <div className="contact-content">
       <h3 className="Social">Contacts</h3>
       <div style={{display:"flex",flexDirection:"row"}}> 
       <img src={iconphone} alt="Phone Icon" className="phoneicon" />
       <h5>9159873818</h5>
       </div>
       <div style={{display:"flex",flexDirection:"row"}}> 
       <img src={iconmail} alt="Email Icon" className="phoneicon" />
       <h5>Kailasam5107@gmail.com</h5>
       </div>
        </div>
        </div>
      </footer>
    </div> 
  );
}
export default Portfolio;