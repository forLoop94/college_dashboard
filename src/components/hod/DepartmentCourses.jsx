import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getDepartmentCourses } from '../../redux/department/departmentSlice';

export const DepartmentCourses = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDepartmentCourses())
  }, [])

  return (
    <div>DepartmentCourses</div>
  )
}
