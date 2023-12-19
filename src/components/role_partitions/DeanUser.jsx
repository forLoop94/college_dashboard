import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  FaSchoolCircleCheck,
  FaUserTie,
  FaSchool,
  FaUserLarge,
} from "react-icons/fa6";

export const DeanUser = ({ setNavPanelBackground }) => {
  return (
    <ul>
      <li>
        <Link style={setNavPanelBackground("/dean_details")} to="dean_details">
          <FaUserTie className="mb-1 me-1" />
          Personal profile
        </Link>
      </li>
      <li>
        <Link style={setNavPanelBackground("/hods_list")} to="hods_list">
          <FaUserLarge className="mb-1 me-1" />
          Hods
        </Link>
      </li>
      <li>
        <Link style={setNavPanelBackground("/departments")} to="departments">
          <FaSchool className="mb-1 me-1" />
          Departments
        </Link>
      </li>
      <li>
        <Link style={setNavPanelBackground("/dean_list")} to="dean_list">
          <FaUserLarge className="mb-1 me-1" />
          Dean List
        </Link>
      </li>
      <li>
        <Link
          style={setNavPanelBackground("/add_department")}
          to="add_department"
        >
          <FaSchoolCircleCheck className="mb-1 me-1" />
          Department Form
        </Link>
      </li>
    </ul>
  );
};

DeanUser.propTypes = {
  setNavPanelBackground: PropTypes.func.isRequired,
};
