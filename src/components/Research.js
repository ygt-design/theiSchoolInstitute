import React from "react";
import "../styles/Research.css";
import ResearchCard from "./ResearchCard";

function Research() {
  return (
    <section className="research-section" id="research">
      <div className="research-container content-section">
        <h2 className="section-title">Research</h2>
        <div className="content-text">
          <h5 className="about-text research-text">
            Our research focuses on transforming information into actionable
            insights, fostering innovation, and making a positive societal
            impact. Explore our key research projects and initiatives below.
          </h5>
          <div className="research-gallery">
            <ResearchCard
              imageClass="project1"
              title="Cancer Digital Intelligence at Princess Margaret Hospital Remote Care and Monitoring Centre"
              description="Traditional approaches to healthcare in Canada are being transformed by new care models that address key challenges including a shifting tax base, changing consumer expectations, and the disruptive impacts of new technologies."
              linkTo="/research/cancer-digital-intelligence"
            />
            <ResearchCard
              imageClass="project2"
              title="NORC Innovation Centre"
              description="Canada's rapidly aging population demands innovative housing and care solutions to support older adults' desire to age in their communities."
              linkTo="/research/norc-innovation-centre"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Research;
