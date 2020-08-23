import React,{Component} from 'react';

import Input from '../../components/Input/Input';
import classes from './FormContainer.module.css';


class FormConatiner extends Component {

    state = {
        formValues: [
            {
                id: 0,
                value: '',
                config: {
                    type: 'text', 
                    placeholder: 'First Name'
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
        eduDetails: []
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

        return(
            <div className={classes.Container}>
                <h3>Enter Your Details</h3>
                {form}
                <div>
                    <input type="text" placeholder="Qualification" />
                    <input type="text" placeholder="Institute" />
                    <input type="text" placeholder="Field" />
                    <input type="text" placeholder="Passout Year" />
                </div>
            </div>
        )
    }
}

export default FormConatiner;