import React from 'react'
import { useSelector } from 'react-redux'

export const Lecturers = () => {
  const lecturers = useSelector((state) => state.Lecturers.lecturers);
  console.log(lecturers);
  return (
    <div>lecturers</div>
  )
}
