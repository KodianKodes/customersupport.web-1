import React from "react";
import "./App.scss";
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
