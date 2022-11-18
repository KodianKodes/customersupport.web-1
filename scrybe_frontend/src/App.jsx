import React from "react";
import "./App.scss";
import Services from "./services-page/Services";

function App() {
  return (
    <div className="App" data-testid="app-container">
      <Services />
    </div>
  );
}

export default App;
