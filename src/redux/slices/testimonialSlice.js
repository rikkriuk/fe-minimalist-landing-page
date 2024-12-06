import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_API_URL = import.meta.env.VITE_API_URL;
const ADMIN_ID = import.meta.env.VITE_ADMIN_ID;

const initialState = {
  testimonial: [],
  isLoading: false,
  error: null,
};

export const getTestimonial = createAsyncThunk(
  "teams/getTestimonial",
  async () => {
    try {
      const response = await axios.get(`${BASE_API_URL}/testimonials?limit=2`, {
        headers: {
          "x-api-key": "949e9720-0d96-41de-8d28-fe4455976d63",
        },
      });

      return response.data.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Error fetching portfolio"
      );
    }
  }
);

const testimonialSlice = createSlice({
  name: "testimonial",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTestimonial.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTestimonial.fulfilled, (state, action) => {
        state.isLoading = false;
        state.testimonial = action.payload;
      })
      .addCase(getTestimonial.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default testimonialSlice.reducer;
