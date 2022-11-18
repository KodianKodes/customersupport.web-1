import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Dummy from "./components/Dummy";
import AgentReport from "./pages/agent-report";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dummy />} />
      <Route path="/agent-report" element={<AgentReport />} />
    </Routes>
  );
}

export default App;
