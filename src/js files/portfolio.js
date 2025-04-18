import React from "react";
import "../css files/portfolio.css";
import { useState,useRef } from "react";
import github from "../js files/asserts/github.png";
import linkedin from "../js files/asserts/Linkedin.png";
import phone from "../js files/asserts/Phone.png";
import email from "../js files/asserts/mail.png";
import profile from "../js files/asserts/profile.jpg";
import Innothon from "../js files/asserts/Kcg-innothon.jpg";
import Webquest from "../js files/asserts/kcg-webquest.jpg";
import Hackathon from "../js files/asserts/kcg-hackathon.jpg";
import Spotify from "../js files/asserts/spotifytemplate.png";
import Parking from "../js files/asserts/parking.png";
import Certificate from "../js files/asserts/certificates.jpg";
import Reactjs from "../js files/asserts/react.png";
import Internship from "../js files/asserts/internship.jpg";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
function Portfolio() {
  // Navigation
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/participation");
  };
  const Kcginnothon=()=>{
    navigate("/kcginnothon");
  }
  const Kcgwebquest=()=>{
    navigate("/kcgwebquest");
  }
  const Kcghackathon=()=>{
    navigate("/kcghackathon");
  }
  const Project=()=>{
    navigate("/project");
  }
  const Spotifyproject=()=>{
    navigate("/spotifyproject");
  }
  const Parkingproject=()=>{
    navigate("/parkingproject");
  }
  const Certificates=()=>{
    navigate("/Certificate");
  }

  const handlenavigation=(id)=>{
    if (id===1){
      navigate("/react");
    }else if (id===2){
      navigate("/webquest");
    } else if (id===3){
      navigate("/internship");
    }
  }
  
  // details
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.send(
        "service_8c49npq", // Replace with your EmailJS Service ID
        "template_urd5hhh", // Replace with your EmailJS Template ID
        formData,
        "usOiCoUEmTAQ8kytT", // Replace with your EmailJS Public Key

      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" }); // Clear form after sending
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message.");
      });
    };
  
  // certificate

   const certificates = [
          {
              id: 1,
              title: "Reactjs",
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
              title: "Internship Certificate",
              description: "This is a certificate of contribution received from the Innothon project.",
              image: Internship,
          },
      ];
  
      const [activeIndex, setActiveIndex] = useState(1);
  
      const prevSlide = () => {
          setActiveIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
      };
  
      const nextSlide = () => {
          setActiveIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
      };

      // useref

      const participateRef = useRef(null);
      const projectRef = useRef(null);
      const certificatRef = useRef(null);
      const getintouchRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      const yOffset = -80; 
      window.scrollTo({
        top: ref.current.getBoundingClientRect().top + window.scrollY + yOffset,
        behavior: "smooth",
      });
    }); 
    }
  };
  return (
    <div>
        {/* Navbar */}
    <div className="navbarbox">
       <div>
        <h3 className="name">KAILASAM N</h3>
       </div>
       <a href="https://drive.google.com/uc?export=download&id=11mC4qp1Ry2hXYtrZxIjKprEa_cmkWgXA" download > <button  id="download-btn">Download Resume</button></a>
       <div className="navbar">
        <div >
            <h3 onClick={() => scrollToSection(participateRef)} style={{cursor:"pointer"}}>Participations</h3>
        </div>
        <div>
        <h3 onClick={() => scrollToSection(projectRef)} style={{cursor:"pointer"}}>Projects</h3>
        </div>
        <div>
            <h3 onClick={() => scrollToSection(certificatRef)} style={{cursor:"pointer"}}>Certificates</h3>
        </div>
        <div>
            <button  className="btn" onClick={() => scrollToSection(getintouchRef)} style={{}}>Get in Touch</button>
        </div>
        </div>
    </div>

    {/* Desription */}

    <div className="container">
        <div>
          <p className="description">I'm a dedicated web developer with a passion for creating seamless and visually 
           appealing websites that provide exceptional user experiences. Skilled in both
           front-end and back-end technologies, I build responsive, efficient, and scalable
           web applications that adapt to the evolving digital landscape. My approach 
           combines clean code with thoughtful design to turn complex ideas into intuitive solutions.
           Whether it’s developing a new site from scratch or enhancing an existing platform, 
           I’m committed to delivering high-quality, impactful results for every project.</p>
         </div>
       {/* Profille-image */}
         <div>
           <img src={profile} alt="Profile" className="profile-img" />
         </div>
     </div>
     <div   className="resume-social-container" >
            <a href="https://drive.google.com/uc?export=download&id=11mC4qp1Ry2hXYtrZxIjKprEa_cmkWgXA" download > <button  className="resume-btn">Download Resume</button></a>
     <div className="icons-container">
      {/* Github */}
          <a href="https://github.com/Santhoshkailasam" 
           target="_blank" 
           rel="noopener noreferrer"> <img src={github} alt="GitHub Icon" className="icon" /></a>
           {/* Linkedin */}
          <a href="https://www.linkedin.com/in/kailasam-n-8975b3327/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
           target="_blank" 
           rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn Icon" className="icon" /></a>
          <a href="https://wa.me/9159873818" target="_blank"   rel="noopener noreferrer">
           <img src={phone} alt="Phone Icon" className="icon" /></a>
           {/* Email */}
          <a href="mailto:Kailasam5107@gmail.com?subject=Hello&body=I want to connect with you!" > <img src={email} alt="Email Icon" className="icon" /></a>  
     </div>
     </div>
     <hr></hr>


     {/* Participation  */}
     <section ref={participateRef}>
       <div className="participation-container">
          <div className="participation">
            <h3 className="participation-text">Participations</h3>
          </div> 
          <div>
            <button  className="btn2" onClick={handleExplore}>Explore More &gt;&gt;</button>
          </div>
        </div>
        <div className="participation-card-container">
            <div className="circleleft">
            <button  className="participation-btn" >&lt;</button>
            </div>
               <div className="card-container">
                 <div className="card">
                   <h3 className="card-text">KCG <br /> Innothon</h3>
                   <img src={Innothon} alt="KCG Innothon" className="innothon-img" />
                   <p className="para">I have participated in KCG Innothon which Gives<br/>me a lot of experience</p>
                   <button className="btn3" onClick={Kcginnothon}>View in detail</button>
                 </div>
                 <div className="card">
                   <h3 className="card-text">KCG <br /> Webquest</h3>
                   <img src={Webquest} alt="KCG Webquest" className="innothon-img" />
                   <p className="para">I have participated in KCG Webquest which Gives<br/>me a lot of experience</p>
                   <button className="btn3" onClick={Kcgwebquest}>View in detail</button>
                 </div>
                 <div className="card">
                   <h3 className="card-text">KCG <br /> Hackathon</h3>
                   <img src={Hackathon} alt="KCG Hackathon" className="innothon-img" />
                   <p className="para">I have participated in KCG Hackathon which Gives<br/>me a lot of experience</p>
                   <button className="btn3" onClick={Kcghackathon}>View in detail</button>
                 </div>
                </div>
                <div className="circleright">
                <button className="participation-btn">&gt;</button>
            </div>
        </div>
        <button  class="explore-btn" onClick={handleExplore}>Explore More &gt;&gt;</button>
        </section>
       <hr></hr>  

       {/* Projects */}

       <div className="participation-container">
          <div className="participation">
            <h3 className="project-title" >Projects</h3>
          </div> 
          <div>
            <button  className="btn2" onClick={Project }>Explore More &gt;&gt;</button>
          </div>
        </div>

        {/* Project Card */}
         <section ref={projectRef}>
          <div className="projectcard-container">
             <h3 className="title">Spotify Clone</h3>
             <p className="title-text">A visually appealing Spotify <br/>clone built using React 
             <br/>Native, featuring a seamless user interface and smooth navigation. A perfect project 
             to showcase front-end development skills using <br />React Native."</p>
             <button className="spotify-project-btn" onClick={Spotifyproject}>View Project</button>
          </div>
          <div class="vertical-line"></div>
          <div className="project-box" >
          <div>
          <img src={Spotify} alt="Spotify" className="Spotify" />
          </div>
          <hr className="hr-line"/>
          <div id="vertical-line"></div>
          <div className="projectcard-container2">
             <h3 className="title2">Parking App</h3>
             <p className="title-text">Parking App is a user-friendly React Native frontend 
              that simplifies the parking experience.It features a <br />home screen displaying nearby
               parking spots, a booking system for reserving spaces.</p>
             <button className="spotify-project-btn" onClick={Parkingproject}>View Project</button>
          </div>
          </div>
          <div class="vertical-line2"></div>
          <img src={Parking} alt="Spotify" className="Parking" />
          </section>
          <button  className="explore-btn" onClick={Project }>Explore More &gt;&gt;</button>
          <hr className="hr-line3"></hr> 

          {/* Certificate section */}
          <section ref={certificatRef}>
          <div className="participation-container">
          <div className="participation">
            <h3 className="projects-text">Certificates</h3>
          </div> 
          <div>
            <button  className="btn2" onClick={Certificates}>Explore More &gt;&gt;</button>
          </div>
        </div>

          <div className="sliding-effect-container">
            <div className="carousel-container">
            <div className="certificate-circleleft">
            <button className="participation-btn" onClick={prevSlide}>&lt;</button>
            </div>
                <div className="carousel">
                    {certificates.map((certificate, index) => (
                        <div
                            onClick={() => handlenavigation(certificate.id)}
                            key={certificate.id}
                            className={`certificate-card ${index === activeIndex ? "active" : index === (activeIndex - 1 + certificates.length) % certificates.length ? "left" : index === (activeIndex + 1) % certificates.length ? "right" : "hidden"}`}
>
                            <h3 className="card-text">{certificate.title}</h3>
                            <img
                                src={certificate.image}
                                alt={certificate.title}
                                className={certificate.id === 3 ? "certificate-img larg-img" : "certificate-img"}
                            />
                            <p className="para">{certificate.description}</p>
                        </div>
                    ))}
                </div>
                <div className="certificate-circleright">
                <button className="participation-btn" onClick={nextSlide}>&gt;</button>
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
        </section>
        <hr></hr>

        {/* Connect */}
        <section ref={getintouchRef}>
         <div className="connect-container">
         <form onSubmit={sendEmail}>
              <div className="form-box">
                 <h2 className="heading">
                 Let`s Connect
                   </h2>

        <label className="label">Name</label>
        <input type="text" placeholder="Enter your Name" className="input"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required />
        <label className="label">Email</label>
        <input type="email" placeholder="Enter your Email" className="input"
         name="email"
         value={formData.email}
         onChange={handleChange}
         required />

        <label className="label">Message</label>
        <textarea type="text" placeholder="Enter Message" className="input-message" 
         name="message"
         value={formData.message}
         onChange={handleChange}
         required/>
        <br />
        <button className="button" type="submit">Get in touch</button>
      </div>
      </form>
    </div>
 </section>
    <Footer />
    
    </div> 
  );
}
export default Portfolio;