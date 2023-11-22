import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "./course/courseSlice";
import lecturerSlice from "./lecturer/lecturerSlice";
import studentSlice from "./student/studentSlice";
import userSlice from "./user/userSlice";


const store = configureStore({
  reducer: {
    user: userSlice,
    Students: studentSlice,
    Lecturers: lecturerSlice,
    Courses: courseSlice,
  }
})

export default store;