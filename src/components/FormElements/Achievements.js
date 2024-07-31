import React,{useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Item from '../Item/Item';
import classes from './FormElements.module.css';

const Achievements = props => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    const achivsArray = props.details;
    let achivs = (
        <div>
            {achivsArray.map((achivElement, igKey) => (
                <Item
                    key={igKey}
                    id={igKey}
                    delete={props.onDelete}
                    config="achiv"
                    achiv={achivElement.achiv} />
            ))}
        </div>
    )

    return (
        <>
            <h1 className={classes.heading}>Achievements</h1>

            <div>
                <div className={classes.Container}>
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
                    {achivs}
                </div>
            </div>
        </>
    );
}

export default Achievements;