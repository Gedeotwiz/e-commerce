
import { configureStore } from "@reduxjs/toolkit";
import fushionReducer from "./features/fashionslice"

export const store = configureStore({
  reducer: {
    fashion: fushionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
