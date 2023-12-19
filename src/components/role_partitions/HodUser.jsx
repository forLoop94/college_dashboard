import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export const HodUser = ({ setNavPanelBackground }) => {
  return (
    <ul>
      <list>Lists</list>
      <li>
        <Link style={setNavPanelBackground("/hod_details")} to="hod_details">Personal Profile</Link>
      </li>
      <li>
        <Link style={setNavPanelBackground("/department_lecturers")} to="department_lecturers">Lecturers</Link>
      </li>
      <li>
        <Link style={setNavPanelBackground("/department_students")} to="/department_students">Students</Link>
      </li>
      <li>
        <Link style={setNavPanelBackground("/department_courses")} to="department_courses">Courses</Link>
      </li>
      <li>
        <Link style={setNavPanelBackground("/add_course")} to="add_course">New Course</Link>
      </li>
      <li>
        <Link style={setNavPanelBackground("/allotment_data")} to="allotment_data">Allotment Information</Link>
      </li>
    </ul>
  )
}

HodUser.propTypes = {
  setNavPanelBackground: PropTypes.func.isRequired,
};
