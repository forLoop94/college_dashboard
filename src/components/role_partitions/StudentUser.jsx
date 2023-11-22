import React from "react";
import { Link } from 'react-router-dom';

export const StudentUser = ({ setNavPanelBackground }) => {
  return (
    <ul>
      <li style={setNavPanelBackground("/students")}>
        <Link to="/students">Students</Link>
      </li>
      {/* <li style={setNavPanelBackground("/students")}>
        <Link to="/student_user/students">Students</Link>
      </li>
      <li style={setNavPanelBackground("/add_student")}>
        <Link to="/student_user/add_student">Student Profile</Link>
      </li> */}
    </ul>
  );
};
