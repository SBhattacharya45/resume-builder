import React from 'react';

import classes from './Input.module.css';

const input = (props) => {
    let inputElement = null;

    const inputClasses = [classes.Input];

    if(props.invalid && props.touched){
        inputClasses.push(classes.Invalid);
    }

    switch(props.inputType) {
        case "input":
    inputElement =<div className={classes.inputDiv}> 
            <label  className={classes.label}>{props.config.label}</label> 
            <input
            className={inputClasses.join(' ')}
            {...props.config}
            value={props.value}
            onChange={props.changed} />
            </div>;
        break;
        case "textarea":
            inputElement = <div className={classes.inputDiv}>
            <label className={classes.label}>{props.config.label}</label> 
            <textarea
            className={inputClasses.join(' ')}
            {...props.config}
            value={props.value}
            onChange={props.changed} />
            </div>;
        break;
        default:
            inputElement = <div className={classes.inputDiv}>
            <label className={classes.label}>{props.config.label}</label> 
            <input
            className={inputClasses.join(' ')}
            {...props.config}
            value={props.value}
            onChange={props.changed} />
            </div>;
    }

    return (
        <div className={classes.InputContainer}>
            {inputElement}
        </div>
    );
}

export default input;