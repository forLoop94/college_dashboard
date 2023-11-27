import { Link } from 'react-router-dom'

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
    </ul>
  )
}
