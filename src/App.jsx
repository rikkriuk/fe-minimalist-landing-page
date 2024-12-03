import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import HomePage from "./pages/HomePage";
import "./App.css";
import FooterComponent from "./components/FooterComponent";

const App = () => {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
        <Route path="/blogs" element={<h1>Blogs Page</h1>} />
        <Route path="/*" element={<h1>404 - Not Found</h1>} />
      </Routes>
      <FooterComponent />
    </Router>
  )
}

export default App;