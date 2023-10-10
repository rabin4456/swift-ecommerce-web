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
  },
});

export const { ADD_PRODUCTS_TO_CART } = ProductSlice.actions;

export default ProductSlice.reducer;
