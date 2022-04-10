import {useState, useReducer, createContext} from 'react';

const MealContext = createContext();

const reducer = (state, action) =>{
    if(action.type === "ADD_ITEM"){
        
    }
    throw new Error("no matching action type.");
}

const defaultState={
    items: [],
    totalAmount: 0
};

export const MealContextProvider = (props) =>{
    const [showCart, setShowCart] = useState(false);
    const [totalItems, setTotalItems] = useState(0);
    const [state, dispatch] = useReducer(reducer, defaultState);

    const handleShowCart = (val) =>{
        setShowCart(val || !showCart);
    }
    return<MealContext.Provider value={
        {
            showCart: showCart,
            handleShowCart: handleShowCart,
            totalItems: totalItems,
            setTotalItems: setTotalItems,
            totalAmount: state.totalAmount
        }
    }>
        {props.children}
    </MealContext.Provider>
}

export default MealContext;