import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCourseLecturers } from '../../redux/course/courseSlice';

export const CourseLecturers = ({ courseInfo, showRecCourses }) => {
  const dispatch = useDispatch();
  const lecturers = useSelector(state => state.Courses.lecturers);

  useEffect(() => {
    dispatch(getCourseLecturers(courseInfo.id));
  }, [dispatch])

  if (lecturers.length === 0) {
    return "This course has not been assigned a lecturer";
  }

  return (
    <section>
      {lecturers.map((lecturer) => (
        <article key={lecturer.id}>
          <h3>
            <span>{lecturer.first_name + " "}</span>
            <span>{" " + lecturer.last_name}</span>
          </h3>
          <div>{lecturer.photo}</div>
          <div>Gender: {lecturer.gender}</div>
          <div>Major: {lecturer.core_discipline}</div>
          <div>Qualification: {lecturer.highest_academic_qualification}</div>
        </article>
      ))}
      <button className='btn btn-primary' onClick={() => showRecCourses(true)}>Back to Courses</button>
    </section>
  )
}
