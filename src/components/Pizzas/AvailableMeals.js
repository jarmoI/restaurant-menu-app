import React from "react";
import classes from "./AvailableMeals.module.css";
import { Card } from "../UI/Card";
import { PizzaItem } from "./PizzaItem/PizzaItem";

const pizzasList = [
  {
    id: "m1",
    name: "Margherita",
    description: "Tomato sauce and cheese",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Funghi",
    description: "Chesse and ham",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Capriciosa",
    description: "Cheese, ham, tomato, and mushrooms",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Vege",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

export const AvailableMeals = (props) => {
  const pizzas = pizzasList.map((pizza) => (
    <PizzaItem
      id={pizza.id}
      key={pizza.id}
      name={pizza.name}
      description={pizza.description}
      price={pizza.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{pizzas}</ul>
      </Card>
    </section>
  );
};
