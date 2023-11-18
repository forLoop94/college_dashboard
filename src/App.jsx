import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Root } from './components/Root';
import { Login } from './components/auth/Login';
import { Signup } from './components/auth/Signup';
import { Lecturers } from './components/Lecturers';
import { Students } from './components/Students';
import { StudentForm } from './components/StudentForm';
import { LecturerForm } from './components/LecturerForm';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Root />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/lecturers' element={<Lecturers />} />
        <Route path='/students' element={<Students />} />
        <Route path='/add_student' element={<StudentForm /> } />
        <Route path='/add_lecturer' element={<LecturerForm /> } />
      </Routes>
    </>
  )
}

export default App
