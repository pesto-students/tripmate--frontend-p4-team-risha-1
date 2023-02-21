import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./slice/blogSlice.js";
import userReducer from "./slice/userSlice.js";

export const store = configureStore({
  reducer: {
    blogs: blogReducer.reducer,
    userInfo: userReducer.reducer,
  },
});
