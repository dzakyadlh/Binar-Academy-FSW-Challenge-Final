import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGameDetailsAPI } from "./reducerAPI";

const initialState = {
  show: {},
  data: [],
  isLoading: false,
  error: "",
  success: "",
  status: "idle",
};

export const getGameDetails = createAsyncThunk("getGames/result", async (id) => {
  const response = await getGameDetailsAPI(id);
  return response.data.result;
});

export const getGameDetailsSlice = createSlice({
  name: "gameDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGameDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getGameDetails.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      });
  },
});

export const data = (state) => state.gameDetails;

export default getGameDetailsSlice.reducer;
