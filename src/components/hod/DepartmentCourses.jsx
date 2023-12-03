import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getDepartmentCourses } from '../../redux/department/departmentSlice';

export const DepartmentCourses = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.Departments.departmentCourses);

  useEffect(() => {
    dispatch(getDepartmentCourses())
  }, [dispatch])

  if (courses.length === 0) {
    return "No courses yet!"
  } else {
    return (
      <section>
      <h1>Courses in {courses[0].department.name} department</h1>
      {courses.map((course) => (
        <article key={course.id}>
          <h3>Course title: {course.title}</h3>
          <div>Course code: {course.code}</div>
          <div>Level offering: {course.level}</div>
          <div>Credit Hours: {course.credit_load}</div>
          <div>Department domiciled: {course.department.name}</div>
        </article>
      ))}
    </section>
    )
  }
}
