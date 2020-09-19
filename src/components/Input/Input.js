import React from 'react';

import classes from './Input.module.css';

const input = (props) => {
    let inputElement = null;

    const inputClasses = [classes.Input];

    if(props.invalid ){
        inputClasses.push(classes.Invalid);
    }

    switch(props.inputType) {
        case "input":
            inputElement = <input
            className={inputClasses.join(' ')}
            {...props.config}
            value={props.value}
            onChange={props.changed} />;
        break;
        case "textarea":
            inputElement = <textarea
            className={inputClasses.join(' ')}
            {...props.config}
            value={props.value}
            onChange={props.changed} />;
        break;
        default:
            inputElement = <input
            className={inputClasses.join(' ')}
            {...props.config}
            value={props.value}
            onChange={props.changed} />;
    }

    return (
        <div className={classes.InputContainer}>
            {inputElement}
        </div>
    );
}

export default input;