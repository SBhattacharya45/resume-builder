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
        eduDetails: [],
        expDetails: [],
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
            oragnisation: data.get('oragnization'),
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
                    <Item key={igKey} id={igKey} delete={this.eduDeleteHandler} qualification={eduElement.qualification}/>
                ))}
            </div>
        )

        const expItemsArray = this.state.expDetails;
        let expItems = ( 
            <div>
                {expItemsArray.map((expElement, igKey) => (
                    <Item key={igKey} id={igKey} delete={this.expDeleteHandler} type={expElement.type}/>
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
            <>
            <h2>Enter Your Details</h2>
            <Grid container-fluid spacing={3}>
                <Grid item xs={12} sm={2}>
                    <div className={classes.Container}>
                        {form}
                    </div>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <div className={classes.Container}>
                        <h2>Educational Details</h2>
                        <form onSubmit={this.eduSubmitHandler}>
                            <input 
                            placeholder="Qualification"
                            type="text"
                            name="qualification"/>
                            <input 
                            placeholder="Field"
                            type="text"
                            name="field"/>
                            <input 
                            placeholder="Institute"
                            type="text"
                            name="institute"/>
                            <input 
                            placeholder="Passout Year"
                            type="text"
                            name="passout"/>
                            <button type="submit">Submit</button>
                        </form>
                        {eduItems}
                    </div>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <div className={classes.Container}>
                        <h2>Experience</h2>
                        <form onSubmit={this.expSubmitHandler}>
                            <input 
                            placeholder="Type"
                            type="text"
                            name="type"/>
                            <input 
                            placeholder="Organization"
                            type="text"
                            name="organization"/>
                            <input 
                            placeholder="Position"
                            type="text"
                            name="position"/>
                            <input 
                            placeholder="Duration"
                            type="text"
                            name="Duration"/>
                            <button type="submit">Submit</button>
                        </form>
                        {expItems}
                    </div>
                </Grid>    
                <Grid item xs={12} sm={2}>
                    <div className={classes.Container}>
                        <h2>Skills</h2>
                        <form onSubmit={this.skillSubmitHandler}>
                            <input 
                            placeholder="Skill"
                            type="text"
                            name="skill"/>
                            <button type="submit">Add Skill</button>
                        </form>
                        {skills}
                    </div>
                </Grid>
            </Grid>
            </>
        )
    }
}

export default FormConatiner;