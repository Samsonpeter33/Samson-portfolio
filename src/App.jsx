import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import ProjectDetail from "./components/ProjectDetail";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Projects />
              <Publications />
              <Experience />
              <Education />
              <Achievements />
              <Contact />
            </>
          }
        />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}
