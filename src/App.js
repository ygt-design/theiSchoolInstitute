import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import People from "./components/People";
import SectionDivider from "./components/SectionDivider";
import Research from "./components/Research";
import Education from "./components/Education";
import PartnershipForm from "./components/PartnershipForm";
import Footer from "./components/Footer";
import Project1 from "./components/research/Project1";
import Project2 from "./components/research/Project2";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      {/* Ensure ScrollToTop is added */}
      <ScrollToTop />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <div className="backgroundGrid">
                <div className="column"></div>
                <div className="column"></div>
                <div className="column"></div>
                <div className="column"></div>
                <div className="column"></div>
                <div className="column"></div>
              </div>
              <Header />
              <About />
              <Research />
              <SectionDivider imageClass="divider-people" height="60vh" />
              <People />
              <SectionDivider imageClass="divider-research" height="70vh" />
              <Education />
              <PartnershipForm />
              <Footer />
            </>
          }
        />

        {/* Individual Research Pages */}
        <Route
          path="/research/cancer-digital-intelligence"
          element={<Project1 />}
        />
        <Route path="/research/norc-innovation-centre" element={<Project2 />} />

        {/* Wildcard Route for 404 */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;