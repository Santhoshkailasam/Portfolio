import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Portfolio from './portfolio';
import Participation from "./participation";
import KcgInnothon from "./kcg-Innothon";
import Kcgwebquest from "./KCG-webquest";
import Kcghackathon from "./kcg-hackathon";
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/participation" element={<Participation />} />
      <Route path="/kcginnothon" element={<KcgInnothon />} />
      <Route path="/kcgwebquest" element={<Kcgwebquest />} />
      <Route path="/kcghackathon" element={<Kcghackathon />} />
    </Routes>
  </Router>
  );
}

export default App;
