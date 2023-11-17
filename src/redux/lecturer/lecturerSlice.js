import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseURL = "http://localhost:4000/api/v1";
const token = localStorage.getItem('token');

export const getLecturers = createAsyncThunk("lecturers/getLecturers", async() => {
  try {
    const response = await fetch(`${baseURL}/lecturers`, {
      method: "GET",
      authorization: `${token}`
    });
    if(response.ok) {
      const lecturerData = await response.json();
      console.log(lecturerData);
      return lecturerData;
    }
  } catch(error) {
    throw new error(error.message);
  }
})

const initialState = {
  lecturers: [],
}

const lecturerSlice = createSlice({
  name: "lecturers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLecturers.fulfilled, (state, action) => {
      state.lecturers = action.payload;
    })
  }
})

export default lecturerSlice.reducer