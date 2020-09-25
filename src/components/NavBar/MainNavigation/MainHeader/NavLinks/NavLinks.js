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
<<<<<<< HEAD
      
=======
>>>>>>> 3b9a909266fe1b22dcca5a11749bab694b2f25a0
    </ul>
  );
};

export default NavLinks;
