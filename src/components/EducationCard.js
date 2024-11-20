import React from "react";
import "../styles/EducationCard.css";

function EducationCard({ title, description, link }) {
  return (
    <div className="education-card">
      <div className="education-contents">
        <h2 className="education-title">{title}</h2>
        <h4 className="education-subtitle">{}</h4>
        <p className="education-description">{description}</p>
        {link && (
          <a
            href={link}
            className="education-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More +
          </a>
        )}
      </div>
    </div>
  );
}

export default EducationCard;
