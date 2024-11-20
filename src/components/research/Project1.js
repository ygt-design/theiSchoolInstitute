import React from "react";
import AtAGlance from "./AtAGlance";
import "../../styles/Project.css";
import Footer from "../Footer";

function Project1() {
  const glancePoints = [
    "Canada’s aging population needs innovative care models like Naturally Occurring Retirement Communities (NORCs) to support aging in place.",
    "NORCs integrate health, social, and physical supports directly within high-density housing for older adults, reducing healthcare costs and enhancing care.",
    "Our project developed a digital employee portal to support frontline and backstage staff in coordinating care within NORCs.",
    "Through service design techniques, we expanded beyond traditional UX to create both digital and non-digital service touch-points.",
  ];

  return (
    <section className="project-page">
      <div className="project-container content-section">
        {/* Fixed "At A Glance" section */}
        <div className="project-glance">
          <AtAGlance points={glancePoints} />
        </div>

        {/* Main Content */}
        <div className="project-content">
          <h2 className="project-title">
            Cancer Digital Intelligence at Princess Margaret Hospital
          </h2>
          <h4 className="project-subheader">
            Remote Care and Monitoring Centre
          </h4>

          {/* Sub-grid with project details */}
          <div className="project-details">
            <div className="detail-item">
              <h5>Student Team</h5>
              <p>Kshitij Anand, Sho Conte, Sneha Talwalker</p>
            </div>
            <div className="detail-item">
              <h5>Academic Sponsors</h5>
              <p>Matt Ratto, Associate Dean Research</p>
            </div>
            <div className="detail-item">
              <h5>Industry Partner</h5>
              <p>Cancer Digital Intellegence</p>
            </div>
            <div className="detail-item">
              <h5>Project Location</h5>
              <p>Toronto, Canada</p>
            </div>
            <div className="detail-item">
              <h5>Duration</h5>
              <p>10 months </p>
            </div>
            <div className="detail-item">
              <h5>Year</h5>
              <p>2024-2025</p>
            </div>
          </div>

          {/* Additional Content */}
          <div className="project-description">
            <p>
              Traditional approaches to healthcare in Canada are being
              transformed by new care models that address key challenges
              including a shifting tax base, changing consumer expectations, and
              the disruptive impacts of new technologies. These new care models
              offer an opportunity to rethink how health care services are
              designed and delivered. A key need for healthcare institutions is
              to better understand and track the experiences of users of these
              new care models as well as the role played by stakeholders within
              both informal and formal care contexts. The goal of the proposed
              research is to support these practitioners by assisting in the
              co-design and prototyping of care “journey” management tools that
              integrate traditional roles and institutions with new digital
              opportunities. Our main objective is to assist our partners in
              exploring how patient ‘journey’ tools might address key challenges
              they face in implementing new models of care, and, in doing so,
              better understand how the concept and implementation of ‘journeys’
              can add value in contexts of complex care.
            </p>
            {/* <img
              src="/path-to-image.jpg"
              alt="Project illustration"
              className="project-image"
            /> */}
          </div>
        </div>
      </div>
      <Footer style={{ filter: "invert(1)" }} />
    </section>
  );
}

export default Project1;
