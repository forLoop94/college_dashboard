import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const LecturerUser = ({ setNavPanelBackground }) => {
  return (
    <ul>
      <li style={setNavPanelBackground("/lecturers")}>
        <Link to="lecturers">Lecturer</Link>
      </li>
      <li style={setNavPanelBackground("/assigned_courses")}>
        <Link to="assigned_courses">Assigned Courses</Link>
      </li>
      <li style={setNavPanelBackground("/lecturer_eligible")}>
        <Link to="lecturer_eligible">Lecturer Eligible</Link>
      </li>
      {/* <li style={setNavPanelBackground("/lecturers")}>
        <Link to="/lecturer_user/lecturers">Lecturer</Link>
      </li>
      <li style={setNavPanelBackground("/lecturer_eligible")}>
        <Link to="/lecturer_user/lecturer_eligible">Lecturer Eligible</Link>
      </li>
      <li style={setNavPanelBackground("/add_lecturer")}>
        <Link to="lecturer_user/add_student">Lecturer Profile</Link>
      </li> */}
    </ul>
  )
}

LecturerUser.propTypes = {
  setNavPanelBackground: PropTypes.func.isRequired,
};
