import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecommendedCourses } from '../../redux/student/studentSlice'
import { CourseLecturers } from './Course_lecturers';

export const Recommended_courses = () => {
  const dispatch = useDispatch();
  const [selectedCourse, setSelectedCourse] = useState({
    id: null,
    title: null
  });
  const recCourses = useSelector((state) => state.Students.recommended)

  useEffect(() => {
    dispatch(getRecommendedCourses())
  }, [dispatch])

  const showCourseLecturers = (id, title) => {
    setSelectedCourse({
      id: id,
      title: title
    });
  }

  return (
    <section>
      <h1>Recommended Courses</h1>
      {recCourses.map((course) => (
        <article key={course.id}>
          <h3>{course.title}</h3>
          <div>{course.code}</div>
          <div>{course.level}</div>
          <div>{course.department.name}</div>
          <button className='btn btn-primary' onClick={() => showCourseLecturers(course.id, course.title)}>Lecturers</button>
        </article>
      ))}
      {selectedCourse.id && <CourseLecturers key={selectedCourse.id} courseInfo={selectedCourse}/>}
    </section>
  )
}
