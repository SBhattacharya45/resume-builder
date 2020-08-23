import React from 'react';

// import classes from './Input.module.css';

const input = (props) => {
    let inputElement = null;

    switch(props.inputType) {
        case ( 'input' ):
            inputElement = <input
                value={props.value}
                {...props.config}
                onChange={props.changed} />;
            break;
        default:
            inputElement = <input
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div>
            <label>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;