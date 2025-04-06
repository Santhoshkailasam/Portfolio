import React from "react";
import HeaderComponent from "./components/headercomponent";
import Spotifyimg from "./asserts/spotifytemplate.png";
import "./spotify.css"
import Login from "./asserts/login.jpg";
import Artists from "./asserts/artists.jpg";
import Generes from "./asserts/generes.jpg";
import Podcasts from "./asserts/podcasts.jpg";
import Home from "./asserts/Home.jpg";
import Playlist from "./asserts/playlist.jpg";
import Spotifyprofile from "./asserts/spotifyprofile.jpg";
import Footer from "./components/footer";
function SpotifyProject() {
    return(
        <div>
         <HeaderComponent text="Spotify Project"/>
         <div className="spotifyimg-container">
            <img src={Spotifyimg} alt="Spotify Project" className="Spotify-img" />
            </div>
         <h3 className="subheading">About My Project</h3>
         <div className="descripe-container" >
         <h4>🎵 Spotify Clone App (Frontend + Authentication)</h4>
         <p className="Spotifydescription">A responsive music streaming frontend inspired by Spotify,
            built using React Native and Firebase. This project focuses on
            replicating the user interface of Spotify, along with user
            authentication functionality.
        </p>
        <h4>Tech Stacks</h4>
        <ul className="tech-stack-list">
            <li>React Native (for building UI components)</li>
            <li>React Navigation</li>
            <li>Firebase Authentication</li>
            <li>CSS(for styling)</li>
        </ul>
        <h4>Feature Improvements</h4>
        <ul className="tech-stack-list">
            <li>Backend integration for streaming music</li>
            <li>Real-time database support for user playlists</li>
            <li>Music controls and playback features</li>
        </ul>
        </div>
        {/* Login */}
        <div className="login-container">
            <img src={Login} alt="Spotify Project" className="login-img" />
            <p className="image-describe">The Login Page is the entry point of the Spotify Clone app, built 
                with React Native and Firebase Authentication. It allows users to securely sign in using their
                email and password.The page includes real-time input validation to ensure proper data entry,
                and it handles errors like invalid credentials or network issues gracefully. </p>
        </div>
        {/* Artists */}
        <div className="login-container">
        <p className="image-describe">The Choose Artists screen is a personalized feature that enhances user
             engagement right from the start.Built using React Native, the screen offers a responsive and 
             interactive UI, with artist images presented in an intuitive, tappable format.  </p>
            <img src={Artists} alt="Artists" className="login-img" />
        </div>

        {/* Generes */}
        <div className="login-container">
            <img src={Generes} alt="Generes" className="login-img" />
            <p className="image-describe">The Choose Genres screen allows 
                users to select their preferred music genres, helping to 
                personalize the overall listening experience. After selecting 
                their favorite artists, users are guided to a visually engaging 
                layout displaying various genre options such as Pop, Rock,
                Hip-Hop, Classical, and more. Built using React Native, this 
                screen features a clean and responsive design, enabling users to tap and 
                highlight their favorite genres easily.  </p>
        </div>

       {/* Podcasts*/}
       <div className="login-container">
        <p className="image-describe">The Choose Podcasts screen enables users to select their
             favorite podcast genres and categories, allowing the app to suggest content that 
             aligns with their interests. Whether users enjoy true crime, comedy, education, news,
              or storytelling, this screen offers a wide variety of podcast options in an 
              easy-to-navigate layout. Built with React Native, the interface is designed for 
              smooth scrolling and intuitive selection with a modern look. </p>
            <img src={Podcasts} alt="Podcasts" className="login-img" />
        </div>
        {/* home page */}
        <div className="login-container">
            <img src={Home} alt="Home" className="login-img" />
            <p className="image-describe">The Home Page serves as the central hub of the Spotify 
                clone app, offering users quick access to their favorite playlists, recently played
                 tracks, and personalized recommendations based on their selected genres, artists,
                  and podcasts. Designed with a clean and responsive layout using React Native, the page 
                  provides a seamless browsing experience with smooth navigation and visually appealing 
                  sections. </p>
        </div>

        {/* Playlist */}
        <div className="login-container">
        <p className="image-describe">The Playlist Page displays a curated collection of songs grouped into
             custom or recommended playlists. Each playlist features a cover image, title, and a detailed 
             list of tracks with artist names and durations. Built with React Native, the design ensures a 
             smooth scrolling experience and an intuitive layout that mimics the real Spotify interface. 
             Users can easily browse through songs, see what’s next, and prepare their queue for continuous 
             listening. </p>
            <img src={Playlist} alt="Podcasts" className="login-img" />
        </div>

       {/* Profile */}
       <div className="login-container">
            <img src={Spotifyprofile} alt="Spotifyprofile" className="login-img" />
            <p className="image-describe">The Profile Page provides a personalized view for users, showcasing 
                their account details and listening preferences. Designed with a clean and responsive layout in
                React Native, the page displays the user's name, email, profile picture, and a summary of their
                selected artists, genres, and favorite playlists.</p>
        </div>
        <div style={{display:"flex", justifyContent:"flex-end", marginTop:"20px",marginRight:"10%"}}>
            <a href="https://github.com/Santhoshkailasam/Spotifyclone"  
            target="_blank" 
            rel="noopener noreferrer"><button  className="git-btn">View in Git Repo</button></a>
          </div>
        <Footer/>
       </div>
    )
}
export default SpotifyProject;