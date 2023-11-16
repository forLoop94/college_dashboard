import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseURL = "http://localhost:4000/api/v1";
const token = localStorage.getItem('token');

export const getStudents = createAsyncThunk('students/getStudents', async () => {
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