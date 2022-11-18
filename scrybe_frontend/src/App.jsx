import React from "react";
import "./App.scss";

import Industry from "./Pages/indsutry/industry";
import IndustryArticle from "./Pages/indsutry/industryArticle";

function App() {
  return (
    <div className="App" data-testid="app-container">
      <Industry />
      <IndustryArticle />

    </div>
  );
}

export default App;
