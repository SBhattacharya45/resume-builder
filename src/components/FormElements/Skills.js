import React,{useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Item from '../Item/Item';
import classes from './FormElements.module.css';

const Skills = props => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    const skillsArray = props.details;
    let skills = (
        <div>
            {skillsArray.map((skillElement, igKey) => (
                <Item
                    key={igKey}
                    id={igKey}
                    delete={props.onDelete}
                    config="skill"
                    skill={skillElement.skill} />
            ))}
        </div>
    )

    return (
        <>
            <h1 className={classes.heading}>Skills</h1>
            <div>
                <div className={classes.Container}>
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
                    <p className={classes.textNote}> At least 1 required</p>
                    {skills}
                </div>
            </div>
        </>
    );
}

export default Skills;