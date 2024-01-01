import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  FaCriticalRole,
  FaToolbox,
  FaUserTie,
  FaUserLarge,
} from "react-icons/fa6";

export const LecturerUser = ({ setNavPanelBackground }) => {
  return (
    <ul>
      <li>
        <Link
          style={setNavPanelBackground("/lecturer_details")}
          to="lecturer_details"
        >
          <FaUserTie className="mb-1 me-1" />
          Personal Profile
        </Link>
      </li>
      <li>
        <Link style={setNavPanelBackground("/lecturers")} to="lecturers">
          <FaUserLarge className="mb-1 me-1" />
          Lecturers
        </Link>
      </li>
      <li>
        <Link
          style={setNavPanelBackground("/assigned_courses")}
          to="assigned_courses"
        >
          <FaCriticalRole className="mb-1 me-1" />
          Assigned Courses
        </Link>
      </li>
      <li>
        <Link
          style={setNavPanelBackground("/lecturer_eligible")}
          to="lecturer_eligible"
        >
          <FaToolbox className="mb-1 me-1" />
          Proficiences
        </Link>
      </li>
    </ul>
  );
};

LecturerUser.propTypes = {
  setNavPanelBackground: PropTypes.func.isRequired,
};
