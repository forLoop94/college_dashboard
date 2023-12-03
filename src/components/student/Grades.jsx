import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCourseGrades } from '../../redux/grade/gradeSlice';
import { getRecommendedCourses } from '../../redux/student/studentSlice';
import { gradeAlphabet } from '../../utils/gradeAlphabet';
import { gradePoint } from '../../utils/gradePoint';

export const Grades = () => {
  const dispatch = useDispatch();
  const gradesInfo = useSelector((state) => state.Grades.courseGrades);
  console.log(gradesInfo)
  const recCourses = useSelector((state) => state.Students.recommended)

  useEffect(() => {
    dispatch(getCourseGrades());
    dispatch(getRecommendedCourses());
  }, [dispatch])

  const gradePointCalculator = () => {
    const totalQualityPoints = gradesInfo.reduce((total, num) => total + (gradePoint(gradeAlphabet(num.grade)) * num.credit_load), 0);
    const totalCredit = gradesInfo.reduce((total, num) => total + num.credit_load, 0);
    const gpa = totalQualityPoints / totalCredit;
    return gpa.toFixed(2);
  }

  return (
   <section>
    <h1>Course and Grade Information</h1>
    <small>Note: {`Grades are available for ${gradesInfo.length} of ${recCourses.length} recommended courses`}</small>
    {gradesInfo.map((course) => (
      <article key={course.id}>
        <div>Title: {course.title}</div>
        <div>Code: {course.code}</div>
        <div>Credit Hours: {course.credit_load}</div>
        <div>Score: {course.grade}</div>
        <div>Symbol: {gradeAlphabet(course.grade)}</div>
        <div>Point: {gradePoint(gradeAlphabet(course.grade))}</div>
      </article>
    ))}
    <h2>GPA: {gradePointCalculator()}</h2>
   </section>
  )
}
