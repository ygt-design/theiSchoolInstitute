import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "../styles/ResearchCard.css";

function ResearchCard({ imageClass, title, description, linkTo }) {
  return (
    <div className="research-card">
      <div className={`research-image ${imageClass}`}></div>
      <div className="research-contents">
        <h2 className="research-title">{title}</h2>
        <p className="research-description">{description}</p>
        {linkTo && (
          <Link to={linkTo} className="research-link">
            Read More +
          </Link>
        )}
      </div>
    </div>
  );
}

export default ResearchCard;
