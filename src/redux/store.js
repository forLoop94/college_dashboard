import { configureStore } from "@reduxjs/toolkit";
import lecturerSlice from "./lecturer/lecturerSlice";
import studentSlice from "./student/studentSlice";
import userSlice from "./user/userSlice";


const store = configureStore({
  reducer: {
    user: userSlice,
    Students: studentSlice,
    Lecturers: lecturerSlice,
  }
})

export default store;