import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const StudentUser = ({ setNavPanelBackground }) => {
  return (
    <ul>
      <li style={setNavPanelBackground("/student_details")}>
        <Link to="student_details">Personal profile</Link>
      </li>
      <li style={setNavPanelBackground("/recommended_courses")}>
        <Link to="/recommended_courses">Recommended Courses</Link>
      </li>
      <li style={setNavPanelBackground("/course_grades")}>
        <Link to="/course_grades">Grades</Link>
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