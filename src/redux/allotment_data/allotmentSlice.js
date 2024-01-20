import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseURL = "https://online-school-93yp.onrender.com/api/v1";

export const addAllotmentData = createAsyncThunk(
  "lecturerCourses/addAllotmentData",
  async (data) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${baseURL}/lecturer_courses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  }
);

export const getAllotmentData = createAsyncThunk(
  "lecturerCourses/getAllotmentData",
  async (id) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${baseURL}/lecturer_courses/${id}`, {
      headers: {
        authorization: token,
      },
    });
    const data = await response.json();
    return data;
  }
);

export const deleteAllotment = createAsyncThunk("lecturerCourses/deleteAllotment", async (id) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${baseURL}/lecturer_courses/${id}`, {
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
  allotmentData: [],
};

const allotmentSlice = createSlice({
  name: "allotmentData",
  initialState,
  reducers: {
    // removeAllotment: (state, { payload }) => {
    //   const newData = state.allotmentData.filter(elm => elm.id !== payload.id);
    //   state.allotmentData = newData;
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllotmentData.fulfilled, (state, action) => {
      state.allotmentData = action.payload;
    });
  },
});

// export const { removeAllotment } = allotmentSlice.actions;

export default allotmentSlice.reducer;
