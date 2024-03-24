import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { getCurrentUser } from "../redux/user/userSlice";
import { LoadingScreen } from "./auth/LoadingScreen";
import { NavPanel } from "./NavPanel";

export const Root = () => {
  const { role, profile_exists } = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getCurrentUser());
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.log(error.response)
          navigate("/login");
          return;
        }
        console.error("Error fetching current user:", error);
        navigate("/login");
        return;
      }

      if (!token) {
        navigate("/login");
        return;
      }

      if (!profile_exists && !role) {
        return;
      }

      const addProfilePath = `/add_${role.toLowerCase()}`;

      if (!profile_exists) {
        navigate(addProfilePath);
        return;
      }

      if (profile_exists && role === "student") {
        navigate("/student_details");
      } else if (profile_exists && role === "lecturer") {
        navigate("/lecturer_details");
      } else if (profile_exists && role === "hod") {
        navigate("/hod_details");
      } else {
        navigate("/dean_details");
      }
    };

    fetchData();
  }, [token, profile_exists, role, navigate, dispatch]);

  if(!role) {
    return <LoadingScreen />
  }

  return (
    <div id="root">
      <NavPanel />
      <div id="pages-content">
        <Outlet />
      </div>
    </div>
  );
};
