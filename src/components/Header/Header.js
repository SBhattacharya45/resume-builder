import React from 'react';

import './Header.css'
import Navigation from './Navigation/Navigation';

const Header = () => {
    return(
        <div className="header">
            <h2 className="header__brand">Resume Maker</h2>
            <Navigation />
        </div>
    )
};

export default Header;