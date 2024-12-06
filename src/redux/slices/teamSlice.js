import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_API_URL = import.meta.env.VITE_API_URL;

const initialState = {
  teams: [],
  isLoading: false,
  error: null,
};

export const getTeams = createAsyncThunk("teams/getTeams", async () => {
  try {
    const response = await axios.get(
      `${BASE_API_URL}/teams?usernames[0]=rikkriuk&usernames[1]=emir&usernames[2]=ignasiusadhitia`
    );
    return response.data.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error fetching portfolio"
    );
  }
});

const teamSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTeams.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTeams.fulfilled, (state, action) => {
        state.isLoading = false;
        state.teams = action.payload;
      })
      .addCase(getTeams.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default teamSlice.reducer;
