import {useState, useReducer, createContext} from 'react';

const MealContext = createContext();

const reducer = (state, action) =>{
    if(action.type === "ADD_ITEM"){
        const newItem = action.payload;
        const existingIndex = state.items.findIndex((item)=> item.id === newItem.id);
        const existingItem = state.items[existingIndex];
        if(existingIndex !== -1 && existingItem){
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount+newItem.amount
            }
            const updatedItems = [
                ...state.items
            ]
            updatedItems[existingIndex] = updatedItem;

            return {
                items: updatedItems,
                totalAmount: state.totalAmount+action.payload.price * action.payload.amount 
            }
        }
        
       
        return {
            items: [...state.items, newItem],
            totalAmount: state.totalAmount+newItem.price * newItem.amount 
        };
    }

    if(action.type === "REMOVE_ITEM"){
        const id = action.payload;
        const existingIndex = state.items.findIndex((item)=> item.id === id);
        const existingItem = state.items[existingIndex];
        const updatedItem ={
            ...existingItem,
            amount: existingItem.amount-1
        } 

        if(updatedItem.amount === 0){
            const newItems = state.items.filter(item=>item.id !== id);
            return {
                items: newItems,
                totalAmount: Math.abs(state.totalAmount - updatedItem.price)
            }
        }
        
        const updatedItems = [...state.items];
        updatedItems[existingIndex] = updatedItem;

        return{
            items: updatedItems,
            totalAmount: state.totalAmount-updatedItem.price
        }
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

    const addItemHandler = (newItem) =>{
        dispatch({type: "ADD_ITEM", payload: newItem})
    }

    const removeItemHandler = (itemId) =>{
        dispatch({type: "REMOVE_ITEM", payload: itemId});
    }
    return<MealContext.Provider value={
        {
            showCart: showCart,
            handleShowCart: handleShowCart,
            totalItems: totalItems,
            setTotalItems: setTotalItems,
            cartItems: state.items,
            totalAmount: state.totalAmount,
            addItem: addItemHandler,
            removeItem: removeItemHandler
        }
    }>
        {props.children}
    </MealContext.Provider>
}

export default MealContext;