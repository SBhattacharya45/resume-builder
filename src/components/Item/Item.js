import React from 'react';

import classes from './Item.module.css';

const item = (props) => {
    return (
        <div className={classes.Item}>
            <span>{props.qualification}</span>
            <span onClick={() => props.delete(props.id)}>X</span>
        </div>
    )
}

export default item;