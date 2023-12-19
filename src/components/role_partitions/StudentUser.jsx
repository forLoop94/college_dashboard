import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const StudentUser = ({ setNavPanelBackground }) => {
  return (
    <ul>
      <li>
        <Link style={setNavPanelBackground("/student_details")} to="student_details">Personal profile</Link>
      </li>
      <li>
        <Link style={setNavPanelBackground("/recommended_courses")} to="/recommended_courses">Recommended Courses</Link>
      </li>
      <li>
        <Link style={setNavPanelBackground("/course_grades")} to="/course_grades">Grades</Link>
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

StudentUser.propTypes = {
  setNavPanelBackground: PropTypes.func.isRequired,
};