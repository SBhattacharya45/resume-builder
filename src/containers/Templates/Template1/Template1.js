import React from "react";
import "./Template1.css";

import PersonalDetails from "./TemplateComponents/PersonalDetails";
import Skills from "./TemplateComponents/Skills";
import Experience from "./TemplateComponents/Experience";
import Education from "./TemplateComponents/Education";
import Organizations from "./TemplateComponents/Organizations";
import Others from "./TemplateComponents/Others";

function Template1() {
  return (
    <div className="main-conatiner">
      <div className="name">John Doe</div>
      <div className="left-section">
        <div className="section-1">
          <PersonalDetails />
        </div>
        <div className="section-2">
          <Skills />
        </div>
      </div>
      <div className="right-section">
        <div className="section-header">Work Experience</div>
        <div className="section-content">
          <Experience />
        </div>
        <div className="section-header">Education</div>
        <div className="section-content">
          <Education />
        </div>
        <div className="section-header">Organizations</div>
        <div className="section-content">
          <Organizations />
        </div>
        <div className="section-header">Other Details</div>
        <div className="section-content">
          <Others />
        </div>
      </div>
    </div>
  );
}

export default Template1;
