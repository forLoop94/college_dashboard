import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCourseGrades } from '../../redux/grade/gradeSlice';
import { gradeAlphabet } from '../../utils/gradeAlphabet';

export const Grades = () => {
  const dispatch = useDispatch();
  const gradesInfo = useSelector((state) => state.Grades.courseGrades);

  useEffect(() => {
    dispatch(getCourseGrades());
  }, [])

  return (
   <section>
    <h1>Course and Grade Information</h1>
    {gradesInfo.map((course) => (
      <article key={course.id}>
        <div>{course.title}</div>
        <div>{course.code}</div>
        <div>{course.grade}</div>
        <div>{gradeAlphabet(course.grade)}</div>
      </article>
    ))}
   </section>
  )
}
