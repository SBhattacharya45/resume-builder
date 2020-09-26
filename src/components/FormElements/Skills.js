import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Item from '../Item/Item';
import classes from './FormElements.module.css';

const Skills = props => {

    const skillsArray = props.details;
    let skills = (
        <div>
            {skillsArray.map((skillElement, igKey) => (
                <Item key={igKey} id={igKey} delete={props.onDelete} skill={skillElement.skill} />
            ))}
        </div>
    )

    return (
        <>
        <h1 className={classes.heading}>Skills & Knowledge</h1>
        <Grid item xs={12} sm={2}>
            <div className={classes.Container}>
                <h2>Skills</h2>
                <form onSubmit={props.onSubmit}>
                    <div className={classes.InputContainer}>
                        <input
                            className={classes.InputSingle}
                            placeholder="Skill"
                            type="text"
                            name="skill" required />
                    </div>
                    <div className={classes.ButtonContainer}>
                        <Button disableElevation variant="contained" className={classes.Button} type="submit">Add Skill</Button>
                    </div>
                </form>
                <p className={classes.textDisabled}> At least 1 required</p>
                {skills}
            </div>
        </Grid>
        </>
    );
}

export default Skills;