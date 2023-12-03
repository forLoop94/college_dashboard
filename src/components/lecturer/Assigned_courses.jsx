import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAssignedCourses } from '../../redux/lecturer/lecturerSlice';
import { CourseStudents } from './Course_students';

export const Assigned_courses = () => {
  const dispatch = useDispatch();
  const assignedCourses = useSelector((state) => state.Lecturers.assignedCourses);
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  useEffect(() => {
    dispatch(getAssignedCourses());
  }, [dispatch])

  const showStudents = (courseId) => {
    setSelectedCourseId(courseId);
  }

  return (
    <section>
      <h1>Assigned Courses</h1>
      <small>Below are the courses you have been assigned by the department. There have been choosen from courses you elegible to handle</small>
      {assignedCourses.map((course) => (
        <article key={course.id}>
          <h3>{course.title}</h3>
          <div>{course.code}</div>
          <div>{course.level}</div>
          <div>{course.department_id}</div>
          <button
            type='button'
            onClick={() => showStudents(course.id)}
          >
            students offering
          </button>
        </article>
      ))}
      {selectedCourseId && <CourseStudents key={selectedCourseId} courseId={selectedCourseId} />}
    </section>
  )
}
