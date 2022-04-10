import React from 'react';
import Form from './Form/Form';

import classes from './Meal.module.css';

const Meal = ({id,name, desc, price}) =>{
    
    return(
        <article className={classes.meal}>
            <div className={classes["meal-info"]}>
                <h1>{name}</h1>
            <p>{desc}</p>
            <h1 className={classes.price}>${price}</h1>
            </div>
           <Form id={id}/>
        </article>
    );
}

export default Meal;