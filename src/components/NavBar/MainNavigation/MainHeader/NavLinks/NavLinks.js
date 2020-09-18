import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li className="nav-item">
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/templates">Templates</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/preview">Preview</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
