import React from "react";
import "../styles/PartnershipForm.css";
import mailIcon from "../assets/images/icons/mail.svg";

function PartnershipForm() {
  return (
    <section className="partnership-section" id="academic-partnership">
      <div className="partnership-container content-section">
        <h2 className="section-title">Academic Partnership</h2>
        <div className="content-text">
          <p className="partnership-description">
            If you are interested in partnering with the iSchool Institute for
            professional education or research translation projects, please
            contact Chris Ferguson.
          </p>
          <div className="contact-info">
            <img src={mailIcon} alt="Mail Icon" className="mail-icon" />
            <a
              href="mailto:christopher.ferguson@utoronto.ca"
              className="contact-email"
            >
              christopher.ferguson@utoronto.ca
            </a>
          </div>
          <form className="partnership-form">
            <div className="formLeftSide">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  placeholder="Surname"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E—mail"
                  required
                />
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
            <div className="formRightSide">
              <div className="form-group">
                <textarea
                  id="description"
                  name="description"
                  placeholder="Enter details about your inquiry"
                  rows="12"
                  required
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default PartnershipForm;
