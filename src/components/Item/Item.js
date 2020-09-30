import React from 'react';

import classes from './Item.module.css';

const item = (props) => {
    if(props.config === 'edu') {
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
    } else if(props.config === 'exp') {
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
    } else if(props.config === 'skill') {
        return (
            <div className={classes.Item}>
                <span>{props.skill}</span>
                <span onClick={() => props.delete(props.id)}><i className={classes.CloseIcon}></i></span>
            </div>
        )
    }else if(props.config === 'achiv') {
        return (
            <div className={classes.Item}>
                <span>{props.achiv}</span>
                <span onClick={() => props.delete(props.id)}><i className={classes.CloseIcon}></i></span>
            </div>
        )
    } else if(props.config === 'pro') {
        return (
            <div className={classes.Item}>
                <div className={classes.ItemDataContainer}>
                    <span className={classes.ItemData}>{props.type}</span>
                    <span className={classes.ItemData}>{props.description}</span>
                    <span className={classes.ItemData}>{props.link}</span>
                </div>
                <span onClick={() => props.delete(props.id)}><i className={classes.CloseIcon}></i></span>
            </div>
        )
    }

}

export default item;