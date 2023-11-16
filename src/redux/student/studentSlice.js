import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [
    {
      name: "Hafeez",
      class: 2
    },
  ]
}

const studentSlice = createSlice({
  name: "studentSlice",
  initialState,
  reducers: {}
})

export default studentSlice.reducer