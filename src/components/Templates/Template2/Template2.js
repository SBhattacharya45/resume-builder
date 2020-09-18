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
                        <ul>
                            <li>Python</li>
                            <li>Python</li>
                            <li>Python</li>
                            <li>Python</li>
                        </ul>
                    </div>
                </div>
                <div className={classes.rightContainer}>
                    <div className={classes.rightSubSec}>
                        <h1>Soumyadeep Bhattacharya</h1>
                        <p>Kolkata, WestBengal</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur turpis turpis, consectetur sit amet risus vel, luctus semper purus. In tristique blandit nisl vel scelerisque. Sed mollis ex vitae auctor dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis justo sed tortor cursus, id condimentum felis luctus.</p>
                        <p>Mail: test123@testmail.com</p>
                        <p>Phone Number: 9676767676</p>
                    </div>
                    <div className={classes.rightSubSec}>
                        <h1>Educational details</h1>
                        <table className={classes.Table}>
                            <tr className={classes.HeaderRow}>
                                <th>Qualification</th>
                                <th>Field</th>
                                <th>Institute</th>
                                <th>Year of Passing</th>
                                <th>Grade/Percentage</th>
                            </tr>
                            <tr>
                                <td>B.Tech</td>
                                <td>ECE</td>
                                <td>Heritage Institute of Technology</td>
                                <td>2022</td>
                                <td>11</td>
                            </tr>
                            <tr>
                                <td>B.Tech</td>
                                <td>ECE</td>
                                <td>Heritage Institute of Technology</td>
                                <td>2022</td>
                                <td>11</td>
                            </tr>
                        </table>
                    </div>
                    <div className={classes.rightSubSec}>
                        <h1>Experience</h1>
                        <table>
                            <tr>
                                <th>Type</th>
                                <th>Organization</th>
                                <th>Position</th>
                                <th>Duration</th>
                            </tr>
                            <tr>
                                <td>Part-time</td>
                                <td>Orange</td>
                                <td>Programmer</td>
                                <td>2 Months</td>
                            </tr>
                        </table>
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