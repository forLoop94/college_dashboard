import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecommendedCourses } from '../../redux/student/studentSlice'

export const Recommended_courses = () => {
  const dispatch = useDispatch();
  const recCourses = useSelector((state) => state.Students.recommended)
  console.log(recCourses);

  useEffect(() => {
    dispatch(getRecommendedCourses())
  }, [])

  return (
    <section>
      <h1>Recommended Courses</h1>
      {recCourses.map((course) => (
        <article key={course.id}>
          <h3>{course.title}</h3>
          <div>{course.code}</div>
          <div>{course.level}</div>
          <div>{course.department_id}</div>
        </article>
      ))}
    </section>
  )
}
