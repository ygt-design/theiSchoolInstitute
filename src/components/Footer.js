import React from "react";
import { useNavigate } from "react-router-dom"; // React Router hook for navigation
import "../styles/Footer.css";
import logo from "../assets/images/logos/ischoolStaticLogo.svg";
import contactIcon from "../assets/images/icons/contactIcon.svg";
import mapIcon from "../assets/images/icons/locationIcon.svg";

function Footer() {
  const navigate = useNavigate();

  const handleNavigate = (path, targetId) => {
    navigate(path); // Navigate to the page
    setTimeout(() => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100); // Slight delay to ensure navigation completes
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-logo">
          {/* Clickable logo */}
          <img
            src={logo}
            alt="iSchool Logo"
            onClick={() => navigate("/")} // Navigate to the homepage
            style={{ cursor: "pointer" }} // Cursor to indicate it's clickable
          />
        </div>

        <div className="footer-middle">
          <p className="footer-address">
            140 St. George Street, Toronto, Ontario, <br /> Canada M5S 3G6
          </p>
          <a href="mailto:contact@ischool.ca" className="footer-link">
            <img src={contactIcon} alt="Contact Icon" />
            Contact Us
          </a>
          <a
            href="https://maps.google.com"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mapIcon} alt="Map Icon" />
            Map Directions
          </a>
        </div>

        <div className="footer-menu">
          {/* Smooth scrolling and navigation for footer links */}
          <a
            href="#about"
            className="footer-menu-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavigate("/", "about");
            }}
          >
            About
          </a>
          <a
            href="#people"
            className="footer-menu-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavigate("/", "people");
            }}
          >
            People
          </a>
          <a
            href="#research"
            className="footer-menu-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavigate("/", "research");
            }}
          >
            Research
          </a>
          <a
            href="#education"
            className="footer-menu-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavigate("/", "education");
            }}
          >
            Education
          </a>
          <a
            href="#academic-partnership"
            className="footer-menu-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavigate("/", "academic-partnership");
            }}
          >
            Academic Partnership
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
