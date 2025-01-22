import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import BlogPage from "../src/pages/BlogPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
