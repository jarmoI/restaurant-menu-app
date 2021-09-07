import React, { Fragment } from "react";
import tapas from "../../assets/tapas.jpg";
import classes from "./Header.module.css";
import { HeaderCartButton } from "./HeaderCartButton";

export const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Menu</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={tapas} alt="Table full of tapas"></img>
      </div>
    </Fragment>
  );
};
