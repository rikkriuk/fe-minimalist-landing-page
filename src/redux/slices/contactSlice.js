import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const initialState = {
  contact: null,
  loading: false,
  error: null,
};

export const sendContact = createAsyncThunk(
  "contact/sendContact",
  async (data) => {
    try {
      await axios.post(`${API_URL}/contact`, data);
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Error fetching portfolio"
      );
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendContact.pending, (state) => {
        state.loading = true;
        state.loading = false;
      })
      .addCase(sendContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contact = action.payload;
      })
      .addCase(sendContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default contactSlice.reducer;
