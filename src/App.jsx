import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Root } from './components/Root';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Teacher } from './components/Teacher';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Root />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/teacher' element={<Teacher />} />
      </Routes>
    </>
  )
}

export default App
