import React, { Component } from 'react';
import classes from './Template2.module.css';

import {connect } from 'react-redux';


class Template2 extends Component {

    render(){
        return(
            <div class={classes.mainContainer}>
                <div className={classes.leftContainer}>
                    <h1>Left</h1>
                </div>
                <div className={classes.rightContainer}>
                    <h1>RIght</h1>
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