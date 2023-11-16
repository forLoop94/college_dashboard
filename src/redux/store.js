import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./student/studentSlice";


const store = configureStore({
  reducer: {
    Students: studentSlice,
  }
})

export default store;