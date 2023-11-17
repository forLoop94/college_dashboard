import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Root } from './components/Root';
import { Login } from './components/auth/Login';
import { Signup } from './components/auth/Signup';
import { Lecturers } from './components/Lecturers';
import { Students } from './components/Students';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Root />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/lecturers' element={<Lecturers />} />
        <Route path='/students' element={<Students />} />
      </Routes>
    </>
  )
}

export default App
