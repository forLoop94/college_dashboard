import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseURL = "http://localhost:4000/api/v1";


export const addStudents = createAsyncThunk('students/addStudents', async(data) => {
  const token = localStorage.getItem('token');

  try {
    const response = await fetch(`${baseURL}/students`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`
      },
      body: JSON.stringify(data),
    })
    if(response.ok) {
      const data = await response.json();
      console.log(response.message);
      return data;
    }
  } catch(error) {
    throw new error(error.message)
  }
})

export const getStudents = createAsyncThunk('students/getStudents', async () => {
  const token = localStorage.getItem('token');

  try {
    const response = await fetch(`${baseURL}/students`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      }
    });
    const studentsData = await response.json();
    return studentsData;
  } catch(error) {
    console.log(error)
  }
})

export const getRecommendedCourses = createAsyncThunk("students/getRecommendedCourses", async() => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseURL}/recommended_courses`, {
    headers: {
      Authorization: `${token}`
    }
  })
  const recCourses = await response.json()
  return recCourses;
})

export const getLessonLinks = createAsyncThunk("students/getLessonLinks", async({course_id, lecturer_id}) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseURL}/submissions/${course_id}/${lecturer_id}`, {
    headers: {
      authorization: token
    }
  })
  const links = await response.json()
  return links
})

export const getLessonChats = createAsyncThunk("students/getLessonChats", async({course_id, lecturer_id}) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseURL}/student_messages/${course_id}/${lecturer_id}`, {
    headers: {
      authorization: token
    }
  })
  const chats = await response.json()
  return chats
})

const initialState = {
  students: [],
  recommended: [],
  chats: [],
  links: []
}

const studentSlice = createSlice({
  name: "studentSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStudents.fulfilled, (state, action) => {
      state.students = action.payload;
    })
    builder.addCase(getRecommendedCourses.fulfilled, (state, action) => {
      state.recommended = action.payload;
    })
    builder.addCase(getLessonLinks.fulfilled, (state, action) => {
      state.links = action.payload;
    })
    builder.addCase(getLessonChats.fulfilled, (state, action) => {
      state.chats = action.payload;
    })
  }
})

export default studentSlice.reducer