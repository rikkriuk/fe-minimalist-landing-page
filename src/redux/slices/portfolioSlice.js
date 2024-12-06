import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;
const ADMIN_ID = import.meta.env.VITE_ADMIN_ID;

const initialState = {
  portfolios: [],
  portfolio: {},
  loading: false,
  error: null,
};

export const getPortfolio = createAsyncThunk(
  "portfolio/getPortfolio",
  async () => {
    try {
      const response = await axios.get(`${VITE_API_URL}/portfolios`, {
        headers: {
          "x-api-key": ADMIN_ID,
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

export const getPortfolioById = createAsyncThunk(
  "portfolio/getPortfolioById",
  async (id) => {
    try {
      const response = await axios.get(`${VITE_API_URL}/portfolios/${id}`, {
        headers: {
          "x-api-key": ADMIN_ID,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Error fetching portfolio"
      );
    }
  }
);

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPortfolio.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPortfolio.fulfilled, (state, action) => {
      state.loading = false;
      state.portfolios = action.payload;
    });
    builder.addCase(getPortfolio.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getPortfolioById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPortfolioById.fulfilled, (state, action) => {
      state.loading = false;
      state.portfolio = action.payload;
    });
    builder.addCase(getPortfolioById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default portfolioSlice.reducer;
