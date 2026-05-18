import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: []
};

const cartSlice = createSlice({

  name: "cart",

  initialState,

  reducers: {

    addItem: (state, action) => {

      const item = state.cart.find(
        (plant) => plant.id === action.payload.id
      );

      if (item) {

        item.quantity += 1;

      } else {

        state.cart.push({
          ...action.payload,
          quantity: 1
        });

      }

    },

    removeItem: (state, action) => {

      state.cart = state.cart.filter(
        (item) => item.id !== action.payload
      );

    },

    incrementQuantity: (state, action) => {

      const item = state.cart.find(
        (plant) => plant.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }

    },

    decrementQuantity: (state, action) => {

      const item = state.cart.find(
        (plant) => plant.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }

    }

  }

});

export const {
  addItem,
  removeItem,
  incrementQuantity,
  decrementQuantity
} = cartSlice.actions;

export default cartSlice.reducer;