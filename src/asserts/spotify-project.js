import React from "react";
import HeaderComponent from "./components/headercomponent";
import Spotifyimg from "./asserts/spotifytemplate.png";
import "./spotify.css"
import Login from "../asserts/login.png";
function SpotifyProject() {
    return(
        <div>
         <HeaderComponent text="Spotify Project"/>
         <div className="spotifyimg-container">
            <img src={Spotifyimg} alt="Spotify Project" className="Spotify-img" />
            </div>
         <h3 className="subheading">About My Project</h3>
         <div className="description-container" >
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
        <div className="login-container">
            <img src={Login} alt="Spotify Project" className="login-img" />
            <h4 className="login-text">Login Page</h4>
        </div>
       </div>
    )
}
export default SpotifyProject;