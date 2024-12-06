import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import HomePage from "./pages/HomePage";
import FooterComponent from "./components/FooterComponent";
import OurWorkPage from "./pages/OurWorkPage";
import "./App.css";
import OurWorkDetailPage from "./pages/OurWorkDetailPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import BlogsPage from "./pages/BlogsPage";
import BlogsDetailPage from "./pages/BlogsDetailPage";

const App = () => {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-works" element={<OurWorkPage />} />
        <Route path="/our-works/:id" element={<OurWorkDetailPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:slug" element={<BlogsDetailPage />} />

        <Route path="/*" element={<h1>404 - Not Found</h1>} />
      </Routes>
      <FooterComponent />
    </Router>
  )
}

export default App;