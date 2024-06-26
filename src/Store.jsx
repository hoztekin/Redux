import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./control/CartSlice";

export const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
