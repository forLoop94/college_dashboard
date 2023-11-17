import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lecturers: [
    {
      id: 1,
      name: "Lect Prince",
      class: 23
    },
    {
      id: 2,
      name: "Lect Prince 2",
      class: 28
    }
  ],
}

const lecturerSlice = createSlice({
  name: "lecturers",
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder.addCase()
  // }
})

export default lecturerSlice.reducer