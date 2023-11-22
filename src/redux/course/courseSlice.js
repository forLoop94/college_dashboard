import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = 'http://localhost:4000/api/v1';

export const getCourses = createAsyncThunk('courses/getCourses', async() => {
  const token = localStorage.getItem('token')
  const response = await fetch(`${baseURL}/courses`, {
    headers: {
      Authorization: `${token}`
    }
  })
  if(response.ok) {
    const courses = await response.json();
    return courses;
  }
})

export const getCourseStudents = createAsyncThunk('courses/getCourseStudents', async(id) => {
  const token = localStorage.getItem('token')
  const response = await fetch(`${baseURL}/course_students/${id}`, {
    headers: {
      Authorization: `${token}`
    }
  })
  if(response.ok) {
    const students = await response.json();
    return students;
  }
})

const initialState = {
  courses: [],
  students: [],
}

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCourses.fulfilled, (state, action) => {
      state.courses = action.payload;
    })
    builder.addCase(getCourseStudents.fulfilled, (state, action) => {
      state.students = action.payload;
    })
  }
})

export default courseSlice.reducer;