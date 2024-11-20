import React from "react";
import "../styles/People.css";
import PeopleCard from "./PeopleCard";

function People() {
  return (
    <section className="people-section" id="people">
      <div className="people-container content-section">
        <h2 className="section-title">People</h2>
        <div className="content-text">
          <div className="people-gallery">
            <PeopleCard
              imageClass="chris"
              name="Chris Ferguson"
              role="Director"
              bio="Chris Ferguson is the Director of the iSchool Institute. In this role, he partners with industry partners and academics to design and deliver professional education and research translation projects. Chris is a professor at the Faculty of Information and the founder of Bridgeable, a globally recognized design studio which he sold to employees in 2024. He has published numerous articles and is co-author of Redesigning Value (University of Toronto Press, 2025). Chris’ work has received awards from the Design Management Institute, Fast Company and Service Design Network and he is the proud recipient of the Excellence in Teaching award."
              email="christopher.ferguson@utoronto.ca"
            />
            <PeopleCard
              imageClass="carla"
              name="Carla Conejo Gonzalez"
              role="Strategic Projects Officer"
              bio="Carla Conejo Gonzalez is the Strategic Projects Officer at the Faculty of Information, University of Toronto. In this role, she works closely with the Dean on the Faculty's Strategic Plan, while leading key strategic initiatives and institutional partnerships. Carla holds a B.Sc. in Human Biology, an M.Sc. in the Pharma and Biotech Industry, and postgraduate degrees in Science Communication, Science Diplomacy, and Innovation. A renowned science communicator in Spain, she co-founded Hypatia Mars, a non-profit empowering women in STEM. Her outreach work has impacted over 3.5 million people and she’s led partnerships with 100+ institutions worldwide."
              email="carla.conejo@utoronto.ca"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default People;
