import React from "react";
import classes from "./PizzaItem.module.css";
import { Input } from "../../UI/Input";

export const PizzaItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: 1,
          max: 5,
          step: "1",
          defaultValue: "1",
        }}
      />
      <button> + Add</button>
    </form>
  );
};
