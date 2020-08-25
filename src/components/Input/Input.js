import React from 'react';

import classes from './Input.module.css';

const input = (props) => {
    let inputElement = null;

    inputElement = <input
        className={classes.Input}
        {...props.config}
        value={props.value}
        onChange={props.changed} />;

    return (
        <div className={classes.InputContainer}>
            <label>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;