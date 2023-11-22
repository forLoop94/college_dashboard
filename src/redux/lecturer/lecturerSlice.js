import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseURL = "http://localhost:4000/api/v1";

export const addLecturer = createAsyncThunk("lecturer/addlecturer", async(body) => {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${baseURL}/lecturers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`
      },
      body: JSON.stringify(body)
    })
    if(response.ok) {
      const lecturer = await response.json();
      return lecturer;
    }
  } catch(error) {
    throw new error(error.message);
  }
})

export const getLecturers = createAsyncThunk("lecturers/getLecturers", async() => {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${baseURL}/lecturers`, {
      method: "GET",
      headers: {
        authorization: `${token}`
      }
    });
    if(response.ok) {
      const lecturerData = await response.json();
      return lecturerData;
    }
  } catch(error) {
    throw new error(error.message);
  }
})

export const getLecturerEligibleCourses = createAsyncThunk("lecturers/getLecturerEligibleCourses", async(id) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseURL}/course_list/${id}`, {
    headers: {
      authorization: `${token}`
    }
  })
  const data = await response.json();
  return data;
})

const initialState = {
  lecturers: [],
  eligibleCourses: [],
}

const lecturerSlice = createSlice({
  name: "lecturers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLecturers.fulfilled, (state, action) => {
      state.lecturers = action.payload;
    })
    builder.addCase(getLecturerEligibleCourses.fulfilled, (state, action) => {
      state.eligibleCourses = action.payload;
    })
  }
})

export default lecturerSlice.reducer