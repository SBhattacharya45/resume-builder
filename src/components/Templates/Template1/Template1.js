import React, { Component } from 'react';
import classes from './Template1.module.css'

import {connect } from 'react-redux';

import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';


class Template1 extends Component {



    

    render(){

        const eduItemsArray = this.props.eduDetails;
        let eduItems = ( 
            <div>
                {eduItemsArray.map((eduElement, igKey) => (
                    <li>
                        <h3 className={classes.eduElementQualification}>{eduElement.qualification}</h3>
                        <h4 className={classes.eduElementField}>{eduElement.field}</h4>
                        <h5 className={classes.eduElementInstitute}>{eduElement.institute}</h5>
                        <span className={classes.eduElementPassout}>Year: {eduElement.passout}</span>
                        <span> | </span>
                        <span className={classes.eduElementGrade}>Grade: {eduElement.grade}</span>
                    </li>
                ))}
            </div>
        )
        const expItemsArray = this.props.expDetails;
        let expItems = ( 
            <div>
                {expItemsArray.map((expElement, igKey) => (
                    <li>
                        <h3 className={classes.expElementType}>{expElement.type}</h3>
                        <h4 className={classes.expElementOrganization}>{expElement.organization}</h4>
                        <h5 className={classes.expElementPosition}>{expElement.position}</h5>
                        <span className={classes.expElementDuration}>Duration: {expElement.duration}</span>
                    </li>
                ))}
            </div>
        )

        const skillsArray = this.props.skills;
        let skills = skillsArray.join(', ')

        const achievementArray = this.props.achivs;
        let achievementItems = ( 
            <div>
                {achievementArray.map((achivsElement, igKey) => (
                    <li>
                        {achivsElement}                        
                    </li>
                ))}
            </div>
        )
    
        return(

            <div>
                <h3 className={classes.Name}>
                    {this.props.firstName} {this.props.lastName}
                </h3>
                <h5 className={classes.Address}>
                    City - {this.props.city},
                    State - {this.props.state},
                    Pincode - {this.props.pincode}

                </h5>
                <h4>{this.props.statement} </h4>
                <section className={classes.section}>
                    <div className={classes.dataType}>
                        <h4>Contact</h4>
                    </div>
                    <div className={classes.data}>
                        <ul className={classes.list}> 
                            <li className={classes.listItem}> <EmailIcon className={classes.icon} />  {this.props.email}</li>
                            <li className={classes.listItem}> <PhoneIcon className={classes.icon} />  {this.props.phoneNumber} </li>
                        </ul>
                    </div>
                </section>
                <section className={classes.section}>
                    <div className={classes.dataType}>
                        <h4>Educational qualification</h4>
                    </div>
                    <div className={classes.data}>
                        <ul>
                           
                                {eduItems}
                         
                        </ul>
                    </div>
                </section>
                <section className={classes.section}>
                    <div className={classes.dataType}>
                        <h4>Experience</h4>
                    </div>
                    <div className={classes.data}>
                        <ul>
                           
                                {expItems}
                         
                        </ul>
                    </div>
                </section>
                <section className={classes.section}>
                    <div className={classes.dataType}>
                        <h4>Skills</h4>
                    </div>
                    <div className={`${classes.data}  ${classes.skills }`}>
                        {skills}
                    </div>
                </section>
                <section className={classes.section}>
                    <div className={classes.dataType}>
                        <h4>Achievements</h4>
                    </div>
                    <div className={classes.data}>
                        <ul>
                            {achievementItems}
                        </ul>
                    </div>
                </section>
                
                
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
        phoneNumber : '8017077130',
        statement : 'Non aliqua pariatur aliquip et anim quis enim. Mollit minim labore sunt do duis consectetur labore incididunt qui sit fugiat. Tempor consequat enim culpa id adipisicing est. Sint veniam consectetur magna id reprehenderit tempor. Adipisicing eiusmod in ex dolore pariatur nisi nulla aliquip occaecat. Deserunt proident reprehenderit aute non exercitation id tempor id sint.',
        eduDetails: [{
            qualification: "B.Tech",
            institute: 'Heritage Institute of Technology',
            field: 'Electronics',
            passout: '2022',
            grade: '9'
        },
        {   qualification: "B.Tech",
            institute: 'Heritage Institute of Technology',
            field: 'Electronics',
            passout: '2022',
            grade: '9'}],
        expDetails: [{
            type: 'Internship',
            organization: 'OrangeInk',
            position: 'Web Developer',
            duration: '2 months'
        },
        {
            type: 'Internship',
            organization: 'OrangeInk',
            position: 'Web Developer',
            duration: '2 months'
        }],
        skills : ['javascript' , 'css', 'html', 'bootstrap'],
        achivs: ['last at everything' , 'rated worst for 3 years']

    }
}

export default connect(mapStateToProps)(Template1);


// const mapStateToProps = (state) => {
//     return{
//         firstName : 'Rajat',
//         lastName : 'Chowdhury',
//         city: 'Kolkata',
//         state: 'WestBengal',
//         pincode : '123456',
//         email : 'crajat2000@gmail.com',
//         phoneNumber : '8017077130',
//         statement : 'Non aliqua pariatur aliquip et anim quis enim. Mollit minim labore sunt do duis consectetur labore incididunt qui sit fugiat. Tempor consequat enim culpa id adipisicing est. Sint veniam consectetur magna id reprehenderit tempor. Adipisicing eiusmod in ex dolore pariatur nisi nulla aliquip occaecat. Deserunt proident reprehenderit aute non exercitation id tempor id sint.',
//         eduDetails: [{
//             qualification: "B.Tech",
//             institute: 'Heritage Institute of Technology',
//             field: 'Electronics',
//             passout: '2022',
//             grade: '9'
//         },
//         {   qualification: "B.Tech",
//             institute: 'Heritage Institute of Technology',
//             field: 'Electronics',
//             passout: '2022',
//             grade: '9'}],
//         expDetails: [{
//             type: 'Internship',
//             organization: 'OrangeInk',
//             position: 'Web Developer',
//             duration: '2 months'
//         },
//         {
//             type: 'Internship',
//             organization: 'OrangeInk',
//             position: 'Web Developer',
//             duration: '2 months'
//         }],
//         skills : ['javascript' , 'css', 'html', 'bootstrap'],
//         achivs: ['last at everything' , 'rated worst for 3 years']

//     }
// }
