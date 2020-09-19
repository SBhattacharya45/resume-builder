import React,{Component} from 'react';
import { connect } from 'react-redux';
import Input from '../../components/Input/Input';
import Item from '../../components/Item/Item';
import classes from './FormContainer.module.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
                },
                validation: {
                    required: true
                },
                valid: false,
                touched : false
            },
            {
                id: 1,
                inputType: 'input',
                value: '',
                config: {
                    type: 'text', 
                    placeholder: 'Last Name'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched : false
            },            
            {
                id: 2,
                inputType: 'input',
                value: '',
                config: {
                    type: 'text', 
                    placeholder: 'City'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched : false
            },            
            {
                id: 3,
                inputType: 'input',
                value: '',
                config: {
                    type: 'text', 
                    placeholder: 'State'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched : false
            },            
            {
                id: 4,
                inputType: 'input',
                value: '',
                config: {
                    type: 'text', 
                    placeholder: 'Pincode'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched : false
            },            
            {
                id: 5,
                inputType: 'input',
                value: '',
                config: {
                    type: 'email', 
                    placeholder: 'Enter your mail'
                },
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched : false
            },            
            {
                id: 6,
                inputType: 'input',
                value: '',
                config: {
                    type: 'text', 
                    placeholder: 'Enter your phone number'
                },
                validation: {
                    required: true,
                    isNumeric: true
                },
                valid: false,
                touched : false
            },
            {
                id: 7,
                inputType: "textarea",
                value: '',
                config: {
                    type: 'text', 
                    placeholder: 'Enter your statement'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched : false
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
        achivs: [],
        imageUrl: null,
        formIsValid: false
    }

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
        updatedElement.touched= true;
        updatedFormElements[key] = updatedElement;

        let formIsValid = true;
        for (let key in updatedFormElements) {
            formIsValid = updatedFormElements[key].valid && formIsValid;
        }

        this.setState({formValues: updatedFormElements, formIsValid: formIsValid});
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

    handleImageUpload = (event) => {
        event.preventDefault();
        const { files } = event.target;
        const localImageUrl =  window.URL.createObjectURL(files[0]);
       
        this.setState({imageUrl: localImageUrl});
    }

    formSubmitHandler = () => {
        if(this.state.formIsValid 
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
                
        } else {
            toast.error("Please fill in all required fields",{
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
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
                    invalid= {!formElement.valid }
                    touched= {formElement.touched}
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
            <Grid container-fluid>
                <Grid item xs={12} sm={2}>
                    <div className={classes.Container}>
                    <h2>Basic Details</h2>
                        {form}
                    </div>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <div className={classes.Container}>
                    <h2>Image</h2>
                        <input type="file" accept="image/*" onChange={this.handleImageUpload}/>
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
                                id= "qualification"
                                name="qualification"/>
                                <input
                                className={classes.Input} 
                                placeholder="Field"
                                type="text"
                                id= "field"
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
                        <p className={classes.textDisabled}> At least 1 required</p>
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
                        <p className={classes.textDisabled}> At least 1 required</p>
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
                        <p className={classes.textDisabled}> At least 1 required</p>
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
                        <p className={classes.textDisabled}> At least 1 required</p>
                        {achivs}
                    </div>
                </Grid>
                <Grid>
                    <div className={classes.Container}>
                        <button 
                        onClick={this.formSubmitHandler} 
                        className={classes.Button}>Submit</button>
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