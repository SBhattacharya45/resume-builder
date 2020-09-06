import React from "react";
import { Link } from 'react-router-dom';
import "./TemplatePage.css";

const TemplatePage = () => {
  return (
    <div className="row">
      <div className="column">
        <div className="card">
          <Link to='/template1'>Template 1</Link>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <h3>Template 2</h3>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <h3>Template 3</h3>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <h3>Template 4</h3>
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;
