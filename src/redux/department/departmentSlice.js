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

export const getDepartmentStudents = createAsyncThunk('department/getDepartmentStudents', async() => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseURL}/department_students`, {
    headers: {
      authorization: token
    }
  })
  if(response.ok) {
    const data = await response.json()
    return data;
  }
})

export const getDepartmentLecturers = createAsyncThunk('department/getDepartmentLecturers', async() => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseURL}/department_lecturers`, {
    headers: {
      authorization: token
    }
  })
  if(response.ok) {
    const data = await response.json()
    return data;
  }
})

export const getDepartmentCourses = createAsyncThunk('department/getDepartmentCourses', async() => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseURL}/department_courses`, {
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
  departments: [],
  departmentStudents: [],
  departmentLecturers: [],
  departmentCourses: [],
}

const departmentSlice = createSlice({
  name: 'departments',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getDepartments.fulfilled, (state, action) => {
      state.departments = action.payload
    })
    builder.addCase(getDepartmentCourses.fulfilled, (state, action) => {
      state.departmentCourses = action.payload
    })
    builder.addCase(getDepartmentLecturers.fulfilled, (state, action) => {
      state.departmentLecturers = action.payload
    })
    builder.addCase(getDepartmentStudents.fulfilled, (state, action) => {
      state.departmentStudents = action.payload
    })
  }
})

export default departmentSlice.reducer;