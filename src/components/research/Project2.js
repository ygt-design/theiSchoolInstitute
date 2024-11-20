import React from "react";
import AtAGlance from "./AtAGlance";
import "../../styles/Project.css";
import norcOne from "../../assets/images/norc_one.png";
import norcTwo from "../../assets/images/norc_two.png";
import norcThree from "../../assets/images/norc_three.png";
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
          <h2 className="project-title">NORC Innovation Centre</h2>
          <h4 className="project-subheader">Employee Portal</h4>

          {/* Sub-grid with project details */}
          <div className="project-details">
            <div className="detail-item">
              <h5>Student Team</h5>
              <p>Mia Mo, Robyn Carino, Samiha Essakhi</p>
            </div>
            <div className="detail-item">
              <h5>Academic Sponsors</h5>
              <p>Matt Ratto, Associate Dean Research</p>
            </div>
            <div className="detail-item">
              <h5>Industry Partner</h5>
              <p>The NORC Innovation Centre (NIC) at UHN</p>
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
              <p>2023-2024</p>
            </div>
          </div>

          {/* Additional Content */}
          <div className="project-description">
            <p>
              Canada's rapidly aging population demands innovative housing and
              care solutions to support older adults' desire to age in their
              communities. Naturally Occurring Retirement Communities (NORCs) is
              an innovative model that integrates health, social, and physical
              supports directly within apartment buildings, community housing
              and condominiums with a high density of older adults. NORCs
              present an alternative with the potential to lower healthcare
              costs for older adults while improving healthcare outcomes and
              satisfaction.
            </p>
            <p>
              We addressed this challenge by collaborating with frontline care
              providers and backstage support staff. We mapped and blueprinted
              the new service while developing a digital tool to empower NIC’s
              frontline staff and easing data collection and coordination for
              backstage staff. The project centered on a digital employee
              portal, however the team applied Service Design coursework and
              co-op experience from Bridgeable to expand beyond the silo of
              traditional UX. The portal served as a site for negotiating and
              tangibilizing key components of the new service model and the work
              extended to non-digitial touchpoints and broader service processes
              and policies.
            </p>
            <img
              src={norcOne}
              alt="Project illustration"
              className="project-image"
            />
            <p>
              The Approach consisted of researching and mapping the service
              experience of frontline staff, codesigning touchpoints, focussed
              design sprints and finally building and launching an employee
              portal and service supports which are currently being used live in
              a beta launch.
            </p>
            <p>
              Once fully implemented, the portal is projected to serve 3,783
              residents across 15 sites in the Greater Toronto Area (GTA),
              streamlining tasks for 8 frontline team members (with the team
              actively expanding). Additionally, the NIC's operations and
              research teams are supported through improved data collection,
              outcome tracking, and service delivery. As the NIC validates their
              NORC model at early adopter sites within the GTA, their pilot is
              scaled nationally, promising Canadawide impact as early as 2027.
            </p>
            <img
              src={norcTwo}
              alt="Project illustration"
              className="project-image"
            />
            <p>
              Currently, the platform is being successfully rolled out and
              actively used by staff in multiple NORC sites. Feedback from
              frontline staff during the platform’s beta launch has been
              overwhelmingly positive, with comments like "I feel like this is
              going to be so useful, make life so much easier. And it is overall
              really easy and intuitive to look at and to use."
            </p>
            <p>
              This project has the potential to significantly impact Canada's
              approach to senior care. By cocreating the service, we aim to
              enhance frontline staff efficiency and effectiveness in delivering
              care within NORCs. From this, improved communication and
              collaboration among care providers will ultimately empower older
              adults to age in place with greater independence, dignity, and
              access to the care they need.
            </p>
            <img
              src={norcThree}
              alt="Project illustration"
              className="project-image"
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Project1;
