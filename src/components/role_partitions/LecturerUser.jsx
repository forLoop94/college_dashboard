import React from 'react'
import { Link } from 'react-router-dom'

export const LecturerUser = ({ setNavPanelBackground }) => {
  return (
    <ul>
      <li style={setNavPanelBackground("/lecturers")}>
        <Link to="lecturers">Lecturer</Link>
      </li>
      <li style={setNavPanelBackground("/lecturer_eligible")}>
        <Link to="lecturer_eligible">Lecturer Eligible</Link>
      </li>
      <li style={setNavPanelBackground("/add_lecturer")}>
        <Link to="add_student">Lecturer Profile</Link>
      </li>
    </ul>
  )
}