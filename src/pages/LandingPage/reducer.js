import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGamesAPI } from "./reducerAPI";

const initialState = {
  show: {},
  data: [],
  isLoading: false,
  error: "",
  success: "",
  status: "idle",
};

export const getGames = createAsyncThunk("getGames/data", async () => {
  const response = await getGamesAPI();

  return response.data;
});

export const getGamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGames.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getGames.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      });
  },
});

export const {} = getGamesSlice.actions;

export const data = (state) => state.games;

export default getGamesSlice.reducer;
