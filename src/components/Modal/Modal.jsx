import React, {useContext} from 'react';
import { Backdrop } from "@mui/material";
import Card from '../UI/Card/Card';
import Cart from './Cart/Cart';
import classes from "./Modal.module.css";

import MealContext from '../../store';

const Modal = () =>{
    const ctx = useContext(MealContext);
    return(
        <Backdrop open={true}>
            <Card className={classes.modal}>
            <Cart />
            </Card>
        </Backdrop>
    )
}

export default Modal;