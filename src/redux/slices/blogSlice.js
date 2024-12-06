import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const ADMIN_ID = import.meta.env.VITE_ADMIN_ID;

const initialState = {
  blog: [],
  blogDetail: {},
  loading: false,
  error: null,
};

export const getBlog = createAsyncThunk("blog/getBlog", async () => {
  try {
    const response = await axios.get(`${API_URL}/blogs`, {
      headers: {
        "x-api-key": ADMIN_ID,
      },
    });
    return response.data.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error fetching blog");
  }
});

export const getBlogBySlug = createAsyncThunk(
  "blog/getBlogBySlug",
  async (id) => {
    try {
      const response = await axios.get(`${API_URL}/blogs/${id}`, {
        headers: {
          "x-api-key": ADMIN_ID,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Error fetching blog");
    }
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.blog = action.payload;
      })
      .addCase(getBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(getBlogBySlug.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBlogBySlug.fulfilled, (state, action) => {
        state.loading = false;
        state.blogDetail = action.payload;
      })
      .addCase(getBlogBySlug.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;
