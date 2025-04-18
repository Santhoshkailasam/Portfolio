import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Portfolio from "./js files/portfolio";
import Participation from "./js files/participation";
import KcgInnothon from "./js files/kcg-Innothon";
import Kcgwebquest from "./js files/KCG-webquest";
import Kcghackathon from "./js files/kcg-hackathon";
import Project from "./js files/Project";
import SpotifyProject from "./js files/spotify-project";
import ParkingappProject from "./js files/Parkingproject";
import ScrollToTop from "./scrolltotop";
import Certificate from "./js files/certificate";
import ReactCompletion from "./js files/Reactcompletion";
import WebquestCertificate from "./js files/Webquestcerttificate";
import InternshipCertificate from "./js files/internshipcertificate";
function App() {
  
  return (
    <Router>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/participation" element={<Participation />} />
      <Route path="/kcginnothon" element={<KcgInnothon />} />
      <Route path="/kcgwebquest" element={<Kcgwebquest />} />
      <Route path="/kcghackathon" element={<Kcghackathon />} />
      <Route path="/project" element={<Project/>} />
      <Route path="/spotifyproject" element={<SpotifyProject />} />
      <Route path="/parkingproject" element={<ParkingappProject />} />
      <Route path="/Certificate" element={<Certificate />} />
      <Route path="/react" element={<ReactCompletion />} />
      <Route path="/webquest" element={<WebquestCertificate />} />
      <Route path="/internship" element={<InternshipCertificate />} />
    </Routes>
  </Router>
  );
}

export default App;
