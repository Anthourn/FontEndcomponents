import { createSlice } from "@reduxjs/toolkit";
import definition from "./example";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    value: definition,
  },
  reducers: {
    seed: (state, newData) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value = newData;
    },
  },
});

// Action creators are generated for each case reducer function
export const { seed } = dataSlice.actions;

export default dataSlice.reducer;
