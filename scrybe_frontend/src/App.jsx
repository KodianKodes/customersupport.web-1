import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Services from "./services-page/Services";
import Solutions from "./solutions-page/Solutions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Services />} />
      <Route path="/solution" element={<Solutions />} />
    </Routes>
  );
}

export default App;
