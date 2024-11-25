import React from "react";
import "../styles/Education.css";
import EducationCard from "./EducationCard";

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-container content-section">
        <h2 className="section-title">
          {" "}
          Professional Education And Certification
        </h2>
        <div className="content-text">
          <div className="education-gallery">
            <EducationCard
              title="Operationalizing Generative AI: Executive Insights and Applications"
              description="As a leader in your business, you know that generative artificial intelligence (AI) is rapidly transforming industries and reshaping the competitive landscape — is your organization prepared to adapt?"
              link="https://watspeed.uwaterloo.ca/programs-and-courses/executive-course-operationalizing_gen_ai.html?id=3263007#signup"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
