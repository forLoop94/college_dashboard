import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getLecturerEligibleCourses } from '../redux/lecturer/lecturerSlice';

export const LecturerEligibleCourses = () => {
  const courses = useSelector((state) => state.Lecturers.eligibleCourses);
  console.log(courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLecturerEligibleCourses());
  }, [])

  if (!courses.length === 0) {
    return (
      <section>
        <h1>Courses you qualify to handle</h1>
        {courses.map((course) => {
          <article key={course.id}>
            <div>{course.title}</div>
            <div>{course.code}</div>
            <div>{course.level}</div>
          </article>
        })}
      </section>
    )
  }
}
