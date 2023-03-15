import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginAPI } from "./reducerAPI";

const initialState = {
  show: {},
  data: [],
  isLoading: false,
  error: "",
  success: "",
  status: "idle",
};

export const loginPost = createAsyncThunk(
  "/login",
  async (payload, thunkAPI) => {
    try {
      const res = await loginAPI(payload);

      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.msg);
    }
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginPost.pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(loginPost.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      })
      .addCase(loginPost.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
        state.success = action.payload.status;

        localStorage.setItem("id", action.payload.data.id);
        localStorage.setItem("username", action.payload.data.username);
        localStorage.setItem("email", action.payload.data.email);
        localStorage.setItem("token", action.payload.data.token);
      });
  },
});

export const data = (state) => state.login;

export default loginSlice.reducer;
