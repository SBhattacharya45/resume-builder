import React from 'react';

import classes from './Item.module.css';

const item = (props) => {
    if(props.qualification) {
        return (
            <div className={classes.Item}>
                <span>{props.qualification}</span>
                <span onClick={() => props.delete(props.id)}>X</span>
            </div>
        )
    } else if(props.type) {
        return (
            <div className={classes.Item}>
                <span>{props.type}</span>
                <span onClick={() => props.delete(props.id)}>X</span>
            </div>
        )
    } else if(props.skill) {
        return (
            <div className={classes.Item}>
                <span>{props.skill}</span>
                <span onClick={() => props.delete(props.id)}>X</span>
            </div>
        )
    }

}

export default item;