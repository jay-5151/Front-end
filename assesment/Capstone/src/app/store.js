import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/userslice";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});