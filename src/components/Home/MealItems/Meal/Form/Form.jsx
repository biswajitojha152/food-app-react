import React, {useRef, useContext} from 'react';
import classes from './Form.module.css';

import MealContext from '../../../../../store/index';

const Form = ({id, addToCart}) =>{
    const refContainer = useRef(null);
    const ctx = useContext(MealContext);
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        ctx.setTotalItems((prevItems)=> prevItems+parseInt(refContainer.current.value));

        addToCart(refContainer.current.value);
    }

    return(
        <form className={classes.form} onSubmit={(e)=>handleSubmit(e)}>
             <div className={classes.control}>
                    <label htmlFor={`amount-${id}`}>amount</label>
                    <input type="number" min="1" max="5" step="1" 
                    id={`amount-${id}`}
                    ref={refContainer}
                    defaultValue="1"
                    />
                </div>
                <button type="submit">+ add</button>
        </form>
    )
}

export default Form;