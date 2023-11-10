// import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    'email': '',
    'password': ''
  })

  const baseURL = "http://localhost:4000";

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseURL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: data
        })
      })
      if(response.ok) {
        const resData = await response.json()
        console.log(resData);
        const authorization = response.headers.get('authorization');
        localStorage.setItem('token', authorization);
        console.log(authorization);
        console.log(resData.status.message);
        if(resData.data.role === 'teacher') {
          navigate("/teacher");
          return `You are a ${resData.data.role}`;
        } else {
          navigate("/");
          return resData.status.message
        }
      }
    } catch(error) {
      return error;
    }
  }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='email'
        placeholder='email'
        name='email'
        onChange={handleChange}
      />
      <input
        type='password'
        placeholder='password'
        name='password'
        onChange={handleChange}
      />
      <button type='submit'>Submit</button>
      <Link to='/signup'>Sign up</Link>
    </form>
  )
}
