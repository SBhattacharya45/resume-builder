import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';

import FacebookIcon from '@material-ui/icons/Facebook';
import { NavLink } from "react-router-dom";
import SimpleModal from '../Modal/Modal';


import './LandingPage.css';
import { IconButton, Button } from '@material-ui/core';





const LandingPage = () => {

    

    return(
        <div className="landingPage">
            <div className="landingPage__controls">
                <h1 className="landingPage__heading">
                    Resume Maker
                </h1>
                <p className="landingPage__text">
                    Fill the form. Print the resume
                </p>
                <p className="landingPage__text">It's that easy</p>
               <Button className="landingPage__started">  <NavLink to="/form"  style={{ textDecoration: 'none', color: 'var(--primary-btn-color)' }}> GET STARTED</NavLink> </Button>

            </div>
            <div className="landingPage__icons">
                <IconButton href="https://www.facebook.com/orangeink1221" >
                    <FacebookIcon />
                </IconButton>
                <IconButton href="https://github.com/SBhattacharya45/resume-builder" >
                    <GitHubIcon />
                </IconButton>
                <SimpleModal />
            </div>
        </div>
    )
}

export default LandingPage;