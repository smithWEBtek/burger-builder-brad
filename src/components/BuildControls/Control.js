import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Control.module.css';

const control = (props) => {
  return (
    <div className={classes.Control}>
      <span>
        <button className={classes.Add} onClick={props.fnAdd} value={props.ingredient}>+ {props.ingredient}</button>
        <button className={classes.Subtract}  onClick={props.fnSubtract} value={props.ingredient}>- {props.ingredient}</button>
      </span>
    </div>
  )
}

export default control;