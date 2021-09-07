import React from "react";
import classes from "./PizzaItem.module.css";

export const PizzaItem = (props) => {
    
  const price = `$ ${props.price.toFixed(2)}`;

  return (
    <li>
      <div className={classes.pizza}>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
};
