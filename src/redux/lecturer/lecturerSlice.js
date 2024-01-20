import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseURL = "https://online-school-93yp.onrender.com/api/v1";

export const addLecturer = createAsyncThunk(
  "lecturer/addlecturer",
  async (body) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${baseURL}/lecturers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `${token}`,
        },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        const lecturer = await response.json();
        return lecturer;
      }
    } catch (error) {
      throw new error(error.message);
    }
  }
);

export const getLecturers = createAsyncThunk(
  "lecturers/getLecturers",
  async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${baseURL}/lecturers`, {
      method: "GET",
      headers: {
        authorization: `${token}`,
      },
    });
    if (response.ok) {
      const lecturerData = await response.json();
      return lecturerData;
    }
  }
);

export const getlecturerDetails = createAsyncThunk(
  "lecturers/getlecturerDetails",
  async (id) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${baseURL}/lecturers/${id}`, {
      headers: {
        authorization: token,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  }
);

export const getLecturerEligibleCourses = createAsyncThunk(
  "lecturers/getLecturerEligibleCourses",
  async (id) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${baseURL}/course_list/${id}`, {
      headers: {
        authorization: `${token}`,
      },
    });
    const data = await response.json();
    return data;
  }
);

export const getAssignedCourses = createAsyncThunk(
  "lecturers/getAssignedCourses",
  async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${baseURL}/assigned_courses`, {
      headers: {
        authorization: `${token}`,
      },
    });
    const data = await response.json();
    return data;
  }
);

export const updateLecturer = createAsyncThunk('lecturers/updateLecturer', async({ body, id }) => {
  const token = localStorage.getItem('token')
  const response = await fetch(`${baseURL}/lecturers/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
    body: JSON.stringify(body)
  })
  if(response.ok) {
    const data = await response.json();
    console.log("update succesful")
    return data;
  }
})

const initialState = {
  lecturers: [],
  details: '',
  eligibleCourses: [],
  assignedCourses: [],
};

const lecturerSlice = createSlice({
  name: "lecturers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLecturers.fulfilled, (state, action) => {
      state.lecturers = action.payload;
    });
    builder.addCase(getlecturerDetails.fulfilled, (state, action) => {
      state.details = action.payload;
    });
    builder.addCase(getLecturerEligibleCourses.fulfilled, (state, action) => {
      state.eligibleCourses = action.payload;
    });
    builder.addCase(getAssignedCourses.fulfilled, (state, action) => {
      state.assignedCourses = action.payload;
    });
  },
});

export default lecturerSlice.reducer;
