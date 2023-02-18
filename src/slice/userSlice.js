import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userInfo: {},
  status: "idle",
  isSuccess: false,
  message: "",
  loading: false,
};

const backendURL = import.meta.env.VITE_BACKEND_URL;

export const fetchLoggedInUserAsync = createAsyncThunk(
  "user/getLoggedInUser",

  async (email, password, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const data = await axios.post(
        `backendURL/users/login`,
        {
          email,
          password,
        },
        config
      );
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
  //   async (arg, { rejectWithValue }) => {
  //     try {
  //       const { data } = await axios.get(`${backendURL}/blog`);
  //       return data;
  //     } catch (error) {
  //       rejectWithValue(error.response.data);
  //     }
  //   }
);

export const userSlice = createSlice({
  name: "user/getLoggedInUser",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchLoggedInUserAsync.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [fetchLoggedInUserAsync.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.isSuccess = true;
    },
    [fetchLoggedInUserAsync.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

export default userSlice;
