import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const burger = (props) => {

  // __________________________________________
  // 1) the way I did it:
  // const ingredients = []
  // for (let item in props.ingredients) {
  //   for (let i = 0; i < props.ingredients[item]; i++) {
  //     ingredients.push(item)
  //   }
  // }

  // const transformedIngredients = ingredients.map((ingredient, index) => {
  //   return <BurgerIngredient key={index} type={ingredient} />
  // })


  // __________________________________________
  // 2) the way Max did it:
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, [])

    if(transformedIngredients.length === 0){
      transformedIngredients = <p>Please add ingredients!</p>
    }

    console.log('transformedIngredients: ', transformedIngredients)
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  )
}

export default burger;
