import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartdata: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartpageSlice = createSlice({
  name: "cartdata",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const existingItemIndex = state.cartdata.findIndex((item) => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        state.cartdata[existingItemIndex].count += action.payload.count;
      } else {
        state.cartdata.push(action.payload);
      }
      state.totalQuantity += action.payload.count;
      state.totalAmount += action.payload.price * action.payload.count;
    },
    removefromCart: (state, action) => {
      state.cartdata = state.cartdata.filter((item) => item.id !== action.payload);
      const removedItem = state.cartdata.find((item) => item.id === action.payload);
      if (removedItem) {
        state.totalQuantity -= removedItem.count;
        state.totalAmount -= removedItem.price * removedItem.count;
      }
    },
    updateQuantity: (state, action) => {
      const { id, newCount } = action.payload;
      const itemToUpdate = state.cartdata.find((item) => item.id === id);
      if (itemToUpdate) {
        const oldCount = itemToUpdate.count;
        itemToUpdate.count = newCount;
        state.totalQuantity += newCount - oldCount;
        state.totalAmount += (newCount - oldCount) * itemToUpdate.price;
      }
    },
  },
});

export const { addtoCart, removefromCart, updateQuantity } = cartpageSlice.actions;

export default cartpageSlice.reducer;
