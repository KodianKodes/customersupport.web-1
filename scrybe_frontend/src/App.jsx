import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Dummy from "./components/Dummy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dummy />} />
    </Routes>
  );
}

export default App;
