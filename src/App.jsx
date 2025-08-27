import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Import all page components
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Projects from "./pages/Projects";

// Import custom components
import IntroLoader from "./components/IntroLoader";

/**
 * Main App Component
 * Handles routing and renders the appropriate page based on URL
 */
function App() {
  return (
    <Router>
      {/* Intro loader animation */}
      <IntroLoader />
      
      {/* Main routing system */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
