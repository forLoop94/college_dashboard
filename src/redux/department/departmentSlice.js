import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseURL = "http://localhost:4000/api/v1";

export const addDepartments = createAsyncThunk('department/addDepartments', async() => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseURL}/departments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: token
    }
  })
  if(response.ok) {
    const data = await response.json()
    return data;
  }
})

export const getDepartments = createAsyncThunk('department/getDepartments', async() => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseURL}/departments`, {
    headers: {
      authorization: token
    }
  })
  if(response.ok) {
    const data = await response.json()
    return data;
  }
})

const initialState = {
  departments: []
}

const departmentSlice = createSlice({
  name: 'departments',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getDepartments.fulfilled, (state, action) => {
      state.departments = action.payload
    })
  }
})

export default departmentSlice.reducer;