import { configureStore } from "@reduxjs/toolkit";
import darkmodeReducer from "./darkmodeSlice";
import fontReducer from "./fontSlice";

export default configureStore({
  reducer: {
    font: fontReducer,
    darkmode: darkmodeReducer,
  },
});
