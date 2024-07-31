import React,{useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Item from '../Item/Item';
import classes from './FormElements.module.css';

const Education = props => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    const eduItemsArray = props.details;
    let eduItems = ( 
        <div>
            {eduItemsArray.map((eduElement, igKey) => (
                <Item 
                key={igKey} 
                id={igKey}
                config="edu" 
                delete={props.onDelete} 
                qualification={eduElement.qualification}
                institute={eduElement.institute}
                field={eduElement.field}
                passout={eduElement.passout}
                grade={eduElement.grade}/>
            ))}
        </div>
    )

    return (
        <>
        <h1 className={classes.heading}>Educational Qualification</h1>
        <div>
                    <div className={classes.Container}>
                        <form onSubmit={props.onSubmit}>
                            <div className={classes.InputContainer}>
                                <div className= {classes.inputBox}>
                                    <label>Qualification</label>
                                    <input
                                    className={classes.Input} 
                                    placeholder="Qualification"
                                    type="text"
                                    id= "qualification"
                                    name="qualification" required/>
                                </div>
                                <div className= {classes.inputBox}>
                                    <label>Field</label>
                                    <input
                                    className={classes.Input} 
                                    placeholder="Field"
                                    type="text"
                                    id= "field"
                                    name="field" required/>
                                </div>
                                <div className= {classes.inputBox}>
                                    <label>Institution</label>
                                    <input
                                    className={classes.Input} 
                                    placeholder="Institute"
                                    type="text"
                                    name="institute" required/>
                                </div>
                                
                                <div className= {classes.inputBox}>
                                    <label>Passout Year</label>
                                    <input
                                    className={classes.Input} 
                                    placeholder="Passout Year"
                                    type="text"
                                    name="passout" required/>
                                </div>
                                <div  className= {classes.inputBox}>
                                    <label>Percentage</label>
                                    <input
                                    className={classes.Input} 
                                    placeholder="Percentage/GPA"
                                    type="text"
                                    name="grade" required/>
                                </div>
                            </div>
                            <div className={classes.ButtonContainer}>
                                <Button disableElevation variant="contained" className={classes.Button} type="submit">Submit</Button>
                            </div>
                        </form>
                        <p className={classes.textNote}> At least 1 required</p>
                        <div className={classes.ItemContainer}>
                            {eduItems}
                        </div>
                    </div>
                </div>
                </>
    )
}

export default Education;