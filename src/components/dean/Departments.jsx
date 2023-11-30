import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDeanDepartments } from '../../redux/department/departmentSlice'

export const Departments = () => {
  const dispatch = useDispatch();
  const departments = useSelector(state => state.Departments.deanDepartments);

  useEffect(() => {
    dispatch(getDeanDepartments());
  }, [])

  return (
    <section>
      <h1>Departments</h1>
      {departments.map((dept) => (
        <article key={dept.id}>
          <div>Official Name: {dept.name}</div>
          <div>School ID: {dept.school_id}</div>
        </article>
      ))}
    </section>
  )
}
