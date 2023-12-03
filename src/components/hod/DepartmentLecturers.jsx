import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDepartmentLecturers } from '../../redux/department/departmentSlice';

export const DepartmentLecturers = () => {
  const dispatch = useDispatch();
  const lecturers = useSelector((state) => state.Departments.departmentLecturers);

  useEffect(() => {
    dispatch(getDepartmentLecturers())
  }, [dispatch])

  if (lecturers.length === 0) {
    return "No lecturers yet!"
  } else {
    return (
      <div>
        <h1>Lecturers in {lecturers[0].department.name} department</h1>
        {lecturers.map((lecturer) => (
          <div key={lecturer.id}>
            <h2>{lecturer.first_name}</h2>
            <div>{lecturer.last_name}</div>
          </div>
        ))}
      </div>
    )
  }
}
