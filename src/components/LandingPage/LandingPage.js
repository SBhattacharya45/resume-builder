import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
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

                <IconButton href="https://github.com/SBhattacharya45/resume-builder" target="_blank" >
                    <GitHubIcon />
                </IconButton>

                <IconButton href="https://www.linkedin.com/in/soumyadeep-bhattacharya-65b74b170/" target="_blank">
                    <LinkedInIcon />
                </IconButton>
                
            </div>
        </div>
    )
}

export default LandingPage;