import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getDepartments } from '../../redux/department/departmentSlice'

export const Departments = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDepartments());
  }, [])

  return (
    <div>Departments</div>
  )
}
