import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getCurrentUser } from '../redux/user/userSlice';
import styles from '../styles/root.module.css';
import { Lecturers } from './Lecturers';
import { Students } from './Students';

export const Root = () => {
  const { role } = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const baseURL = 'http://localhost:4000';
  const token = localStorage.getItem('token');


  const handleSignOut = async() => {
    try {
      const response = await fetch(`${baseURL}/logout`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        }
      })

      console.log(localStorage.getItem('token'));

      if(response.ok) {
        const resData = await response.json();
        console.log(resData.message);
        localStorage.removeItem('token');
        navigate("/login")
      } else {
        const resData = await response.json()
        console.log(resData.message);
      }

    } catch(error) {
      console.log(error);
    }
  }

  // const getCurrentUser = async() => {
  //   try {
  //     const response = await fetch(`${baseURL}/current_user`, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `${token}`,
  //       }
  //     })

  //     if (response.ok) {
  //       const curUserData = await response.json();
  //       console.log(curUserData);
  //     }
  //   } catch(error) {
  //     throw new error(error.message)
  //   }
  // }

  useEffect(() => {
    dispatch(getCurrentUser());
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  console.log(role);

  // if(!profileExists && role === 'student') {
  //   navigate("/add_student");
  // } else if (!profileExists && role === 'lecturer') {
  //   navigate("/add_lecturer")
  // } else if (!profileExists && role === 'HOD') {
  //   navigate("/add_lecturer")
  // } else if (!profileExists && role === 'dean') {
  //   navigate("/add_lecturer")
  // } else {
  //   return (
  //     <>
  //       <h1>Root</h1>
  //       {(role === 'student') ? <Students /> : <Lecturers />}
  //       <nav>
  //         <button onClick={handleSignOut}>Log out</button>
  //       </nav>
  //     </>
  //   );
  // }
  return (
    <>
      <h1>Root</h1>
      {(role === 'student') ? <Students /> : <Lecturers />}
      <nav>
        <button onClick={handleSignOut}>Log out</button>
      </nav>
    </>
  );
}
