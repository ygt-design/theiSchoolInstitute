import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container content-section">
        <h2 className="section-title">
          {" "}
          The <br /> Institute{" "}
        </h2>
        <div className="content-text">
          <h5 className="about-text">
            The iSchool Institute accelerates academic and industry excellence
            through professional education, research translation, and community
            partnership. We focus not only on creating and delivering
            transformational educational programs, but also on applied research
            partnerships that impact society for good.
          </h5>
          <div className="about-image-container">
            <div className="about-image"></div>
            <div className="about-mask"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
