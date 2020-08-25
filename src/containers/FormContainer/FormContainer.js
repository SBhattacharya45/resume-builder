import React,{Component} from 'react';

import Input from '../../components/Input/Input';
import Item from '../../components/Item/Item';
import classes from './FormContainer.module.css';
import Grid from '@material-ui/core/Grid';


class FormConatiner extends Component {

    state = {
        formValues: [
            {
                id: 0,
                value: '',
                config: {
                    type: 'text', 
                    placeholder: 'First Name',
                },
                label: 'First Name'
            },
            {
                id: 1,
                value: '',
                config: {
                    type: 'text', 
                    placeholder: 'Last Name'
                },
                label: 'Last Name'
            },            
            {
                id: 2,
                value: '',
                config: {
                    type: 'text', 
                    placeholder: 'City'
                },
                label: 'City'
            },            
            {
                id: 3,
                value: '',
                config: {
                    type: 'text', 
                    placeholder: 'State'
                },
                label: 'State'
            },            
            {
                id: 4,
                value: '',
                config: {
                    type: 'text', 
                    placeholder: 'Pincode'
                },
                label: 'Pincode'
            },            
            {
                id: 5,
                value: '',
                config: {
                    type: 'email', 
                    placeholder: 'Enter your mail'
                },
                label: 'E-mail'
            },            
            {
                id: 6,
                value: '',
                config: {
                    type: 'text', 
                    placeholder: 'Enter your phone number'
                },
                label: 'Phone'
            }
        ],
        eduDetails: [{
            qualification: "B.Tech",
            institute: 'Heritage Institute of Technology',
            field: 'Electronics',
            passout: '2022'
        }],
        expDetails: [{
            type: 'Internship',
            organization: 'OrangeInk',
            position: 'Web Developer',
            duration: '2 months'
        }],
        skills: []
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
            passout: data.get('passout')
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

    

    render() {

        const formElementArray = this.state.formValues;
        let form = (
            <form>
                {formElementArray.map(formElement => (
                    <Input
                    key={formElement.id}
                    inputType='input' 
                    value={formElement.value}
                    config={formElement.config}
                    label={formElement.label}
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
                    passout={eduElement.passout}/>
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
                            </div>
                            <div className={classes.ButtonContainer}>
                                <button className={classes.Button} type="submit">Submit</button>
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
                                <button className={classes.Button} type="submit">Submit</button>
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
                                className={classes.Input} 
                                placeholder="Skill"
                                type="text"
                                name="skill"/>
                            </div>
                            <div className={classes.ButtonContainer}>
                                <button className={classes.Button} type="submit">Add Skill</button>
                            </div>
                        </form>
                        {skills}
                    </div>
                </Grid>
            </Grid>
            </div>
        )
    }
}

export default FormConatiner;