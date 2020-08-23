import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./MainNavigation.css";
import MainHeader from "./MainHeader/MainHeader";
import NavLinks from "./MainHeader/NavLinks/NavLinks";
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "../../UI/Backdrop/Backdrop";
import MenuIcon from '@material-ui/icons/Menu';

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
         <h2 className="side-navigation__title">
            <Link to="/">Resume-Builder</Link>
          </h2>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader className="main__header">
        <div className="main__header-brand">
          <button
            className="main-navigation__menu-btn"
            onClick={openDrawerHandler}
          >
            <MenuIcon/>
          </button>
          <h2 className="main-navigation__title">
            <Link to="/">Resume-Builder</Link>
          </h2>
        </div>
        
        <div className="main-nav">
          <NavLinks  />

        </div>
    
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
