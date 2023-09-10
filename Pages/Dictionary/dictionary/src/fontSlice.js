import { createSlice } from "@reduxjs/toolkit";

export const fontSlice = createSlice({
  name: "font",
  initialState: {
    value: "seriff",
  },
  reducers: {
    seriff: (state) => {
      state.value = "seriff";
    },
    sansSeriff: (state) => {
      state.value = "sans-seriff";
    },
    mono: (state) => {
      state.value = "mono";
    },
  },
});

// Action creators are generated for each case reducer function
export const { seriff, sansSeriff, mono } = fontSlice.actions;

export default fontSlice.reducer;
