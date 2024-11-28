import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import ischoolStaticLogo from "../assets/images/logos/ischoolStaticLogo.svg";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 65);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigate = (path, targetId) => {
    navigate(path); // Navigate to the page
    setTimeout(() => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100); // Slight delay to ensure navigation completes
    setMenuOpen(false); // Close the menu
  };

  const handleHomeClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-left">
        {/* Clickable logo */}
        <img
          src={ischoolStaticLogo}
          alt="iSchool Logo"
          className={`logo ${menuOpen ? "logo-rotated" : ""} ${
            isScrolled ? "logo-scaled" : ""
          }`}
          onClick={handleHomeClick}
          style={{ cursor: "pointer" }}
        />
        <span
          className={`school-name ${
            isScrolled && !menuOpen ? "school-name-hidden" : ""
          }`}
          onClick={handleHomeClick}
          style={{ cursor: "pointer" }}
        >
          the <br />
          iSchool <br />
          Institute
        </span>
      </div>

      <div className={`menu-items ${menuOpen ? "show" : ""}`}>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleNavigate("/", "about");
          }}
        >
          About
        </a>
        <a
          href="#people"
          onClick={(e) => {
            e.preventDefault();
            handleNavigate("/", "people");
          }}
        >
          People
        </a>
        <a
          href="#research"
          onClick={(e) => {
            e.preventDefault();
            handleNavigate("/", "research");
          }}
        >
          Research
        </a>
        <a
          href="#education"
          onClick={(e) => {
            e.preventDefault();
            handleNavigate("/", "education");
          }}
        >
          Education & Certification
        </a>
        <a
          href="#academic-partnership"
          onClick={(e) => {
            e.preventDefault();
            handleNavigate("/", "academic-partnership");
          }}
        >
          Academic Partnership
        </a>
      </div>

      <div className="navbar-right">
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
