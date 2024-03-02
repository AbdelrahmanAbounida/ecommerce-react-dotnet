import { configureStore } from "@reduxjs/toolkit";
import WishListReducer from "@/context/wishlist/wishlist-slice";
import CartReducer from "@/context/cart/cart-slice";

export const store = configureStore({
  reducer: {
    wishlist: WishListReducer,
    cart: CartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
