import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { getCurrentUser } from "../redux/user/userSlice";
import { NavPanel } from "./NavPanel";

export const Root = () => {
  const [userData, setUserData] = useState({
    role: "",
    profile_exists: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const baseURL = "http://localhost:4000";

  const getUser = async () => {
    const token = localStorage.getItem("token");

    const response = await fetch(`${baseURL}/current_user`, {
      headers: {
        authorization: `${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else if(response.status === 401) {
      navigate("/login")
    }
  };

  useEffect(() => {
    dispatch(getCurrentUser());
    const fetchData = async () => {
      const data = await getUser();

      if(!data) {
        navigate("/login");
        return;
      } else {
        setUserData({
          role: data.role,
          profile_exists: data.profile_exists
        })
      }

      if (!token) {
        navigate("/login");
        return;
      }

      if (!userData.profile_exists && !userData.role) {
        return;
      }

      const addProfilePath = `/add_${userData.role.toLowerCase()}`;

      if (!userData.profile_exists) {
        navigate(addProfilePath);
        return;
      }

      if (userData.profile_exists && userData.role === "student") {
        navigate("/student_details");
      } else if (userData.profile_exists && userData.role === "lecturer") {
        navigate("/lecturer_details");
      } else if (userData.profile_exists && userData.role === "hod") {
        navigate("/hod_details");
      } else {
        navigate("/dean_details");
      }
    };

    fetchData();
  }, [token, userData.profile_exists, userData.role, navigate, dispatch]);

  return (
    <div id="root">
      <NavPanel />
      <div id="pages-content">
        <Outlet />
      </div>
    </div>
  );
};
