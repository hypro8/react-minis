import React from "react";

const reducer = (state, action) => {
  if (action.type === "CLEAR-CART") {
    return { ...state, cart: [] };
  }

  if (action.type === "REMOVE") {
    const newCart = state.cart.filter(
      (cartItem) => cartItem.id !== action.payload
      // ! NOT payload.id, ONLY payload
      // NOT this:
      // (cartItem) => cartItem.id !== action.payload.id
    );
    return { ...state, cart: newCart };
  }

  if (action.type === "INCREASE_AMOUNT") {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === "DECREASE_AMOUNT") {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          // if (cartItem.amount <= 0) {
          //   return cartItem;
          // }
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }

  if (action.type === "GET_TOTALS") {
    // let total_Amount = state.cart.reduce(
    let totalAmount = state.cart.reduce(
      // (cartTotal, cartItem) => {
      ({ totalBasket, totalAmount }, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        totalBasket += itemTotal;
        totalAmount += amount;
        console.log("total, amount", totalBasket, totalAmount);
        return { totalBasket, totalAmount };

        // cartTotal.total += itemTotal;
        // cartTotal.amount += amount;
        // return cartTotal;
      },
      {
        totalBasket: 0,
        totalAmount: 0,
      }
    );
    totalAmount.totalBasket = parseFloat(totalAmount.totalBasket.toFixed(2));
    // console.log(total_Amount);

    console.log("state.total: ", state.total);
    console.log("state.amount: ", state.amount);
    // let total = total_Amount.totalBasket;
    // let amount = total_Amount.totalAmount;
    // console.log("state.total: ", total, amount);
    return {
      ...state,
      total: totalAmount.totalBasket,
      amount: totalAmount.totalAmount,
    };
  }

  return state;
};

export default reducer;
