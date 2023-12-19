import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const DeanUser = ({ setNavPanelBackground }) => {
  return (
    <ul>
      <list>Lists</list>
      <li>
        <Link style={setNavPanelBackground("/dean_details")} to="dean_details">Personal profile</Link>
      </li>
      <li>
        <Link style={setNavPanelBackground("/hods_list")} to="hods_list">Hods</Link>
      </li>
      <li>
        <Link style={setNavPanelBackground("/departments")} to="departments">Departments</Link>
      </li>
      <li>
        <Link style={setNavPanelBackground("/dean_list")} to="dean_list">Dean List</Link>
      </li>
      <li>
        <Link style={setNavPanelBackground("/add_department")} to="add_department">Department Form</Link>
      </li>
    </ul>
  )
}

DeanUser.propTypes = {
  setNavPanelBackground: PropTypes.func.isRequired,
};