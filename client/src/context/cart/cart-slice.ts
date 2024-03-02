import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/context/store";

interface CartSlice {
  value: number;
}

const initialState: CartSlice = {
  value: 0,
};

export const CartSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    incrementCart: (state) => {
      state.value += 1;
    },
    decrementCart: (state) => {
      state.value -= 1;
    },
    flushCart: (state) => {
      state.value = 0;
    },
    incrementByAmountCart: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const {
  incrementCart,
  decrementCart,
  flushCart,
  incrementByAmountCart,
} = CartSlice.actions;
export default CartSlice.reducer;
