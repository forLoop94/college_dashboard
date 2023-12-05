import { useState } from 'react';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCourseStudents } from '../../redux/course/courseSlice';
import { Grade } from './Grade';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';

export const CourseStudents = ({ courseId, setSelectedCourseId }) => {
  const dispatch = useDispatch();
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const students = useSelector((state) => state.Courses.students);

  useEffect(() => {
    dispatch(getCourseStudents(courseId));
  }, [dispatch, courseId])

  const createGrade = (studentId) => {
    setSelectedStudentId(studentId);
  }

  const closeGradeModal = () => {
    setSelectedStudentId(null);
  };

  const undoStudentsDisplay = () => {
    setSelectedCourseId(null);
  }

  return (
    <section>
      <h1>Students offering ...</h1>
      {students.map((student) => (
        <article key={student.id}>
          <h3>
            <span>{student.first_name + " "}</span>
            <span>{" " + student.last_name}</span>
          </h3>
          <div>{student.photo}</div>
          <div>{student.gender}</div>
          <div>{student.level}</div>
          <Button variant='primary' onClick={() => createGrade(student.id)}>Grade</Button>
        </article>
      ))}
      <button className='btn btn-primary' onClick={() => undoStudentsDisplay()}>Back to assigned courses</button>
      {selectedStudentId && (
        <Modal show={true} onHide={closeGradeModal}>
          <Modal.Body>
            <Grade
              studentId={selectedStudentId}
              courseId={courseId}
              onClose={closeGradeModal}
            />
          </Modal.Body>
        </Modal>
      )}
    </section>
  )
}

CourseStudents.propTypes = {
  courseId: PropTypes.number.isRequired
}