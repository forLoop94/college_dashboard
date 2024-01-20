import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import "../styles/nav_panel.css";
import { DeanUser } from "./role_partitions/DeanUser";
import { HodUser } from "./role_partitions/HodUser";
import { LecturerUser } from "./role_partitions/LecturerUser";
import { StudentUser } from "./role_partitions/StudentUser";
import { FaBars, FaUserLock, FaX } from "react-icons/fa6";
import logo from '../assets/logo.png';
import { Footer } from "./Footer";

export const NavPanel = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [panel, setPanel] = useState(true);
  const baseURL = "https://online-school-93yp.onrender.com";
  const { role } = useSelector((state) => state.user.currentUser);

  const setNavPanelBackground = (targetLocation) => {
    if (location.pathname === targetLocation)
      return { borderBottom: "1px solid white", color: "white" };
    return {};
  };

  const handleSignOut = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${baseURL}/logout`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });

      if (response.ok) {
        const resData = await response.json();
        console.log(resData.message);
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        const resData = await response.json();
        console.log(resData.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const hideBars = {
    display: !panel ? "none" : "block"
  }

  return (
    <>
      <div style={hideBars} className="mobile-nav">
        <span
          role="button"
          onClick={() => setPanel(!panel)}
          onKeyDown={() => setPanel(!panel)}
          tabIndex={0}
          aria-label="Toggle Panel"
        >
          <FaBars className="text-white menu-btn ms-2 mt-2" />
        </span>
      </div>
      <div
        className={!panel ? "show" : "hide"}
        id="header"
        role="button"
        onClick={() => setPanel(!panel)}
        onKeyDown={() => setPanel(!panel)}
        tabIndex={0}
      >
        <div className="logo-container">
          <img
            src={logo}
            alt="logo"
            className="logo"
          />
        </div>
        <div className="nav-panel">
          {role === "student" ? (
            <StudentUser setNavPanelBackground={setNavPanelBackground} />
          ) : role === "lecturer" ? (
            <LecturerUser setNavPanelBackground={setNavPanelBackground} />
          ) : role === "hod" ? (
            <HodUser setNavPanelBackground={setNavPanelBackground} />
          ) : role === "dean" ? (
            <DeanUser setNavPanelBackground={setNavPanelBackground} />
          ) : (
            ""
          )}
          <div>
            <button type="button" onClick={handleSignOut} className="sign-out">
              <FaUserLock className="mb-1 me-1" />
              SIGN OUT
            </button>
          </div>
          <Footer className="footer" />
        </div>
        <div
          className="mobile-close"
          role="button"
          onClick={() => setPanel(!panel)}
          onKeyDown={() => setPanel(!panel)}
          tabIndex={0}
          aria-label="close button"
        >
          <FaX className="text-white menu-btn" />
        </div>
      </div>
    </>
  );
};
