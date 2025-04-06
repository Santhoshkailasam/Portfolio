import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Portfolio from './portfolio';
import Participation from "./participation";
import KcgInnothon from "./kcg-Innothon";
import Kcgwebquest from "./KCG-webquest";
import Kcghackathon from "./kcg-hackathon";
import Project from "./Project";
import SpotifyProject from "./spotify-project";
import ParkingappProject from "./Parkingproject";
import ScrollToTop from "./scrolltotop";
import Certificate from "./certificate";
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
    </Routes>
  </Router>
  );
}

export default App;
