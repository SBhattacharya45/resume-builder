import React from 'react';

import classes from './Item.module.css';

const item = (props) => {
    if(props.qualification) {
        return (
            <div className={classes.Item}>
                <div className={classes.ItemDataContainer}>
                    <span className={classes.ItemData}>{props.qualification}</span>
                    <span className={classes.ItemData}>{props.field}</span>
                    <span className={classes.ItemData}>{props.institute}</span>
                    <span className={classes.ItemData}>{props.passout}</span>
                    <span className={classes.ItemData}>{props.grade}</span>
                </div>
                <span onClick={() => props.delete(props.id)}><i className={classes.CloseIcon}></i></span>
            </div>
        )
    } else if(props.type) {
        return (
            <div className={classes.Item}>
                <div className={classes.ItemDataContainer}>
                    <span className={classes.ItemData}>{props.type}</span>
                    <span className={classes.ItemData}>{props.organization}</span>
                    <span className={classes.ItemData}>{props.position}</span>
                    <span className={classes.ItemData}>{props.duration}</span>
                </div>
                <span onClick={() => props.delete(props.id)}><i className={classes.CloseIcon}></i></span>
            </div>
        )
    } else if(props.skill) {
        return (
            <div className={classes.Item}>
                <span>{props.skill}</span>
                <span onClick={() => props.delete(props.id)}><i className={classes.CloseIcon}></i></span>
            </div>
        )
    }

}

export default item;