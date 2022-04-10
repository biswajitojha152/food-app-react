import React, {useState} from 'react';
import Meal from './Meal/Meal';
import Card from '../../UI/Card/Card';
import classes from './MealItems.module.css';

import {data} from '../../../data';

const MealItems = () =>{
    const [meals, setMeals] = useState(data); 
    return<Card className={classes["meal-items"]}>
        {
            meals.map(meal=>{
                return <Meal key={meal.id} {...meal}/>
            })
        }
    </Card>
}

export default MealItems;