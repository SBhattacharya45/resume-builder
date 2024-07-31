import React,{useEffect} from 'react';
import Grid from '@material-ui/core/Grid';

import Input from '../Input/Input'
import classes from './FormElements.module.css';

const BasicDetails = props => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    const formElementArray = props.details;
    let form = (
        <form>
            {formElementArray.map(formElement => (
                <Input
                    
                    key={formElement.id}
                    inputType={formElement.inputType}
                    value={formElement.value}
                    config={formElement.config}
                    invalid={!formElement.valid}
                    touched={formElement.touched}
                    changed={(event) => props.input(event, formElement.id)} />
            ))}
        </form>
    )

    return (
        <React.Fragment>
            <h1 className= {classes.heading}>Personal Details</h1>
            <div classsName={classes.gridController}>
                <div className={classes.Container}>
                    {form}
                </div>
            </div>
        </React.Fragment>
    );
}

export default BasicDetails;