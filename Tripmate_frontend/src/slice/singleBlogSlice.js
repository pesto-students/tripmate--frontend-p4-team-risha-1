import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = import.meta.env.VITE_BACKEND_URL;

const initialState = {
  blogs: [],
  status: "idle",
  isSuccess: false,
  message: "",
  loading: false,
};

// const fetch
