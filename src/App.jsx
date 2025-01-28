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
import Contact from "../src/pages/Contact";
import Jobs from "./pages/Jobs";
import JobPage from "./pages/JobPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/singlejob" element={<JobPage />} />
      </Routes>
    </Router>
  );
}

export default App;
