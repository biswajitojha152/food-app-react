import React, {useContext} from 'react';
import classes from './SingleCartItem.module.css';

import MealContext from '../../../../store';

const SingleCartItem = ({id, name, price, amount}) =>{
    const ctx = useContext(MealContext);

    const addAmount = () =>{
        ctx.addItem({
            id: id,
            price: price,
            amount: 1
        });
        ctx.setTotalItems((prev)=>prev+1);
    }

    const removeAmount = () =>{
        ctx.removeItem(id);
        ctx.setTotalItems((prev)=>prev-1);
    }
    return(
        <article className={classes["single-cart-item"]}>
            <header className={classes.header}>
                <h1>{name}</h1>
                <button className={`${classes["remove-btn"]} ${classes.btn}`} onClick={removeAmount}>-</button>
            </header>
            <footer className={classes.footer}>
                <h3 className={classes.price}>${price}</h3>
                <h3 className={classes.amount}>X {amount}</h3>
                <button className={`${classes["add-btn"]} ${classes.btn}`} onClick={addAmount}>+</button>
            </footer>
        </article>
    )
}

export default SingleCartItem;