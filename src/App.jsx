import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom';
import { Root } from './components/Root';
import { Login } from './components/auth/Login';
import { Signup } from './components/auth/Signup';
import { Lecturers } from './components/Lecturers';
import { Students } from './components/Students';
import { StudentForm } from './components/StudentForm';
import { LecturerForm } from './components/LecturerForm';
import { LecturerEligibleCourses } from './components/LecturerEligibleCourses';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Root />}>
        <Route path='/lecturers' element={<Lecturers />} />
        <Route path='/students' element={<Students />} />
        <Route path='/lecturer_eligible' element={<LecturerEligibleCourses /> } />
      </Route>
      {/* <Route path='/' element={<Root />}>
        <Route path='student_user' element={<StudentUser />}>
          <Route index element={<Students />} />
          <Route path='add_student' element={<StudentForm /> } />
        </Route>
        <Route path='lecturer_user' element={<LecturerUser />}>
          <Route index element={<Lecturers />} />
          <Route path='add_lecturer' element={<LecturerForm /> } />
          <Route path='lecturer_eligible' element={<LecturerEligibleCourses /> } />
        </Route>
      </Route> */}
      <Route path='/add_student' element={<StudentForm /> } />
      <Route path='/add_lecturer' element={<LecturerForm /> } />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Route>
  )
)

const App = () => <RouterProvider router={router} />;

export default App
