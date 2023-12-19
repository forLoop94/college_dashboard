import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaToolbox, FaUserTie, FaTrophy } from "react-icons/fa6";

export const StudentUser = ({ setNavPanelBackground }) => {
  return (
    <ul>
      <li>
        <Link
          style={setNavPanelBackground("/student_details")}
          to="student_details"
        >
          <FaUserTie className="mb-1 me-1" />
          Personal profile
        </Link>
      </li>
      <li>
        <Link
          style={setNavPanelBackground("/recommended_courses")}
          to="/recommended_courses"
        >
          <FaToolbox className="mb-1 me-1" />
          Recommended Courses
        </Link>
      </li>
      <li>
        <Link
          style={setNavPanelBackground("/course_grades")}
          to="/course_grades"
        >
          <FaTrophy className="mb-1 me-1" />
          Grades
        </Link>
      </li>
    </ul>
  );
};

StudentUser.propTypes = {
  setNavPanelBackground: PropTypes.func.isRequired,
};
