import React from "react";
import "../styles/PeopleCard.css";
import mailIcon from "../assets/images/icons/mail.svg";

function PeopleCard({ imageClass, name, role, bio, email }) {
  return (
    <div className="person-card">
      <div className={`person-image ${imageClass}`}>
        <div className="person-mask"></div>
      </div>
      <h2 className="person-name">{name}</h2>
      <h4 className="person-role">{role}</h4>

      <img src={mailIcon} alt="mail Icon" />

      {email && (
        <a href={`mailto:${email}`} className="person-email">
          {email}
        </a>
      )}
      <p className="person-bio">{bio}</p>
    </div>
  );
}

export default PeopleCard;
