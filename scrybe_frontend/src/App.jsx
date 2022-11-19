import React from "react";
import { Route, Routes } from "react-router-dom";

import Industry from "./Pages/indsutry/industry";
import IndustryArticle from "./components/Industry/industryArticle";
import HowItWorks from "./Pages/HowItWorks/HowItWorks";
import Dummy from "./components/Dummy/index";

import "./App.scss";

function App() {
  return (
    <div className="App" data-testid="app-container">
      <Industry />
      <IndustryArticle />
      <HowItWorks />

      <Routes>
        <Route path="/" element={<Dummy />} />
      </Routes>
    </div>
  );
}

export default App;
