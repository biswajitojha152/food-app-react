import React, {useContext} from 'react';
import Form from './Form/Form';
import MealContext from '../../../../store';
import classes from './Meal.module.css';

const Meal = ({id,name, desc, price}) =>{
    const ctx = useContext(MealContext);
    const addToCart = (number) =>{
        ctx.addItem(
            {
                id: id,
                name: name,
                price: price,
                amount: parseInt(number)
            }
        )
    }
    return(
        <article className={classes.meal}>
            <div className={classes["meal-info"]}>
                <h1>{name}</h1>
            <p>{desc}</p>
            <h1 className={classes.price}>${price}</h1>
            </div>
           <Form id={id} addToCart ={addToCart}/>
        </article>
    );
}

export default Meal;