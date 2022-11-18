import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Dummy from "./components/Dummy";
import SentimentAnalysis from "./pages/SentimentAnalysis";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dummy />} />
      <Route path="/sentiment-analysis" element={<SentimentAnalysis />} />
    </Routes>
  );
}

export default App;
