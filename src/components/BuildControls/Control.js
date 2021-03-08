import React from 'react';
import classes from './Control.module.css';

const control = (props) => {
  const color = props.ingredient.split(' ')
  .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
  .join(' ')


  return (
    <div className={classes.Control}>
      <span>
        <button
        className={classes[color]} 
        onClick={props.fnAdd} value={props.ingredient}>+ {props.ingredient}</button>
        <button className={classes.Subtract}  onClick={props.fnSubtract} value={props.ingredient}>- {props.ingredient}</button>
      </span>
    </div>
  )
}

export default control;