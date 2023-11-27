import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Root } from './components/Root';
import { Login } from './components/auth/Login';
import { Signup } from './components/auth/Signup';
import { Lecturers } from './components/hod/Lecturers';
import { Students } from './components/hod/Students';
import { StudentForm } from './components/forms/StudentForm';
import { LecturerForm } from './components/forms/LecturerForm';
import { LecturerEligibleCourses } from './components/lecturer/LecturerEligibleCourses';
import { Recommended_courses } from './components/student/Recommended_courses';
import { Assigned_courses } from './components/lecturer/Assigned_courses';
// import { Course_students } from './components/lecturer/Course_students';
import { Grades } from './components/student/Grades';
import { NewGrade } from './components/grade/NewGrade';
import { DepartmentForm } from './components/hod/DepartmentForm';
import { Departments } from './components/hod/Departments';
import { HodForm } from './components/forms/HodForm';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Root />}>
        <Route path='/lecturers' element={<Lecturers />} />
        <Route path='/students' element={<Students />} />
        <Route path='/recommended_courses' element={<Recommended_courses />} />
        <Route path='/assigned_courses' element={<Assigned_courses />} />
        {/* <Route path='/course_students' element={<Course_students />} /> */}
        <Route path='/lecturer_eligible' element={<LecturerEligibleCourses /> } />
        <Route path='/course_grades' element={<Grades /> } />
        <Route path='/add_departments' element={<DepartmentForm /> } />
        <Route path='/departments' element={<Departments /> } />
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
      {/* <Route path='/course_students' element={<Course_students />} /> */}
      <Route path='/add_grade' element={<NewGrade /> } />
      <Route path='/add_hod' element={<HodForm /> } />
      <Route path='/add_student' element={<StudentForm /> } />
      <Route path='/add_lecturer' element={<LecturerForm /> } />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Route>
  )
)

const App = () => <RouterProvider router={router} />;

export default App
