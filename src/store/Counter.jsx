import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    add: (state, action) => {
      // console.log(action.payload.num);
      state.counterVal += action.payload.num;
    },
    subtract: (state, action) => {
      state.counterVal -= action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice;
