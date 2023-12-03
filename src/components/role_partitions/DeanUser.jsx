import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const DeanUser = ({ setNavPanelBackground }) => {
  return (
    <ul>
      <list>Lists</list>
      <li style={setNavPanelBackground("/departments")}>
        <Link to="departments">Departments</Link>
      </li>
      <li style={setNavPanelBackground("/dean_list")}>
        <Link to="dean_list">Dean List</Link>
      </li>
      <li style={setNavPanelBackground("/add_department")}>
        <Link to="add_department">Department Form</Link>
      </li>
    </ul>
  )
}

DeanUser.propTypes = {
  setNavPanelBackground: PropTypes.func.isRequired,
};