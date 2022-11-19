import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Dummy from "./components/Dummy";
import Account from "./pages/Account";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dummy />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
}

export default App;
