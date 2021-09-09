import React, { useState, useReducer } from "react";
import CartContext from "./context";

const defaultCarState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const updatedItems = state.items.concat(action.item);
        const newTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: newTotalAmount
        }
    } else {

    }
    return defaultCarState; // reducer w. logic
}

export const CartProvider = (props) => {

    const [cartState, dispatchCarAction] = useReducer(cartReducer, defaultCarState); // reducer

    const addItemToCardHandler = (item) => {
        dispatchCarAction({
            type: 'ADD_ITEM',
            item: item 
        });
    }

    const removeItemFromCardHandler = (id) => {
        dispatchCarAction({
            type: 'REMOVE_ITEM',
            id: id
        });

    }


    const cartContext = {
        items: cartState.items,
        amount: cartState.totalAmount,
        addItem: addItemToCardHandler,
        removeItem: removeItemFromCardHandler
    }

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};
