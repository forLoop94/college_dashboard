import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getStudents } from '../../redux/student/studentSlice';

export const Students = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.Students.students);
  const token = localStorage.getItem('token');

  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch, token])

  if (students.length === 0) {
    return "No students yet!"
  } else {
    return (
      <div>
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
