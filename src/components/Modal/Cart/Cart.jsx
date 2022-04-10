import React, {useContext} from 'react';
import classes from "./Cart.module.css";

import MealContext from '../../../store';

import SingleCartItem from './SingleCartItem/SingleCartItem';

const Cart = () =>{
    const ctx = useContext(MealContext);
    
    return(
        <>
            <div className={classes.scroll}>
                {
                ctx.cartItems.map((item)=>{
                    return <SingleCartItem key={item.id} {...item}/>
                })
            }
            </div>
            <div className={classes["total-section"]}>
                <h1>total amount</h1>
                <h1>${ctx.totalAmount.toFixed(2)}</h1>
            </div>
            <div className={classes["btn-container"]}>
                <button className={`${classes.btn} ${classes["btn-close"]}`} onClick={()=>ctx.handleShowCart()}>close</button>
                {ctx.totalItems > 0 ? <button className={`${classes.btn} ${classes["btn-order"]}`}onClick={()=>console.log("Ordering...")}>order</button> : null}
            </div>
        </>
    )
}

export default Cart;