import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  blogs: [],
  status: "idle",
  isSuccess: false,
  message: "",
  loading: false,
};

const backendURL = import.meta.env.VITE_BACKEND_URL;

export const fetchBlogsAsync = createAsyncThunk(
  "blogs/getBlogs",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${backendURL}/blog`);
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const blogSlice = createSlice({
  name: "blog/getData",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBlogsAsync.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [fetchBlogsAsync.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.blogs = payload;
      state.isSuccess = true;
    },
    [fetchBlogsAsync.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

export default blogSlice;
