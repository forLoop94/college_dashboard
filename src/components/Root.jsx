import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../styles/root.module.css';

export const Root = () => {

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

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

    return (
      <>
        <h1>Root</h1>
        <nav>
          <Link to='/login'>Log in</Link>
          <Link to='/signup'>Sign up</Link>
          <button onClick={handleSignOut}>Log out</button>
        </nav>
      </>
    );
}
