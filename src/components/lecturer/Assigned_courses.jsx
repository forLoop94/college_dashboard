import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getAssignedCourses } from '../../redux/lecturer/lecturerSlice';

export const Assigned_courses = () => {
  const dispatch = useDispatch();
  const assignedCourses = useSelector((state) => state.Lecturers.assignedCourses);

  useEffect(() => {
    dispatch(getAssignedCourses());
  }, [])

  return (
    <section>
      <h1>Assigned Courses</h1>
      <small>Below are the courses you have been assigned by the department. There have been choosen from courses you elegible to handle</small>
      {assignedCourses.map((course) => (
        <article key={course.id}>
          <h3>{course.title}</h3>
          <div>{course.code}</div>
          <div>{course.level}</div>
          <div>{course.department.name}</div>
          {/* <Link to={}></Link> */}
          <button type='button'>students offering</button>
        </article>
      ))}
    </section>
  )
}
