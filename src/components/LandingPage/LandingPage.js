import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import ShareIcon from '@material-ui/icons/Share';
import FacebookIcon from '@material-ui/icons/Facebook';

import './LandingPage.css';
import { IconButton, Button } from '@material-ui/core';


const LandingPage = () => {
    return(
        <div className="landingPage">
            <div className="landingPage__controls">
                <h1>
                    Resume Maker
                </h1>
                <p>
                    Fill the form. Print the resume
                </p>
                <p>It's that easy</p>
                <Button>GET STARTED</Button>

            </div>
            <div className="landingPage__icons">
                <IconButton  >
                    <FacebookIcon />
                </IconButton>
                <IconButton >
                    <GitHubIcon />
                </IconButton>
                <IconButton >
                    <ShareIcon />
                </IconButton >
            </div>
        </div>
    )
}

export default LandingPage;