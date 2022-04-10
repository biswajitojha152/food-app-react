import React from 'react';
import Card from '../../UI/Card/Card';

import classes from './HeroCard.module.css';

const HeroCard = () =>{
    return(
        <Card className={classes["card-main"]}>
            <h1>Delicious Food, Delivered To You</h1>
            <p className={classes["para-one"]}>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
            <p className={classes["para-two"]}>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
        </Card>
    )
}

export default HeroCard;