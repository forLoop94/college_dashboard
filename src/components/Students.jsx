import React from 'react'
import { useSelector } from 'react-redux'

export const Students = () => {
  const students = useSelector((state) => state.STUDENTS.students);
  console.log(students);
  return (
    <div>Students</div>
  )
}
