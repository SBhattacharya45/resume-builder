import React, {Component} from "react";
import {connect} from 'react-redux'
import "./Template1.css";

import PersonalDetails from "./TemplateComponents/PersonalDetails";
import Skill from "./TemplateComponents/Skills";
import Experience from "./TemplateComponents/Experience";
import Education from "./TemplateComponents/Education";
import Organizations from "./TemplateComponents/Organizations";
import Others from "./TemplateComponents/Others";
class Template1 extends Component {

  render () {

    const skills = (
      <div>
        {this.props.userDetails.skills.map((skillObj, igKey) => (
          <Skill id={igKey} name={skillObj.skill} />
        ))}
      </div>
    )

    return (
      <div className="main-conatiner">
        <div className="name">{this.props.userDetails.formValues[0].value + " " + this.props.userDetails.formValues[1].value}</div>
        <div className="left-section">
          <div className="section-1">
            <PersonalDetails 
              city={this.props.userDetails.formValues[2].value}
              state={this.props.userDetails.formValues[3].value}
              pin={this.props.userDetails.formValues[4].value}
              mail={this.props.userDetails.formValues[5].value}
              number={this.props.userDetails.formValues[6].value}
            />
          </div>
          <div className="section-2">
            {skills}
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
}

const mapStateToProps = state => {
  return {
      userDetails: state.form.details
  };
}

export default connect(mapStateToProps, null)(Template1);
