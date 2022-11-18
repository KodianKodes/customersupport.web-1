import React from "react";
import "./App.scss";
import scrybeLogo from "./assets/scrybe_logo_with_text.svg";

import Industry from './Pages/indsutry/industry'

function App() {
  return (
    <div className="App" data-testid="app-container">
     
       <Industry/>


     
    </div>
  );
}

export default App;
