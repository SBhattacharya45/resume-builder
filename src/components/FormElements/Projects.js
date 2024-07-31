import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Item from '../Item/Item';
import classes from './FormElements.module.css';

const Projects = props => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const proItemsArray = props.details;
    let proItems = (
        <div>
            {proItemsArray.map((proElement, igKey) => (
                <Item
                    key={igKey}
                    id={igKey}
                    delete={props.onDelete}
                    config="pro"
                    type={proElement.type}
                    description={proElement.description}
                    link={proElement.link} />
            ))}
        </div>
    )

    return (
        <>
            <h1 className={classes.heading}>Projects</h1>
            <div>
                <div className={classes.Container}>
                    <form onSubmit={props.onSubmit}>
                        <div>
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
                                    <label>Name</label>
                                    <input
                                        className={classes.Input}
                                        placeholder="Name"
                                        type="text"
                                        name="name" required />
                                </div>

                                <div className={classes.inputBox}>
                                    <label>Link</label>
                                    <input
                                        className={classes.Input}
                                        placeholder="Link"
                                        type="text"
                                        name="link" required />
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
                    {proItems}
                </div>
            </div>
        </>
    )

}

export default Projects;