import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

import { url } from "../../api"

const api = `${url}auth/login/`;

export const loginUser = createAsyncThunk('login/loginUser', async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post(api, userData);
    localStorage.setItem('token', response.data.access);
    console.log("Token:", response.data.access);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response ? error.response.data : error.message);
  }
});

const axiosInstance = axios.create({
  baseURL: api,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default loginSlice.reducer;