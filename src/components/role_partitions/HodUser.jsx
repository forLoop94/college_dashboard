import { Link } from 'react-router-dom'

export const HodUser = ({ setNavPanelBackground }) => {
  return (
    <ul>
      <li style={setNavPanelBackground("/lecturers")}>
        <Link to="lecturers">Lecturer</Link>
      </li>
      <li style={setNavPanelBackground("/departments")}>
        <Link to="departments">Departments</Link>
      </li>
      <li style={setNavPanelBackground("/add_departments")}>
        <Link to="add_departments">New Department</Link>
      </li>
    </ul>
  )
}
