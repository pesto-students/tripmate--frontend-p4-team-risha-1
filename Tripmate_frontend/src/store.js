import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./slice/blogSlice";
import userReducer from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    blogs: blogReducer.reducer,
    userInfo: userReducer.reducer,
  },
});
