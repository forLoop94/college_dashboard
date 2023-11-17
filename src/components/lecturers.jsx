import React from 'react'
import { useSelector } from 'react-redux'

export const lecturers = () => {
  const [lecturers] = useSelector((state) => state.Lecturers);
  console.log(lecturers);
  return (
    <div>lecturers</div>
  )
}
