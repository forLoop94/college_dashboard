import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getStudents } from '../redux/student/studentSlice';

export const Students = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.Students.students);
  console.log(students);
  const token = localStorage.getItem('token');

  useEffect(() => {
    dispatch(getStudents());
  }, [])

  return (
    <div>
      {students.map((student) => (
        <div key={student.id}>
          <h1>{student.first_name}</h1>
          <div>{student.last_name}</div>
        </div>
      ))}
    </div>
  )
}
