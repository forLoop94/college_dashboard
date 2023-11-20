import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router'
import { Link } from 'react-router-dom';
import '../styles/nav_panel.css';

export const NavPanel = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [panel, setPanel] = useState(true);
  const baseURL = 'http://localhost:4000';

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
          <ul>
            <li style={setNavPanelBackground('/students')}>
              <Link to="/students">
                Students
              </Link>
            </li>
            <li style={setNavPanelBackground('/lecturers')}>
              <Link to="lecturers">
                Lecturer
              </Link>
            </li>
            <li style={setNavPanelBackground('/lecturer_eligible')}>
              <Link to="lecturer_eligible">
                Lecturer Eligible
              </Link>
            </li>
            <li style={setNavPanelBackground('/add_student')}>
              <Link to="add_student">
                Student Profile
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={handleSignOut}
                className="sign-out"
              >
                SIGN OUT
              </button>
            </li>
          </ul>
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
