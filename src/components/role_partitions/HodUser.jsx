import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  FaPuzzlePiece,
  FaUserTie,
  FaReadme,
  FaStamp,
  FaUserLarge,
} from "react-icons/fa6";

export const HodUser = ({ setNavPanelBackground }) => {
  return (
    <ul>
      <li>
        <Link style={setNavPanelBackground("/hod_details")} to="hod_details">
          <FaUserTie className="mb-1 me-1" />
          Personal Profile
        </Link>
      </li>
      <li>
        <Link
          style={setNavPanelBackground("/department_lecturers")}
          to="department_lecturers"
        >
          <FaUserLarge className="mb-1 me-1" />
          Lecturers
        </Link>
      </li>
      <li>
        <Link
          style={setNavPanelBackground("/department_students")}
          to="/department_students"
        >
          <FaUserLarge className="mb-1 me-1" />
          Students
        </Link>
      </li>
      <li>
        <Link
          style={setNavPanelBackground("/department_courses")}
          to="department_courses"
        >
          <FaReadme className="mb-1 me-1" />
          Courses
        </Link>
      </li>
      <li>
        <Link style={setNavPanelBackground("/add_course")} to="add_course">
          <FaPuzzlePiece className="mb-1 me-1" />
          New Course
        </Link>
      </li>
      <li>
        <Link
          style={setNavPanelBackground("/allotment_data")}
          to="allotment_data"
        >
          <FaStamp className="mb-1 me-1" />
          Allotment Information
        </Link>
      </li>
    </ul>
  );
};

HodUser.propTypes = {
  setNavPanelBackground: PropTypes.func.isRequired,
};
