import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export const HodUser = ({ setNavPanelBackground }) => {
  return (
    <ul>
      <list>Lists</list>
      <li style={setNavPanelBackground("/department_lecturers")}>
        <Link to="department_lecturers">Lecturers</Link>
      </li>
      <li style={setNavPanelBackground("/department_students")}>
        <Link to="/department_students">Students</Link>
      </li>
      <li style={setNavPanelBackground("/department_courses")}>
        <Link to="department_courses">Courses</Link>
      </li>
      <li style={setNavPanelBackground("/add_course")}>
        <Link to="add_course">New Course</Link>
      </li>
      <li style={setNavPanelBackground("/allotment_data")}>
        <Link to="allotment_data">Allotment Information</Link>
      </li>
    </ul>
  )
}

HodUser.propTypes = {
  setNavPanelBackground: PropTypes.func.isRequired,
};
