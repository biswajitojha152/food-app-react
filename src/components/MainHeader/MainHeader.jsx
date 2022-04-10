import React, {useContext} from "react";
import { FaShoppingCart } from "react-icons/fa";

import classes from "./MainHeader.module.css";

import MealContext from "../../store";

const MainHeader = () => {
  const ctx = useContext(MealContext);
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <h1>ReactMeals</h1>
        <button className={classes["cart-btn"]} onClick={()=> ctx.handleShowCart(true)}>
          <span className={classes["cart-btn-icon"]}>
            < FaShoppingCart/>
          </span>
          <span className={classes["cart-btn-text"]}>your cart</span>
          <span className={classes["cart-btn-num"]}>{ctx.totalItems}</span>
        </button>
      </nav>
    </header>
  );
};

export default MainHeader;
