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
      console.log(data);
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

const initialState = {
  students: [],
}

const studentSlice = createSlice({
  name: "studentSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStudents.fulfilled, (state, action) => {
      state.students = action.payload;
    })
  }
})

export default studentSlice.reducer