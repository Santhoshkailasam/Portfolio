import React from "react";
import iconphone from "../js files/asserts/phone-icon.png";
import iconmail from "../js files/asserts/email-icon.png";
import "./footer.css";
function Footer() {
    return (
        <div>
        <footer className="footer">
        <div  style={{display:"flex",flexDirection:"row",justifyContent:"center"}}> 
        <div className="footer-content">
         <h3 className="Social">Social Links</h3>
         {/* Instagram */}
         <a href="https://www.instagram.com/kailash__4559?igsh=dzBzaHE2ZTVldzQ3"
          target="_blank" 
          rel="noopener noreferrer"><h5 className="contents">Instagram</h5></a>
          {/* facebook */}
         <a href="https://www.facebook.com/santhosh.kailasam.77"
          target="_blank" 
          rel="noopener noreferrer"><h5 className="contents">Facebook</h5></a>
          {/* github */}
         <a href="https://github.com/Santhoshkailasam"
          target="_blank" 
          rel="noopener noreferrer"><h5 className="contents">Github</h5></a>
          {/* Linkedin */}
         <a href="https://www.linkedin.com/in/kailasam-n-8975b3327/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank" 
          rel="noopener noreferrer"> <h5 className="contents">Linkedin</h5></a>
         </div>
         
         {/* Conatct content */}
          <div className="contact-content">
         <h3 className="Social">Contacts</h3>
         <a href="tel:+919159873818" target="_blank" rel="noopener noreferrer">
         <div style={{display:"flex",flexDirection:"row"}}> 
         <img src={iconphone} alt="Phone Icon" className="phoneicon" />
         <h5>9159873818</h5>
         </div>
         </a>
         <a href="mailto:Kailasam5107@gmail.com?subject=Hello&body=I want to connect with you!" >
         <div style={{display:"flex",flexDirection:"row"}}>
         <img src={iconmail} alt="Email Icon" className="phoneicon" />
         <h5>Kailasam5107@gmail.com</h5>
         </div>
         </a>
          </div>
          </div>
        </footer>
        </div>
    );
}
export default Footer;