import React from "react";
import "./App.scss";
import scrybeLogo from "./assets/scrybe_logo_with_text.svg";
import UploadedRecordings from "./components/UploadRecordings";

function App() {
  return (
    <div className="App" data-testid="app-container">
      {/* uploaded recordings component */}
      <UploadedRecordings />
    </div>
  );
}

export default App;
