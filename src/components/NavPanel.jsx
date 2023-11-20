import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router'
import { Link } from 'react-router-dom';
import '../styles/nav_panel.css';
import { LecturerUser } from './role_partitions/LecturerUser';
import { StudentUser } from './role_partitions/StudentUser';

export const NavPanel = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [panel, setPanel] = useState(true);
  const baseURL = 'http://localhost:4000';
  const { role } = useSelector((state) => state.user.currentUser);

  const setNavPanelBackground = (targetLocation) => {
    if (location.pathname === targetLocation) return { backgroundColor: 'var(--orange)', color: "white"};
    return {};
  }

  const handleSignOut = async() => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${baseURL}/logout`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        }
      })

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

  return (
    <>
      <div className="mobile-nav">
        <span
          role="button"
          onClick={() => setPanel(!panel)}
          onKeyDown={() => setPanel(!panel)}
          tabIndex={0}
          aria-label="Toggle Panel"
        >
          {/* <BsList className="bars" /> */}
          <div>menu</div>
        </span>
      </div>
      <div
        className={!panel ? 'show' : 'hide'}
        id="header"
        role="button"
        onClick={() => setPanel(!panel)}
        onKeyDown={() => setPanel(!panel)}
        tabIndex={0}
      >
        <div className="nav-panel">
          {(role === 'student') ? <StudentUser setNavPanelBackground={setNavPanelBackground} /> : (role === 'lecturer') ?
          <LecturerUser setNavPanelBackground={setNavPanelBackground} /> : ''}
          <div>
            <button type="button" onClick={handleSignOut} className="sign-out">
            SIGN OUT
            </button>
          </div>
        </div>
        <div
          className="mobile close"
          role="button"
          onClick={() => setPanel(!panel)}
          onKeyDown={() => setPanel(!panel)}
          tabIndex={0}
          aria-label="close button"
        >
          <i className="fa fa-solid fa-xmark" />
        </div>
      </div>
    </>
  )
}
