import React, { Component } from 'react';
import classes from './Template2.module.css';

import {connect } from 'react-redux';


class Template2 extends Component {

    render(){
        return(
            <div class={classes.mainContainer}>
                <div className={classes.leftContainer}>
                    <div className={classes.leftSubSec}>
                        <h1>Pic</h1>
                    </div>
                    <div className={classes.leftSubSec}>
                        <h1>Skills</h1>
                    </div>
                </div>
                <div className={classes.rightContainer}>
                    <div className={classes.rightSubSec}>
                        <h1>Personal details</h1>
                    </div>
                    <div className={classes.rightSubSec}>
                        <h1>Educational details</h1>
                    </div>
                    <div className={classes.rightSubSec}>
                        <h1>Experience</h1>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        firstName : 'Rajat',
        lastName : 'Chowdhury',
        city: 'Kolkata',
        state: 'WestBengal',
        pincode : '123456',
        email : 'crajat2000@gmail.com',
        phoneNumber : '8017077130'

    }
}

export default connect(mapStateToProps)(Template2);