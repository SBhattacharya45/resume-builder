import React,{useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Item from '../Item/Item';
import classes from './FormElements.module.css';

const Training = props => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    const trainItemsArray = props.details;
    let trainItems = (
        <div>
            {trainItemsArray.map((trainElement, igKey) => (
                <Item
                    key={igKey}
                    id={igKey}
                    delete={props.onDelete}
                    config="train"
                    type={trainElement.type}
                    description={trainElement.description}
                    from={trainElement.from}
                    to={trainElement.to} />
            ))}
        </div>
    )

    return (
        <>
            <h1 className={classes.heading}>Training</h1>
            <Grid item xs={12} sm={2}>
                <div className={classes.Container}>
                    <form onSubmit={props.onSubmit}>
                        <div >
                            <div className={classes.trainingForm}>
                                <div className={classes.inputBox}>
                                    <label>Type</label>
                                    <input
                                        className={classes.Input}
                                        placeholder="Type"
                                        type="text"
                                        name="type" required />
                                </div>

                                <div className={classes.inputBox}>
                                    <label>From</label>
                                    <input
                                        className={classes.Input}
                                        placeholder="From"
                                        type="text"
                                        name="from" required />
                                </div>
                                <div className={classes.inputBox}>
                                    <label>To</label>
                                    <input
                                        className={classes.Input}
                                        placeholder="To"
                                        type="text"
                                        name="to" required />
                                </div>
                            </div>
                            <div>
                                <div className={classes.inputBox}>
                                    <label>Description</label>
                                    <textarea
                                        className={classes.Input}
                                        placeholder="Description"
                                        name="description" required />
                                </div>
                            </div>
                        </div>
                        <div className={classes.ButtonContainer}>
                            <Button disableElevation variant="contained" className={classes.Button} type="submit">Submit</Button>
                        </div>
                    </form>
                    {trainItems}
                </div>
            </Grid>
        </>
    )

}

export default Training;