import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Root } from './components/Root';
import { Login } from './components/auth/Login';
import { Signup } from './components/auth/Signup';
import { Lecturers } from './components/lecturer/Lecturers';
import { Students } from './components/student/Students';
import { StudentForm } from './components/forms/StudentForm';
import { LecturerForm } from './components/forms/LecturerForm';
import { LecturerEligibleCourses } from './components/lecturer/LecturerEligibleCourses';
import { Recommended_courses } from './components/student/Recommended_courses';
import { Assigned_courses } from './components/lecturer/Assigned_courses';
import { Grades } from './components/student/Grades';
import { NewGrade } from './components/grade/NewGrade';
import { DepartmentForm } from './components/dean/DepartmentForm';
import { Departments } from './components/dean/Departments';
import { HodForm } from './components/forms/HodForm';
import { DepartmentStudents } from './components/hod/DepartmentStudents';
import { DepartmentLecturers } from './components/hod/DepartmentLecturers';
import { DepartmentCourses } from './components/hod/DepartmentCourses';
import { CourseForm } from './components/hod/CourseForm';
import { AllotmentData } from './components/hod/AllotmentData';
import { DeanForm } from './components/forms/DeanForm';
import { DeanList } from './components/dean/DeanList';
import { Hods } from './components/dean/Hods';
import { HodDetails } from './components/hod/HodDetails';
import { CourseStudents } from './components/lecturer/Course_students';
import { LessonArea } from './components/student/lesson_area/Lesson-area';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Root />}>
        <Route path='/lecturers' element={<Lecturers />} />
        <Route path='/students' element={<Students />} />
        <Route path='/recommended_courses' element={<Recommended_courses />} />
        <Route path='/assigned_courses' element={<Assigned_courses />} />
        <Route path='/assigned_courses/:courseId/:courseTitle' element={<CourseStudents />} />
        <Route path='lesson_area/:courseId/:courseTitle/:studentId/:firstName/:lastName' element={<LessonArea />}></Route>
        <Route path='/lecturer_eligible' element={<LecturerEligibleCourses /> } />
        <Route path='/course_grades' element={<Grades /> } />
        <Route path='/add_department' element={<DepartmentForm /> } />
        <Route path='/departments' element={<Departments /> } />
        <Route path='/dean_list' element={<DeanList /> } />
        <Route path='/hods_list' element={<Hods /> } />
        <Route path='/hod_details' element={<HodDetails /> } />
        <Route path='/add_course' element={<CourseForm /> } />
        <Route path='/allotment_data' element={<AllotmentData /> } />
        <Route path='/department_students' element={<DepartmentStudents /> } />
        <Route path='/department_lecturers' element={<DepartmentLecturers /> } />
        <Route path='/department_courses' element={<DepartmentCourses /> } />
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
      <Route path='/add_dean' element={<DeanForm /> } />
      <Route path='/add_student' element={<StudentForm /> } />
      <Route path='/add_lecturer' element={<LecturerForm /> } />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Route>
  )
)

const App = () => <RouterProvider router={router} />;

export default App
