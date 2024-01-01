import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseURL = "http://localhost:4000";

export const getCurrentUser = createAsyncThunk(
  "users/getCurrentUser",
  async () => {
    const token = localStorage.getItem("token");

    const response = await fetch(`${baseURL}/current_user`, {
      headers: {
        authorization: `${token}`,
      },
    });
    const data = await response.json();
    return data;
  }
);

const initialState = {
  currentUser: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
  },
});

export default userSlice.reducer;
