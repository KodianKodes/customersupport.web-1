import React from "react";

import "./App.scss";

import Industry from "./Pages/indsutry/industry";
import IndustryArticle from "./Pages/indsutry/industryArticle";
import HowItWorks from "./Pages/HowItWorks/HowItWorks";

function App() {
  return (
    <div className="App" data-testid="app-container">
     
      <Industry />
      <IndustryArticle />
      <HowItWorks/>
    </div>
  );
}

export default App;
