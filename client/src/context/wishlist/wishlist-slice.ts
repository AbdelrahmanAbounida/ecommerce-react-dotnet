import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/context/store";

interface WishListState {
  value: number;
}

const initialState: WishListState = {
  value: 0,
};

export const WishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    flush: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, flush, incrementByAmount } =
  WishListSlice.actions;
export default WishListSlice.reducer;
