import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = `https://2jamoa.pythonanywhere.com/api/v1/test/bolim/`;
// local storage dan tokenni olish 
const token = localStorage.getItem('token');

const axiosInstance = axios.create({
    baseURL: api,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  
  export const fetchApi = createAsyncThunk('fetch/fetchApi', async () => {
    const response = await axiosInstance.get('');
    console.log('API Response:', response.data);
    return response.data;
    console.log(response.data)
  });
  
  const fetchSlice = createSlice({
    name: 'api',
    initialState: {
      api: [],
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchApi.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchApi.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.api = Array.isArray(action.payload) ? action.payload : [];
        })
        .addCase(fetchApi.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
  export default fetchSlice.reducer;