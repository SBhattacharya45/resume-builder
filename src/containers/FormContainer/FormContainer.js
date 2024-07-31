import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {storage} from "../../firebase/firebase";
import classes from './FormContainer.module.css';
import Grid from '@material-ui/core/Grid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as actions from '../../store/actions/index';

import Education from '../../components/FormElements/Education';
import Experience from '../../components/FormElements/Experience';
import Projects from '../../components/FormElements/Projects';
import Training from '../../components/FormElements/Training';
import Skills from '../../components/FormElements/Skills';
import Achievements from '../../components/FormElements/Achievements';
import BasicDetails from '../../components/FormElements/BasicDetails';
import { Button } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import IconButton from '@material-ui/core/IconButton';

class FormConatiner extends Component {

    state = this.props.details;
    imgName = null;
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
            name: data.get('name'),
            description: data.get('description'),
            link: data.get('link')
        })
        this.setState({ proDetails: updatedProDetails });
    }

    proDeleteHandler = (key) => {
        let updatedProDetails = [...this.state.proDetails];
        updatedProDetails.splice(key, 1);
        this.setState({ proDetails: updatedProDetails });
    }

    trainSubmitHandler = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        let updatedTrainDetails = [...this.state.trainDetails];
        updatedTrainDetails.push({
            type: data.get('type'),
            description: data.get('description'),
            from: data.get('from'),
            to: data.get('to')
        })
        this.setState({ trainDetails: updatedTrainDetails });
    }

    trainDeleteHandler = (key) => {
        let updatedTrainDetails = [...this.state.trainDetails];
        updatedTrainDetails.splice(key, 1);
        this.setState({ trainDetails: updatedTrainDetails });
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
        const uploadTask = storage.ref(`/images/${files[0].name}`).put(files[0])
        //initiates the firebase side uploading 
        uploadTask.on('state_changed', 
        (snapShot) => {
          //takes a snap shot of the process as it is happening
          console.log(snapShot)
        }, (err) => {
          //catches the errors
          console.log(err)
        }, () => {
          // gets the functions from storage refences the image storage in firebase by the children
          // gets the download url then sets the image from firebase as the value for the imgUrl key:
          storage.ref('images').child(files[0].name).getDownloadURL()
           .then(fireBaseUrl => {
            this.imgName = files[0].name;
            this.setState({ imageUrl: fireBaseUrl });
           })
        })
    }

    formSubmitHandler = () => {
        if (this.state.formIsValid
            && this.state.eduDetails.length > 0
            && this.state.skills.length > 0) {
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

    changeChosenSelectHandler = (event) => {
        this.changeChosenCaseHandler(parseInt(event.target.value))
    }

    render() {



        let componentToBeLoaded = (<>
            <BasicDetails
                details={this.state.formValues}
                input={this.inputChangedHandler} />
            <div>
                <div className={classes.Container}>
                <h2>Profile Image</h2>
                        <label className={classes.uploadImage}>
                            Click here to upload
                            <input style={{ display: 'none' }} className={classes.imageLoader} type="file" accept="image/*" onChange={this.handleImageUpload} />
                    </label>
                </div>
            </div>
        </>);

        switch (this.props.Case) {
            case 1: componentToBeLoaded = (<>
                <BasicDetails
                    details={this.state.formValues}
                    input={this.inputChangedHandler} />
                <div>
                    <div className={classes.Container}>
                    <h2>Profile Image</h2>
                        <label className={classes.uploadImage}>
                            Click here to upload
                            &nbsp;
                            {this.imgName ? this.imgName : null}
                            <input style={{ display: 'none' }} className={classes.imageLoader} type="file" accept="image/*" onChange={this.handleImageUpload} />
                        </label>
                    </div>
                </div>
            </>)
                break;
            case 2: componentToBeLoaded = (<Education
                onSubmit={this.eduSubmitHandler}
                details={this.state.eduDetails}
                onDelete={this.eduDeleteHandler} />)
                break;
            case 6: componentToBeLoaded = (<Experience
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
            case 7: componentToBeLoaded = (<Achievements
                onSubmit={this.achivSubmitHandler}
                details={this.state.achivs}
                onDelete={this.achivDeleteHandler} />)
                break;
            case 5: componentToBeLoaded = (<Training
                onSubmit={this.trainSubmitHandler}
                details={this.state.trainDetails}
                onDelete={this.trainDeleteHandler} />)
                break;

            default: componentToBeLoaded = (<>
                <BasicDetails
                    details={this.state.formValues}
                    input={this.inputChangedHandler} />
                <div>
                    <div className={classes.Container}>
                        <h2>Profile Image</h2>
                        <label className={classes.uploadImage}>
                            Click here to upload
                        <input style={{ display: 'none' }} className={classes.imageLoader} type="file" accept="image/*" onChange={this.handleImageUpload} />
                        </label>
                    </div>
                </div>
            </>)
        }

        let navButtons = null
        if (this.props.Case === 1) {
            navButtons = <IconButton color="primary" style={{ backgroundColor: '#fff', border: '1px solid lightgray', margin: '20px' }} onClick={() => { this.changeChosenCaseHandler(this.props.Case + 1); window.scrollTo(0, 0) }}><NavigateNextIcon /> </IconButton>
        } else if (this.props.Case === 7) {
            navButtons = <IconButton style={{ backgroundColor: '#fff', border: '1px solid lightgray', margin: '20px' }} color="primary" onClick={() => { this.changeChosenCaseHandler(this.props.Case - 1); window.scrollTo(0, 0) }}><NavigateBeforeIcon /></IconButton>
        } else {
            navButtons = (<>
                <IconButton style={{ backgroundColor: '#fff', border: '1px solid lightgray', margin: '20px' }} color="primary" onClick={() => this.changeChosenCaseHandler(this.props.Case - 1)}><NavigateBeforeIcon /></IconButton>
                <IconButton style={{ backgroundColor: '#fff', border: '1px solid lightgray', margin: '20px' }} color="primary" onClick={() => this.changeChosenCaseHandler(this.props.Case + 1)}> <NavigateNextIcon /> </IconButton>
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

                <div className={classes.formWrapper} >
                    <div className={classes.formTabs}>
                        <Button variant="contained" color="primary" className={(this.props.Case === 1 ? 'activeButton' : '')} onClick={() => { this.changeChosenCaseHandler(1) }} >Basic Details</Button>
                        <Button variant="contained" color="primary" className={(this.props.Case === 2 ? 'activeButton' : '')} onClick={() => { this.changeChosenCaseHandler(2) }} >Education</Button>
                        <Button variant="contained" color="primary" className={(this.props.Case === 3 ? 'activeButton' : '')} onClick={() => { this.changeChosenCaseHandler(3) }} >Skills</Button>
                        <Button variant="contained" color="primary" className={(this.props.Case === 4 ? 'activeButton' : '')} onClick={() => { this.changeChosenCaseHandler(4) }} >Projects</Button>
                        <Button variant="contained" color="primary" className={(this.props.Case === 5 ? 'activeButton' : '')} onClick={() => { this.changeChosenCaseHandler(5) }} >Training</Button>
                        <Button variant="contained" color="primary" className={(this.props.Case === 6 ? 'activeButton' : '')} onClick={() => { this.changeChosenCaseHandler(6) }} >Experience</Button>
                        <Button variant="contained" color="primary" className={(this.props.Case === 7 ? 'activeButton' : '')} onClick={() => { this.changeChosenCaseHandler(7) }} >Achievements</Button>
                    </div>
                    <div className={classes.formTabsSelect}>
                        <select onChange={this.changeChosenSelectHandler}>
                            <option value="1">Basic Details</option>
                            <option value="2">Education</option>
                            <option value="3">Skills</option>
                            <option value="4">Projects</option>
                            <option value="5">Training</option>
                            <option value="6">Experience</option>
                            <option value="7">Achievements</option>
                        </select>
                    </div>
                    {/* have other buttons here to change case at will  */}
                    <div className={classes.sectionWrapper}>{componentToBeLoaded}</div>
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
                </div>
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