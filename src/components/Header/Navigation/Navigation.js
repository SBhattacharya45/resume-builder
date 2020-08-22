import React from 'react';
import './Navigation.css'
import NavigationButton from './NavigationButton/NavigationButton';

const Navigation = () => {
    return(
        <div className="navigation">
            <NavigationButton name="Home" />
            <NavigationButton name="Templates" />
        </div>
    )
}

export default Navigation;