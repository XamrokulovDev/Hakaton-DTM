import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { url } from "../../api"

const api = `${url}auth/register/`;

export const getSign = createAsyncThunk("sign/getSign", async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(api, data);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

const signSlice = createSlice({
    name: "sign",
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSign.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getSign.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(getSign.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default signSlice.reducer;