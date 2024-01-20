import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = "https://online-school-93yp.onrender.com/api/v1";

export const addCourses = createAsyncThunk('courses/addCourses', async(body) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseURL}/courses`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: token
    },
    body: JSON.stringify(body)
  })
  if(response.ok) {
    const data = await response.json()
    return data;
  }
})

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

export const getCourseLecturers = createAsyncThunk('courses/getCourseLecturers', async(id) => {
  const token = localStorage.getItem('token')
  const response = await fetch(`${baseURL}/course_lecturers/${id}`, {
    headers: {
      Authorization: `${token}`
    }
  })
  if(response.ok) {
    const lecturers = await response.json();
    return lecturers;
  } else {
    console.log("couldnt find it");
  }
})

export const deleteCourse = createAsyncThunk("courses/deleteCourse", async (id) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${baseURL}/courses/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: token
    }
  })
  if (response.ok) {
    return id;
  }
})

const initialState = {
  courses: [],
  students: [],
  lecturers: [],
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
    builder.addCase(getCourseLecturers.fulfilled, (state, action) => {
      state.lecturers = action.payload;
    })
  }
})

export default courseSlice.reducer;