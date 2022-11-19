import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Dummy from "./components/Dummy";
import UploadedRecordings from "./components/UploadRecordings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dummy />} />
      <Route exact path="/uploaded-recordings" element={<UploadedRecordings />} />
    </Routes>
  );
}

export default App;
