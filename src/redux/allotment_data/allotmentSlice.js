import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseURL = "http://localhost:4000/api/v1";

export const addAllotmentData = createAsyncThunk('lecturerCourses/addAllotmentData', async(data) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseURL}/lecturer_courses`, {
    method: 'POST',
    header: {
      "Content-Type": "application/json",
      authorization: token
    },
    body: JSON.stringify(data)
  })
  const result = await response.json();
  return result;
})

export const getAllotmentData = createAsyncThunk('lecturerCourses/getAllotmentData', async(id) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseURL}/lecturer_courses/${id}`, {
    header: {
      authorization: token
    }
  })
  const data = await response.json()
  return data;
})

const initialState = {
  allotmentData: []
}

const allotmentSlice = createSlice({
  name: 'allotmentData',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllotmentData.fulfilled, (state, action) => {
      state.allotmentData = action.payload;
    })
  }
})

export default allotmentSlice.reducer;

