import React from "react";
import HeaderComponent from "../components/headercomponent";
import "../css files/spotify.css"
import Parkingtemplate from "../js files/asserts/parking.png";
import Main from "../js files/asserts/parkingmain.jpg";
import Login from "../js files/asserts/parkinglogin.jpg";
import Register from "../js files/asserts/parkingRegister.jpg";
import Saveparking from "../js files/asserts/parkingSaved.jpg";
import Map from "../js files/asserts/parkingMaps.jpg";
import Payment from "../js files/asserts/parkingPayment.jpg";
import Profile from "../js files/asserts/parkingprofile.jpg";
import Parkingticket from "../js files/asserts/parkingTicket.jpg";
import Booking from "../js files/asserts/parkingBooking.jpg";
import Nearby from "../js files/asserts/Parking.jpg";
import Footer from "../components/footer";
import "../css files/parkingproject.css";
function ParkingappProject() {
    return(
        <div>
         <HeaderComponent text="Spotify Project"/>
         <div className="spotifyimg-container">
            <img src={Parkingtemplate} alt="Parking Project" className="Spotify-img" />
            </div>
         <h3 className="subheading">About My Project</h3>
         <div className="descripe-container" >
         <h4>🚗 Smart Parking App</h4>
         <p className="Spotifydescription">This parking app is designed to 
            streamline the parking experience by offering a user-friendly 
            interface and secure user authentication. Built using React Native 
            for the frontend, the app ensures smooth performance across Android 
            and iOS platforms.
        </p>
        <h4>Tech Stacks</h4>
        <ul className="tech-stack-list">
            <li>React Native (for building UI components)</li>
            <li>React Navigation</li>
            <li>Firebase Authentication</li>
            <li>CSS (for styling)</li>
            <li>avaScript(Core programming language for logic and UI interactions)</li>
            <li>Firebase Authentication (Secure user login and registration)</li>
            <li>Firebase Firestore / Realtime Database (To store and manage user data)</li>
            <li>EmailJS (Send emails directly from the app without needing a custom backend)</li>
            <li>Expo / React Native CLI (For app development and testing)</li>
        </ul>
        <h4>Feature Improvements</h4>
        <ul className="tech-stack-list">
            <li>Real-time Parking Availability</li>
            <li>Geo-location & Map Integration</li>
            <li>Payment Integration</li>
            <li>QR Code for Check-in/Out</li>
            <li>Push Notifications</li>
        </ul>
        </div>
        {/* Main */}
        <div className="login-container">
            <img src={Main} alt="Main" className="parking-img" />
            <p className="image-describe-parking" >The Parking App is a mobile 
                application designed to simplify and enhance the parking experience 
                for users. Built using React Native, the app offers a smooth and 
                responsive interface across devices. It allows users to create an 
                account, log in securely using Firebase Authentication, and manage 
                their parking details with ease. 
            </p>
        </div>
        {/* Login */}
        <div className="login-container">
        <p className="image-describe-parking">The Login Screen in the parking app allows users to
                   securely access their accounts using their email and password. Built with React Native
                   and integrated with Firebase Authentication, it ensures a smooth and reliable login 
                   process. The screen features real-time form validation, user-friendly error messages,
                   and a loading indicator during authentication. If users don’t have an account, they 
                   can easily navigate to the Sign-Up screen. This screen is designed with simplicity 
                   and security in mind, providing a seamless entry point into the app.  </p>
            <img src={Login} alt="Login" className="parking-img" />
        </div>

        {/* Register */}
        <div className="login-container">
            <img src={Register} alt="Register" className="parking-img" />
            <p className="image-describe-parking">The Register Screen allows new users to create an account 
                and get started with the parking app. Built using React Native and Firebase Authentication, 
                it provides a secure and user-friendly sign-up process. Users can register with their email
                and password, with real-time form validation to ensure proper input. Once the registration 
                is successful, their information is stored securely in Firebase. Additionally, an automated
                welcome email is sent using EmailJS, enhancing the onboarding experience.  
            </p>
        </div>

       {/*Map*/}
       <div className="login-container">
        <p className="image-describe-parking">The Map Screen is a key feature of the parking app that helps 
            users locate nearby parking spots with ease. Integrated with mapping services like Google Maps 
            or Mapbox, it provides a visual, real-time display of available parking locations. Users can view 
            their current location, search for specific areas, and get directions to a selected parking spot.  
        </p>
            <img src={Map} alt="Map" className="parking-img" />
        </div>
        {/* Nearby parking */}
        <div className="login-container">
            <img src={Nearby} alt="Nearbyparking" className="parking-img" />
            <p className="image-describe-parking">The Nearby Parking feature allows users to quickly discover
                available parking spots around their current location. Using GPS and location services, the app
                fetches and displays a list or map view of nearby parking areas, helping users save time and 
                reduce the hassle of searching manually. With an intuitive interface and accurate positioning,
                users can tap on any location to view details, distance, and directions.
             </p>
        </div>

        {/* Booking */}
        <div className="login-container">
        <p className="image-describe-parking">The Booking Screen allows users to reserve a parking spot quickly 
            and conveniently. Designed with a simple and intuitive layout, it lets users select their preferred 
            parking location, date, and time. Once the booking details are confirmed, the information is securely 
            stored in Firebase, ensuring a smooth reservation process. 
        </p>
            <img src={Booking} alt="Booking" className="parking-img" />
        </div>

       {/* Profile */}
       <div className="login-container">
            <img src={Profile} alt="profile" className="parking-img" />
            <p className="image-describe-parking">The Profile Screen allows users to view and manage their 
                personal information within the app. After logging in, users can access their profile details 
                such as name, email, and account settings. The screen is designed with a clean and user-friendly
                interface, enabling easy updates to user data stored securely in Firebase. It also serves as 
                a central place for users to manage preferences and potentially log out or delete their account. 
                This screen ensures that users have full control over their information and enhances the overall 
                personalized experience of the app.
            </p>
        </div>

        {/*Saveparking*/}
         <div className="login-container">
        <p className="image-describe-parking">The Save Parking feature allows users to bookmark or save their 
            favorite parking spots for quick access later. Whether it's a frequently visited location or a 
            preferred spot near work or home, users can easily mark and store it within the app. Saved locations
            are securely stored in Firebase, ensuring they are always available across sessions.
         </p>
            <img src={Saveparking} alt="Saveparking" className="parking-img" />
        </div>
         {/* Payment */}
         <div className="login-container">
            <img src={Payment} alt="Payment" className="parking-img" />
            <p className="image-describe-parking">The Payment Screen is designed to provide users with a seamless
                 and secure checkout experience for their parking bookings. It features a clean, user-friendly layout
                 that displays booking details, total cost, and payment options. Although the backend integration is
                 yet to be implemented, the frontend is fully built and ready for integration with popular payment 
                 gateways like Stripe, Razorpay, or PayPal. The screen includes confirmation messages, responsive UI
                 elements, and visual feedback for the user during the payment process. This screen plays a key role 
                 in finalizing bookings and adds a professional touch to the overall app experience. </p>
        </div>
        {/* Parkingticket*/}
        <div className="login-container">
        <p className="image-describe-parking">The Parking Ticket screen provides users with a digital confirmation of their 
            parking reservation. Once a booking is completed, the ticket displays essential details such as parking location, 
            date and time, duration, and payment status. The design is clean and easy to read, ensuring users can quickly reference 
            their ticket when needed. This screen can also include a unique booking ID or QR code (if implemented) for verification
            at the parking location. </p>
            <img src={Parkingticket} alt="ParkingTicket" className="parking-img" />
        </div>

        {/* button */}
        <div style={{ marginTop:"20px",marginLeft:"16%"}}>
            <a href="https://github.com/Santhoshkailasam/Parkingapp"  
            target="_blank" 
            rel="noopener noreferrer"><button  className="project-git-btn">View in Git Repo</button></a>
          </div>
        <Footer/>
       </div>
    )
}
export default ParkingappProject;