import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseURL = "https://online-school-93yp.onrender.com";

export const getCurrentUser = createAsyncThunk(
  "users/getCurrentUser",
  async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${baseURL}/current_user`, {
        headers: {
          authorization: `${token}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error("Error fetching current user:", error);
        throw error;
      } else {
        console.error("Error fetching current user:", error);
        throw error;
      }
    }
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
