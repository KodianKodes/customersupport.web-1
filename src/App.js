import React from "react";
import "./App.css";
// import { Home } from "./pages/Home.js";
// import "./pages/Place.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BlankPage } from "./pages/blank.page";
// import { Place } from "./pages/Place.js";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<BlankPage />} />
          {/* <Route path="/place" element={<Place />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// path = "/scrybe-upload-page";