import { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getDepartmentStudents } from '../../redux/department/departmentSlice';
import { StudentDetails } from '../student/StudentDetails';

export const DepartmentStudents = () => {
  const dispatch = useDispatch();
  const [studentId, setStudentId] = useState(null);
  const students = useSelector((state) => state.Departments.departmentStudents);

  useEffect(() => {
    dispatch(getDepartmentStudents())
  }, [dispatch])

  const showStudentProfile = (id) => {
    setStudentId(id);
  };

  const closeProfileModal = () => {
    setStudentId(null);
  }

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
            <button
              className="btn btn-light mt-3"
              onClick={() => showStudentProfile(student.id)}
            >
              Profile
            </button>
          </div>
        ))}
        {studentId && (
          <Modal show={true} onHide={closeProfileModal}>
            <Modal.Body>{<StudentDetails key={studentId} studentId={studentId} />}</Modal.Body>
          </Modal>
        )}
      </div>
    )
  }
}
