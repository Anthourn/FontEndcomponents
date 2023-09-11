import { configureStore } from "@reduxjs/toolkit";
import darkmodeReducer from "./darkmodeSlice";
import fontReducer from "./fontSlice";
import inputReducer from "./inputSlice";
import dataReducer from "./dataSlice";
export default configureStore({
  reducer: {
    font: fontReducer,
    darkmode: darkmodeReducer,
    input: inputReducer,
    data: dataReducer,
  },
});
