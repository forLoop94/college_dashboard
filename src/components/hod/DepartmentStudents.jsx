import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDepartmentStudents } from '../../redux/department/departmentSlice';

export const DepartmentStudents = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.Departments.departmentStudents);

  useEffect(() => {
    dispatch(getDepartmentStudents())
  }, [dispatch])

  if (students.length === 0) {
    return "No students yet!"
  } else {
    return (
      <div>
      <h1>Students in {students[0].department.name} department</h1>
        {students.map((student) => (
          <div key={student.id}>
            <h1>{student.first_name}</h1>
            <div>{student.last_name}</div>
            <div>{student.department.name}</div>
          </div>
        ))}
      </div>
    )
  }
}
