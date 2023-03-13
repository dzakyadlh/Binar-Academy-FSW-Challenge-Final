import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateAPI, deleteAPI } from "./reducerAPI";

const initialState = {
  show: {},
  data: [],
  isLoading: false,
  error: "",
  success: "",
  status: "idle",
};

export const updateProfile = createAsyncThunk(
  "/update",
  async (payload, thunkAPI) => {
    try {
      const res = await updateAPI(payload);

      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.msg);
    }
  }
);

export const deleteProfile = createAsyncThunk("/delete", async (thunkAPI) => {
  try {
    const res = await deleteAPI();

    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.msg);
  }
});

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
        state.success = action.payload.message;
      })
      .addCase(deleteProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteProfile.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      })
      .addCase(deleteProfile.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
        state.success = action.payload.message;
      });
  },
});

export const {} = profileSlice.actions;

export const data = (state) => state.profile;

export default profileSlice.reducer;
