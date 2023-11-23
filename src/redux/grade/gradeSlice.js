import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = 'http://localhost:4000/api/v1';

export const addGrades = createAsyncThunk('grades/addGrades', async(data) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseURL}/grades`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`
    },
    body: JSON.stringify(data)
  })
  if(response.ok) {
    const data = await response.json()
    // console.log(data.message);
    return data;
  }
})

export const getCourseGrades = createAsyncThunk('grades/getCourseGrades', async() => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseURL}/course_grade`, {
    headers: {
      Authorization: `${token}`
    }
  })
  if(response.ok) {
    const data = await response.json()
    // console.log(data.message);
    return data;
  }
})

export const getGrades = createAsyncThunk('grades/getGrades', async() => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseURL}/grades`, {
    headers: {
      authorization: token,
    }
  })
  if(response) {
    const data = await response.json();
    return data;
  }
})

const initialState = {
  grades: [],
  courseGrades: []
}

const gradeSlice = createSlice({
  name: 'grades',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGrades.fulfilled, (state, action) => {
      state.grades = action.payload;
    })
    builder.addCase(getCourseGrades.fulfilled, (state, action) => {
      state.courseGrades = action.payload;
    })
  }
})

export default gradeSlice.reducer

