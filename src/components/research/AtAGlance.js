import React from "react";
import "../../styles/Project.css";

function AtAGlance({ points, backgroundColor }) {
  return (
    <div className="at-a-glance">
      <h3 className="glance-title">At A Glance</h3>
      <ul className="glance-list">
        {points.map((point, index) => (
          <li key={index} className="glance-item">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AtAGlance;
