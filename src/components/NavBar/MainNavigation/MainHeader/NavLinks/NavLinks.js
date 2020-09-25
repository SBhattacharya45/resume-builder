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
>>>>>>> cbb3ecb833b0130f8119bb11c105188fdb4fe5a6
    </ul>
  );
};

export default NavLinks;
