import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Item from '../Item/Item';
import classes from './FormElements.module.css';

const Achievements = props => {

    const achivsArray = props.details;
    let achivs = (
        <div>
            {achivsArray.map((achivElement, igKey) => (
                <Item key={igKey} id={igKey} delete={props.onDelete} skill={achivElement.achiv} />
            ))}
        </div>
    )

    return (
        <React.Fragment>
            <h1 className={classes.heading}>Achievements</h1>

            <Grid item xs={12} sm={2}>
                <div className={classes.Container}>
                    <h2>Achievements</h2>
                    <form onSubmit={props.onSubmit}>
                        <div className={classes.InputContainer}>
                            <input
                                className={classes.InputSingle}
                                placeholder="Achievement"
                                type="text"
                                name="achiv" required />
                        </div>
                        <div className={classes.ButtonContainer}>
                            <Button disableElevation variant="contained" className={classes.Button} type="submit">Add Achievement</Button>
                        </div>
                    </form>
                    <p className={classes.textDisabled}> At least 1 required</p>
                    {achivs}
                </div>
            </Grid>
        </React.Fragment>
    );
}

export default Achievements;