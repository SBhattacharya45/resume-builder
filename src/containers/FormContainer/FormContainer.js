import React,{Component} from 'react';

import Input from '../../components/Input/Input';
import Item from '../../components/Item/Item';
import classes from './FormContainer.module.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actions';


class FormConatiner extends Component {



    inputChangedHandler = (event, key) => {
        let updatedFormElements = [
            ...this.props.formValues
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
        let updatedEduDetails = [...this.props.eduDetails];
        updatedEduDetails.push({
            qualification: data.get('qualification'),
            institute: data.get('institute'),
            field: data.get('field'),
            passout: data.get('passout')
        })
        this.setState({eduDetails: updatedEduDetails});
    }

    eduDeleteHandler = (key) => {
        let updatedEduDetails = [...this.props.eduDetails];
        updatedEduDetails.splice(key, 1);
        this.setState({eduDetails: updatedEduDetails});
    }

    expSubmitHandler = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        let updatedExpDetails = [...this.props.expDetails];
        updatedExpDetails.push({
            type: data.get('type'),
            organization: data.get('organization'),
            position: data.get('position'),
            duration: data.get('duration')
        })
        this.setState({expDetails: updatedExpDetails});
    }

    expDeleteHandler = (key) => {
        let updatedExpDetails = [...this.props.expDetails];
        updatedExpDetails.splice(key, 1);
        this.setState({expDetails: updatedExpDetails});
    }

    skillSubmitHandler = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        let updatedSkills = [...this.props.skills];
        updatedSkills.push({
            skill: data.get('skill')
        })
        this.setState({skills: updatedSkills});
    }

    skillDeleteHandler = (key) => {
        let updatedSkills = [...this.props.skills];
        updatedSkills.splice(key, 1);
        this.setState({skills: updatedSkills});
    }

    

    render() {

        const formElementArray = this.props.formValues;
        console.log(formElementArray)
        let form = (
            <form>
                {formElementArray.map(formElement => (
                    <Input
                    className="form__input"
                    key={formElement.id}
                    inputType='input' 
                    value={formElement.value}
                    config={formElement.config}
                    label={formElement.label}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
            </form>
        )

        const eduItemsArray = this.props.eduDetails;
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

        const expItemsArray = this.props.expDetails;
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

        const skillsArray = this.props.skills;
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
                                className={classes.Input} 
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
            </Grid>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return{
        formValues : state.form.formValues,
        eduDetails : state.form.eduDetails,
        expDetails : state.form.expDetails,
        skills : state.form.skills
    }
}

const mapDispatchToProps = dispatch => {

    return{
        onInputChange : () => dispatch({type: actionTypes.INPUT_CHANGED_HANDLER })
    }
}


export default connect( mapStateToProps, mapDispatchToProps)(FormConatiner);