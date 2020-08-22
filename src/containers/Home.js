import React, { Component } from 'react';
import LandingPage from '../components/LandingPage/LandingPage';

class Home extends Component {
    render(){
        return(
            <>
            <div className="home__landing">
                <LandingPage/>
            </div>

            </>
        )
    }
}

export default Home;