import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourseStudents } from "../../redux/course/courseSlice";
import { Grade } from "./Grade";
import PropTypes from "prop-types";
import { Button, Modal } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { LessonArea } from "../student/lesson_area/Lesson-area";

export const CourseStudents = ({ course, showAssignedCourses }) => {
  const dispatch = useDispatch();
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [studentDetails, setStudentDetails] = useState({
    id: null,
    first_name: "",
    last_name: "",
  });
  const students = useSelector((state) => state.Courses.students);

  useEffect(() => {
    dispatch(getCourseStudents(course.id));
  }, [dispatch, course.id]);

  const createGrade = (studentId) => {
    setSelectedStudentId(studentId);
  };

  const closeGradeModal = () => {
    setSelectedStudentId(null);
  };

  const fetchStudent = (id, fName, lName) => {
    setStudentDetails({
      id: id,
      first_name: fName,
      last_name: lName,
    });
  };

  const showStudents = (bool) => {
    if(bool) {
      setStudentDetails({
        id: null,
        first_name: '',
        last_name: ''
      })
    }
  }

  return (
    <section>
      <h1>Students offering {course.title}</h1>
      {students.map((student) => (
        <article key={student.id}>
          <h3>
            <span>{student.first_name + " "}</span>
            <span>{" " + student.last_name}</span>
          </h3>
          <div>{student.photo}</div>
          <div>{student.gender}</div>
          <div>{student.level}</div>
          <button
            className="btn btn-dark me-5"
            onClick={() =>
              fetchStudent(student.id, student.first_name, student.last_name)
            }
          >
            Submissions & Dialogue
          </button>
          <button
            className="btn btn-primary"
            onClick={() => createGrade(student.id)}
          >
            Grade
          </button>
        </article>
      ))}
      <button
        className="btn btn-primary mt-5"
        onClick={() => showAssignedCourses(true)}
      >
        Back to assigned courses
      </button>
      {selectedStudentId && (
        <Modal show={true} onHide={closeGradeModal}>
          <Modal.Body>
            <Grade
              studentId={selectedStudentId}
              courseId={course.id}
              onClose={closeGradeModal}
            />
          </Modal.Body>
        </Modal>
      )}
      <div>
        {studentDetails.id && <LessonArea key={studentDetails.id} studentDetails={studentDetails} courseInfo={course} showStudents={showStudents} />}
      </div>
    </section>
  );
};

CourseStudents.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }),
};
