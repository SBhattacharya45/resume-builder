import React, { Component } from 'react';
import classes from './Template1.module.css'

import {connect } from 'react-redux';


class Template1 extends Component {

    render(){
        return(
            <div>
                <h3 className={classes.Name}>
                    {this.props.firstName} {this.props.lastName}
                </h3>
                <h5 className={classes.Address}>
                    {this.props.city},
                    {this.props.state},
                    {this.props.pincode}

                </h5>
                <ul>
                    <l1>{this.props.email}</l1>
                    <l1>{this.props.phoneNumber} </l1>
                </ul>
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

export default connect(mapStateToProps)(Template1);