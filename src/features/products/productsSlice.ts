import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  cart: any[];
}
const initialState: ProductState = {
  cart: [],
};

export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    ADD_PRODUCTS_TO_CART: (state, action: PayloadAction<any>) => {
      state.cart.push(action?.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    ADD_PERSISITED_DATA: (state, action: PayloadAction<any>) => {
      state.cart.push(...action.payload);
    },
  },
});

export const { ADD_PRODUCTS_TO_CART, ADD_PERSISITED_DATA } =
  ProductSlice.actions;

export default ProductSlice.reducer;
