import React from "react";
import "./App.scss";
import PartnerPage from "./pages/PartnersPage";
// import PressPage from "./pages/PressPage";
// import PressArticle from "./pages/PressArticle";
// import scrybeLogo from "./assets/scrybe_logo_with_text.svg";

function App() {
  return (
    <div className="App" data-testid="app-container">
      <PartnerPage />
      {/* <PressPage /> */}
      {/* <PressArticle /> */}

      {/* <div
        style={{
          width: "100vw",
          height: "80vh",
          display: "grid",
          placeItems: "center",
        }}
      >
        <img
          src={scrybeLogo}
          alt="scrybeLogo"
          style={{ objectFit: "contain", width: "100%" }}
        />
      </div> */}
    </div>
  );
}

export default App;
