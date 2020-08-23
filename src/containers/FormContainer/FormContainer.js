import React,{Component} from 'react';

import Input from '../../components/Input/Input';


class FormConatiner extends Component {

    state = {
        formValues: [
            {
                value: '',
                config: {
                    type: 'text', 
                    placeholder: 'First Name'
                },
                label: 'First Name'
            },
            {
                value: '',
                config: {
                    type: 'text', 
                    placeholder: 'Last Name'
                },
                label: 'Last Name'
            },
        ]
    }

    inputChangedHandler = (event) => {

    }

    render() {

        const formElementArray = this.state.formValues;
        let form = (
            <form>
                {formElementArray.map(formElement => (
                    <Input
                    inputType='text' 
                    value={formElement.value}
                    config={formElement.config}
                    label={formElement.label} />
                ))}
            </form>
        )

        return(
            <div>
                {form}
            </div>
        )
    }
}

export default FormConatiner;