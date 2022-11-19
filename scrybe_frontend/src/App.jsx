import React from "react";
import { Routes, Route } from "react-router-dom";
import SentimentAnalysis from "./Pages/SentimentAnalysis";
import DummyPage from "./Pages/DummyPage";
import TranscribePage from "./Pages/TranscribePage/TranscribePage";
import { FAQs, TermsOfService } from "./Pages";
import LandingPage from "./Pages/landing-page-a";
import PageB from "./Pages/Landing-page-b";
import NavBar from "./components/navBar";
import TermsAndCondition from "./Pages/TermsAndCondition/TermsOfService";
import Industry from "./Pages/indsutry/industry";
import IndustryArticle from "./components/Industry/industryArticle";
import HowItWorks from "./Pages/HowItWorks/HowItWorks";

import Services from "./Pages/services-page/Services";
import Solutions from "./Pages/solutions-page/Solutions";
import DashboardOverview from "./Pages/DashboardOverview";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* landing page */}
        <Route path="/" element={<LandingPage />} />
        {/* sentiment analysis */}
        <Route path="/sentiment-analysis" element={<SentimentAnalysis />} />
        {/* transcriptions */}
        <Route path="/transcriptions" element={<TranscribePage />} />
        {/* try for free */}
        <Route path="/try" element={<DummyPage someText="try for free" />} />
        {/* press */}
        <Route path="/press" element={<DummyPage someText="press" />} />
        {/* settings */}
        <Route path="/settings" element={<DummyPage someText="settings" />} />
        {/* uploaded */}
        <Route
          path="/uploaded"
          element={<DummyPage someText="uploaded recordings" />}
        />
        {/* history */}
        <Route path="/history" element={<DummyPage someText="history" />} />
        {/* help and support */}
        <Route
          path="/help"
          element={<DummyPage someText="help and supprt" />}
        />
        {/* sign in */}
        <Route
          path="/auth"
          element={<DummyPage someText="sign-in, sign up, reset password" />}
        />
        {/* career page & legal */}
        <Route
          path="/careers-and-legal"
          element={<DummyPage someText="career page and legal" />}
        />
        {/* solutions & services */}
        <Route
          path="/services"
          element={<Services someText="solutions and services" />}
        />

        <Route
          path="/solutions"
          element={<Solutions someText="solutions and services" />}
        />
        {/* about us */}
        <Route path="/about-us" element={<DummyPage someText="about us" />} />
        {/* events */}
        <Route path="/events" element={<DummyPage someText="events" />} />
        {/* agent report */}
        <Route
          path="/report"
          element={<DummyPage someText="report and performance" />}
        />
        {/* upload pages */}
        <Route path="/upload" element={<DummyPage someText="upload pages" />} />
        {/* dashboard */}
        <Route path="/dashboard" element={<DashboardOverview />} />
        {/* accounts */}
        <Route path="/accounts" element={<DummyPage someText="accounts" />} />
        {/* industry */}
        <Route path="/industry" element={<Industry someText="industry" />} />
        <Route
          path="/industryarticle"
          element={<IndustryArticle someText="industry" />}
        />
        {/* How It Works */}
        <Route
          path="/howitworks"
          element={<HowItWorks someText="How It Works" />}
        />
        {/* demo pages */}
        <Route path="/demos" element={<DummyPage someText="demo pages" />} />
        {/* reviews & pricing */}
        <Route
          path="/reviews-and-pricing"
          element={<DummyPage someText="reviews and pricing" />}
        />
        {/* leaderboard */}
        <Route
          path="/leaderboard"
          element={<DummyPage someText="leaderboard" />}
        />
        {/* terms and conditions */}
        <Route
          path="/terms"
          element={<TermsAndCondition someText="terms and conditions" />}
        />
        {/* terms of service */}
        <Route
          path="/terms-of-service"
          element={<DummyPage someText="terms of service" />}
        />
        {/* blog */}
        <Route path="/blog" element={<DummyPage someText="blog" />} />
        <Route path="/homeB" element={<PageB />} />
        <Route path="faq" element={<FAQs />} />
        <Route path="faq" element={<TermsOfService />} />
      </Routes>
    </>
  );
}

export default App;
