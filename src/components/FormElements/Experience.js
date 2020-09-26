import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Item from '../Item/Item';
import classes from './FormElements.module.css';

const Experience = props => {

    const expItemsArray = props.details;
    let expItems = (
        <div>
            {expItemsArray.map((expElement, igKey) => (
                <Item
                    key={igKey}
                    id={igKey}
                    delete={props.onDelete}
                    type={expElement.type}
                    position={expElement.position}
                    organization={expElement.organization}
                    duration={expElement.duration} />
            ))}
        </div>
    )

    return (
        <>
            <h1 className={classes.heading}>Experience & Training</h1>
            <Grid item xs={12} sm={2}>
                <div className={classes.Container}>
                    <h2>Experience</h2>
                    <form onSubmit={props.onSubmit}>
                        <div className={classes.InputContainer}>
                            <div className={classes.inputBox}>
                                <label>Type</label>
                                <input
                                    className={classes.Input}
                                    placeholder="Type"
                                    type="text"
                                    name="type" required />
                            </div>
                            <div className={classes.inputBox}>
                                <label>Organization</label>
                                <input
                                    className={classes.Input}
                                    placeholder="Organization"
                                    type="text"
                                    name="organization" required />
                            </div>
                            <div className={classes.inputBox}>
                                <label>Position</label>
                                <input
                                    className={classes.Input}
                                    placeholder="Position"
                                    type="text"
                                    name="position" required />
                            </div>
                            <div className={classes.inputBox}>
                                <label>Duration</label>
                                <input
                                    className={classes.Input}
                                    placeholder="Duration"
                                    type="text"
                                    name="duration" required />
                            </div>
                        </div>
                        <div className={classes.ButtonContainer}>
                            <Button disableElevation variant="contained" className={classes.Button} type="submit">Submit</Button>
                        </div>
                    </form>
                    <p className={classes.textDisabled}> At least 1 required</p>
                    {expItems}
                </div>
            </Grid>
        </>
    )
}

export default Experience;