import { configureStore } from "@reduxjs/toolkit";
import lecturerSlice from "./lecturer/lecturerSlice";
import studentSlice from "./student/studentSlice";


const store = configureStore({
  reducer: {
    Students: studentSlice,
    Lecturers: lecturerSlice,
  }
})

export default store;