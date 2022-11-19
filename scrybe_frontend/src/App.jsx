import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Dummy from "./components/Dummy";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Careers from "./pages/Careers/Careers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dummy />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/careers" element={<Careers />} />
    </Routes>
  );
}

export default App;
