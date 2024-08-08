import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { url } from '../../api';

const api = `${url}test/bolims/1/`;

export const fetchTestSections = createAsyncThunk(
  'fetch/fetchTestSections',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(api, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

const fetchSlice = createSlice({
  name: 'fetch',
  initialState: {
    sections: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestSections.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTestSections.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.sections = action.payload;
      })
      .addCase(fetchTestSections.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export default fetchSlice.reducer;