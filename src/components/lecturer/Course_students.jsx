import { useState } from 'react';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCourseStudents } from '../../redux/course/courseSlice';
import { Grade } from './Grade';

export const Course_students = ({ courseId }) => {
  const dispatch = useDispatch();
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const students = useSelector((state) => state.Courses.students);

  useEffect(() => {
    dispatch(getCourseStudents(courseId));
  }, [])

  const createGrade = (studentId) => {
    setSelectedStudentId(studentId);
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
          <button onClick={() => createGrade(student.id)}>Grade</button>
        </article>
      ))}
      {selectedStudentId && <Grade key={selectedStudentId} studentId={selectedStudentId} courseId={courseId} />}
    </section>
  )
}
