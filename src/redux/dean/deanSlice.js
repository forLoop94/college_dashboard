import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseURL = 'http://localhost:4000/api/v1';

export const getSchools = createAsyncThunk('schools/getSchools', async() => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseURL}/schools`, {
    headers: {
      Authorization: token,
    }
  })
  const schools = await response.json()
  return schools;
})

const initialState = {
  schools: [],
}

const deanSlice = createSlice({
  name: 'deans',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getSchools.fulfilled, (state, action) => {
      state.schools = action.payload;
    })
  }
})

export default deanSlice.reducer

