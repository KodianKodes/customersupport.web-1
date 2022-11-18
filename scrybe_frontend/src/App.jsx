import React from "react";
import "./App.scss";
// import Services from "./services-page/Services";
import Solutions from "./solutions-page/Solutions";

function App() {
  return (
    <div className="App" data-testid="app-container">
      {/* <Services /> */}
      <Solutions />
    </div>
  );
}

export default App;
