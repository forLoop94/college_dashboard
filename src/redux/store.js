import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./student/studentSlice";


const store = configureStore({
  reducer: {
    STUDENTS: studentSlice,
  }
})

export default store;