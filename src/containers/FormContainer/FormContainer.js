import React,{Component} from 'react';
import { connect } from 'react-redux';

import Input from '../../components/Input/Input';
import Item from '../../components/Item/Item';
import classes from './FormContainer.module.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import * as actions from '../../store/actions/index';


class FormConatiner extends Component {

    state = {
        formValues: [
            {
                id: 0,
                value: '',
                config: {
                    type: 'text', 
                    placeholder: 'First Name',
                }
            },
            {
                id: 1,
                inputType: 'input',
                value: '',
                config: {
                    type: 'text', 
                    placeholder: 'Last Name'
                }
            },            
            {
                id: 2,
                inputType: 'input',
                value: '',
                config: {
                    type: 'text', 
                    placeholder: 'City'
                }
            },            
            {
                id: 3,
                inputType: 'input',
                value: '',
                config: {
                    type: 'text', 
                    placeholder: 'State'
                }
            },            
            {
                id: 4,
                inputType: 'input',
                value: '',
                config: {
                    type: 'text', 
                    placeholder: 'Pincode'
                }
            },            
            {
                id: 5,
                inputType: 'input',
                value: '',
                config: {
                    type: 'email', 
                    placeholder: 'Enter your mail'
                }
            },            
            {
                id: 6,
                inputType: 'input',
                value: '',
                config: {
                    type: 'text', 
                    placeholder: 'Enter your phone number'
                }
            },
            {
                id: 7,
                inputType: "textarea",
                value: '',
                config: {
                    type: 'text', 
                    placeholder: 'Enter your statement'
                }
            }
        ],
        eduDetails: [{
            qualification: "B.Tech",
            institute: 'Heritage Institute of Technology',
            field: 'Electronics',
            passout: '2022',
            grade: '9'
        }],
        expDetails: [{
            type: 'Internship',
            organization: 'OrangeInk',
            position: 'Web Developer',
            duration: '2 months'
        }],
        skills: [],
        achivs: []
    }

    inputChangedHandler = (event, key) => {
        let updatedFormElements = [
            ...this.state.formValues
        ];

        const updatedElement = { 
            ...updatedFormElements[key]
        }

        updatedElement.value = event.target.value;
        updatedFormElements[key] = updatedElement;

        this.setState({formValues: updatedFormElements});
    }

    eduSubmitHandler = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        let updatedEduDetails = [...this.state.eduDetails];
        updatedEduDetails.push({
            qualification: data.get('qualification'),
            institute: data.get('institute'),
            field: data.get('field'),
            passout: data.get('passout'),
            grade: data.get('grade')
        })
        this.setState({eduDetails: updatedEduDetails});
    }

    eduDeleteHandler = (key) => {
        let updatedEduDetails = [...this.state.eduDetails];
        updatedEduDetails.splice(key, 1);
        this.setState({eduDetails: updatedEduDetails});
    }

    expSubmitHandler = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        let updatedExpDetails = [...this.state.expDetails];
        updatedExpDetails.push({
            type: data.get('type'),
            organization: data.get('organization'),
            position: data.get('position'),
            duration: data.get('duration')
        })
        this.setState({expDetails: updatedExpDetails});
    }

    expDeleteHandler = (key) => {
        let updatedExpDetails = [...this.state.expDetails];
        updatedExpDetails.splice(key, 1);
        this.setState({expDetails: updatedExpDetails});
    }

    skillSubmitHandler = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        let updatedSkills = [...this.state.skills];
        updatedSkills.push({
            skill: data.get('skill')
        })
        this.setState({skills: updatedSkills});
    }

    skillDeleteHandler = (key) => {
        let updatedSkills = [...this.state.skills];
        updatedSkills.splice(key, 1);
        this.setState({skills: updatedSkills});
    }

    achivSubmitHandler = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        let updatedAchivs = [...this.state.achivs];
        updatedAchivs.push({
            achiv: data.get('achiv')
        })
        this.setState({achivs: updatedAchivs});
    }

    achivDeleteHandler = (key) => {
        let updatedAchivs = [...this.state.achivs];
        updatedAchivs.splice(key, 1);
        this.setState({achivs: updatedAchivs});
    }

    

    render() {

        const formElementArray = this.state.formValues;
        let form = (
            <form>
                {formElementArray.map(formElement => (
                    <Input
                    className="form__input"
                    key={formElement.id}
                    inputType={formElement.inputType} 
                    value={formElement.value}
                    config={formElement.config}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
            </form>
        )

        const eduItemsArray = this.state.eduDetails;
        let eduItems = ( 
            <div>
                {eduItemsArray.map((eduElement, igKey) => (
                    <Item 
                    key={igKey} 
                    id={igKey} 
                    delete={this.eduDeleteHandler} 
                    qualification={eduElement.qualification}
                    institute={eduElement.institute}
                    field={eduElement.field}
                    passout={eduElement.passout}
                    grade={eduElement.grade}/>
                ))}
            </div>
        )

        const expItemsArray = this.state.expDetails;
        let expItems = ( 
            <div>
                {expItemsArray.map((expElement, igKey) => (
                    <Item 
                    key={igKey} 
                    id={igKey} 
                    delete={this.expDeleteHandler} 
                    type={expElement.type}
                    position={expElement.position}
                    organization={expElement.organization}
                    duration={expElement.duration}/>
                ))}
            </div>
        )

        const skillsArray = this.state.skills;
        let skills = ( 
            <div>
                {skillsArray.map((skillElement, igKey) => (
                    <Item key={igKey} id={igKey} delete={this.skillDeleteHandler} skill={skillElement.skill}/>
                ))}
            </div>
        )

        const achivsArray = this.state.achivs;
        let achivs = ( 
            <div>
                {achivsArray.map((achivElement, igKey) => (
                    <Item key={igKey} id={igKey} delete={this.achivDeleteHandler} skill={achivElement.achiv}/>
                ))}
            </div>
        )

        return(
            <div className={classes.MainContainer}>
            <Grid container-fluid>
                <Grid item xs={12} sm={2}>
                    <div className={classes.Container}>
                    <h2>Basic Details</h2>
                        {form}
                    </div>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <div className={classes.Container}>
                        <h2>Educational Details</h2>
                        <form onSubmit={this.eduSubmitHandler}>
                            <div className={classes.InputContainer}>
                                <input
                                className={classes.Input} 
                                placeholder="Qualification"
                                type="text"
                                name="qualification"/>
                                <input
                                className={classes.Input} 
                                placeholder="Field"
                                type="text"
                                name="field"/>
                                <input
                                className={classes.Input} 
                                placeholder="Institute"
                                type="text"
                                name="institute"/>
                                <input
                                className={classes.Input} 
                                placeholder="Passout Year"
                                type="text"
                                name="passout"/>
                                <input
                                className={classes.Input} 
                                placeholder="Percentage/GPA"
                                type="text"
                                name="grade"/>
                            </div>
                            <div className={classes.ButtonContainer}>
                                <Button disableElevation variant="contained" className={classes.Button} type="submit">Submit</Button>
                            </div>
                        </form>
                        <div className={classes.ItemContainer}>
                            {eduItems}
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <div className={classes.Container}>
                        <h2>Experience</h2>
                        <form onSubmit={this.expSubmitHandler}>
                            <div className={classes.InputContainer}>
                                <input
                                className={classes.Input} 
                                placeholder="Type"
                                type="text"
                                name="type"/>
                                <input
                                className={classes.Input} 
                                placeholder="Organization"
                                type="text"
                                name="organization"/>
                                <input
                                className={classes.Input} 
                                placeholder="Position"
                                type="text"
                                name="position"/>
                                <input
                                className={classes.Input} 
                                placeholder="Duration"
                                type="text"
                                name="duration"/>
                            </div>
                            <div className={classes.ButtonContainer}>
                                <Button  disableElevation variant="contained" className={classes.Button} type="submit">Submit</Button>
                            </div>
                        </form>
                        {expItems}
                    </div>
                </Grid>    
                <Grid item xs={12} sm={2}>
                    <div className={classes.Container}>
                        <h2>Skills</h2>
                        <form onSubmit={this.skillSubmitHandler}>
                            <div className={classes.InputContainer}>
                                <input
                                className={classes.InputSingle} 
                                placeholder="Skill"
                                type="text"
                                name="skill"/>
                            </div>
                            <div className={classes.ButtonContainer}>
                                <Button disableElevation variant="contained" className={classes.Button} type="submit">Add Skill</Button>
                            </div>
                        </form>
                        {skills}
                    </div>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <div className={classes.Container}>
                        <h2>Achievements</h2>
                        <form onSubmit={this.achivSubmitHandler}>
                            <div className={classes.InputContainer}>
                                <input
                                className={classes.InputSingle} 
                                placeholder="Achievement"
                                type="text"
                                name="achiv"/>
                            </div>
                            <div className={classes.ButtonContainer}>
                                <Button disableElevation variant="contained" className={classes.Button} type="submit">Add Achievement</Button>
                            </div>
                        </form>
                        {achivs}
                    </div>
                </Grid>
                <Grid>
                    <div className={classes.Container}>
                        <button onClick={() => {this.props.onFormSubmit(this.state)}} className={classes.Button}>Submit</button>
                    </div>
                </Grid>
            </Grid>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFormSubmit: (details) => dispatch(actions.updateDetails(details))
    }
}

export default connect(null,mapDispatchToProps)(FormConatiner);