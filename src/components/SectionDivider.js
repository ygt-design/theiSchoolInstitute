import React from "react";
import "../styles/SectionDivider.css";

function SectionDivider({ imageClass, height = "50vh" }) {
  return (
    <div className={`section-divider ${imageClass}`} style={{ height }}></div>
  );
}

export default SectionDivider;
