import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import HomePage from "./pages/HomePage";
import FooterComponent from "./components/FooterComponent";
import OurWorkPage from "./pages/OurWorkPage";
import "./App.css";
import OurWorkDetailPage from "./pages/OurWorkDetailPage";
import AboutUsPage from "./pages/AboutUsPage";

const App = () => {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<OurWorkPage />} />
        <Route path="/contact" element={<OurWorkDetailPage />} />
        <Route path="/blogs" element={<AboutUsPage />} />
        <Route path="/*" element={<h1>404 - Not Found</h1>} />
      </Routes>
      <FooterComponent />
    </Router>
  )
}

export default App;