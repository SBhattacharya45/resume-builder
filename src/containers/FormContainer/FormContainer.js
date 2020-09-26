import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import classes from './FormContainer.module.css';
import Grid from '@material-ui/core/Grid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as actions from '../../store/actions/index';

import Education from '../../components/FormElements/Education';
import Experience from '../../components/FormElements/Experience';
import Projects from '../../components/FormElements/Projects';
import Skills from '../../components/FormElements/Skills';
import Achievements from '../../components/FormElements/Achievements';
import BasicDetails from '../../components/FormElements/BasicDetails';
import { Button } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import IconButton from '@material-ui/core/IconButton';

class FormConatiner extends Component {

    state = this.props.details;
    // state = {chosenCase : 1};

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event, key) => {
        let updatedFormElements = [
            ...this.state.formValues
        ];

        const updatedElement = {
            ...updatedFormElements[key]
        }

        updatedElement.value = event.target.value;
        updatedElement.valid = this.checkValidity(updatedElement.value, updatedElement.validation);
        updatedElement.touched = true;
        updatedFormElements[key] = updatedElement;

        let formIsValid = true;
        for (let key in updatedFormElements) {
            formIsValid = updatedFormElements[key].valid && formIsValid;
        }

        this.setState({ formValues: updatedFormElements, formIsValid: formIsValid });
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
        this.setState({ eduDetails: updatedEduDetails });
    }

    eduDeleteHandler = (key) => {
        let updatedEduDetails = [...this.state.eduDetails];
        updatedEduDetails.splice(key, 1);
        this.setState({ eduDetails: updatedEduDetails });
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
        this.setState({ expDetails: updatedExpDetails });
    }

    proSubmitHandler = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        let updatedProDetails = [...this.state.proDetails];
        updatedProDetails.push({
            type: data.get('type'),
            organization: data.get('organization'),
            position: data.get('position'),
            duration: data.get('duration')
        })
        this.setState({ proDetails: updatedProDetails });
    }

    proDeleteHandler = (key) => {
        let updatedProDetails = [...this.state.proDetails];
        updatedProDetails.splice(key, 1);
        this.setState({ proDetails: updatedProDetails });
    }

    expDeleteHandler = (key) => {
        let updatedExpDetails = [...this.state.expDetails];
        updatedExpDetails.splice(key, 1);
        this.setState({ expDetails: updatedExpDetails });
    }

    skillSubmitHandler = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        let updatedSkills = [...this.state.skills];
        updatedSkills.push({
            skill: data.get('skill')
        })
        this.setState({ skills: updatedSkills });
    }

    skillDeleteHandler = (key) => {
        let updatedSkills = [...this.state.skills];
        updatedSkills.splice(key, 1);
        this.setState({ skills: updatedSkills });
    }

    achivSubmitHandler = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        let updatedAchivs = [...this.state.achivs];
        updatedAchivs.push({
            achiv: data.get('achiv')
        })
        this.setState({ achivs: updatedAchivs });
    }

    achivDeleteHandler = (key) => {
        let updatedAchivs = [...this.state.achivs];
        updatedAchivs.splice(key, 1);
        this.setState({ achivs: updatedAchivs });
    }

    handleImageUpload = (event) => {
        event.preventDefault();
        const { files } = event.target;
        const localImageUrl = window.URL.createObjectURL(files[0]);

        this.setState({ imageUrl: localImageUrl });
    }

    formSubmitHandler = () => {
        if (this.state.formIsValid
            && this.state.eduDetails.length > 0
            && this.state.expDetails.length > 0
            && this.state.skills.length > 0
            && this.state.achivs.length > 0) {
            this.props.onFormSubmit(this.state);
            toast.success("Form submitted", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            this.props.history.push('/preview');
        } else {
            toast.error("Please fill in all required fields", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    changeChosenCaseHandler = (id) => {
        this.props.onChangeCase(id);
    }

    render() {



        let componentToBeLoaded = (<>
            <BasicDetails
                details={this.state.formValues}
                input={this.inputChangedHandler} />
            <Grid item xs={12} sm={2}>
                <div className={classes.Container}>
                    <h2 className={classes.imageHeading}>Image</h2>
                    <input type="file" accept="image/*" onChange={this.handleImageUpload} />
                </div>
            </Grid>
        </>);

        switch (this.props.Case) {
            case 1: componentToBeLoaded = (<>
                <BasicDetails
                    details={this.state.formValues}
                    input={this.inputChangedHandler} />
                <Grid item xs={12} sm={2}>
                    <div className={classes.Container}>
                        <h2>Image</h2>
                        <label className={classes.uploadImage}>
                            Upload Image
                            <input style={{ display: 'none' }} className={classes.imageLoader} type="file" accept="image/*" onChange={this.handleImageUpload} />
                        </label>
                    </div>
                </Grid>
            </>)
                break;
            case 2: componentToBeLoaded = (<Education
                onSubmit={this.eduSubmitHandler}
                details={this.state.eduDetails}
                onDelete={this.eduDeleteHandler} />)
                break;
            case 5: componentToBeLoaded = (<Experience
                onSubmit={this.expSubmitHandler}
                details={this.state.expDetails}
                onDelete={this.expDeleteHandler} />)
                break;
            case 4: componentToBeLoaded = (<Projects
                onSubmit={this.proSubmitHandler}
                details={this.state.proDetails}
                onDelete={this.proDeleteHandler} />)
                break;
            case 3: componentToBeLoaded = (<Skills
                onSubmit={this.skillSubmitHandler}
                details={this.state.skills}
                onDelete={this.skillDeleteHandler} />)
                break;
            case 6: componentToBeLoaded = (<Achievements
                onSubmit={this.achivSubmitHandler}
                details={this.state.achivs}
                onDelete={this.achivDeleteHandler} />)
                break;

            default: componentToBeLoaded = (<BasicDetails
                details={this.state.formValues}
                input={this.inputChangedHandler} />)
        }

        let navButtons = null
        if (this.props.Case === 1) {
            navButtons = <IconButton color="primary" style={{ backgroundColor: 'lightgrey', margin: '20px' }} onClick={() => this.changeChosenCaseHandler(this.props.Case + 1)}><NavigateNextIcon /> </IconButton>
        } else if (this.props.Case === 6) {
            navButtons = <IconButton style={{ backgroundColor: 'lightgrey', margin: '20px' }} color="primary" onClick={() => this.changeChosenCaseHandler(this.props.Case - 1)}><NavigateBeforeIcon /></IconButton>
        } else {
            navButtons = (<>
                <IconButton style={{ backgroundColor: 'lightgrey', margin: '20px' }} color="primary" onClick={() => this.changeChosenCaseHandler(this.props.Case - 1)}><NavigateBeforeIcon /></IconButton>
                <IconButton style={{ backgroundColor: 'lightgrey', margin: '20px' }} color="primary" onClick={() => this.changeChosenCaseHandler(this.props.Case + 1)}> <NavigateNextIcon /> </IconButton>
            </>);
        }

        return (
            <div className={classes.MainContainer}>
                <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />

                <Grid container-fluid >
                    <div style={{textAlign:'center'}}>
                        <Button variant="contained" color="primary" onClick={() => { this.changeChosenCaseHandler(1) }} >Basic Details</Button>
                        <Button variant="contained" color="primary" onClick={() => { this.changeChosenCaseHandler(2) }} >Education</Button>
                        <Button variant="contained" color="primary" onClick={() => { this.changeChosenCaseHandler(3) }} >Skills</Button>
                        <Button variant="contained" color="primary" onClick={() => { this.changeChosenCaseHandler(4) }} >Projects</Button>
                        <Button variant="contained" color="primary" onClick={() => { this.changeChosenCaseHandler(5) }} >Experience</Button>
                        <Button variant="contained" color="primary" onClick={() => { this.changeChosenCaseHandler(6) }} >Achievements</Button>
                    </div>
                    {/* have other buttons here to change case at will  */}
                    {componentToBeLoaded}
                    <div className={classes.bottomNavigationButtons}>
                        {navButtons}
                    </div>

                    {/* <Education
                        onSubmit={this.eduSubmitHandler}
                        details={this.state.eduDetails}
                        onDelete={this.eduDeleteHandler} />

                    <Experience
                        onSubmit={this.expSubmitHandler}
                        details={this.state.expDetails}
                        onDelete={this.expDeleteHandler} />

                    <Projects
                        onSubmit={this.proSubmitHandler}
                        details={this.state.proDetails}
                        onDelete={this.proDeleteHandler} />

                    <Skills
                        onSubmit={this.skillSubmitHandler}
                        details={this.state.skills}
                        onDelete={this.skillDeleteHandler} />

                    <Achievements
                        onSubmit={this.achivSubmitHandler}
                        details={this.state.achivs}
                        onDelete={this.achivDeleteHandler} /> */}

                    <Grid>
                        <div className={classes.formButtons}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={this.formSubmitHandler}
                                className={classes.Button}>SUBMIT FULL FORM</Button>
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={this.formSubmitHandler}
                                className={classes.Button}>CLEAR FORM</Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        details: state.form.details,
        Case: state.template.chosenCase
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFormSubmit: (details) => dispatch(actions.updateDetails(details)),
        onChangeCase: (chosenCase) => dispatch(actions.changeCase(chosenCase))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FormConatiner));