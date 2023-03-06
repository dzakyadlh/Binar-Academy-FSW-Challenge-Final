import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registerAPI } from "./reducerAPI";

const initialState = {
  show: {},
  data: [],
  isLoading: false,
  error: "",
  success: "",
  status: "idle",
};

export const registerPost = createAsyncThunk(
  "/register",
  async (payload, thunkAPI) => {
    try {
      const res = await registerAPI(payload);

      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.msg);
    }
  }
);

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerPost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerPost.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      })
      .addCase(registerPost.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      });
  },
});

export const {} = registerSlice.actions;

export const data = (state) => state.register;

export default registerSlice.reducer;
