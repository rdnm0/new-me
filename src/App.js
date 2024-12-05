import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfileCard from "./components/ProfileCard";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Routes>
          <Route path="/" element={<ProfileCard />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
