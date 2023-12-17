import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourseStudents } from "../../redux/course/courseSlice";
import { Grade } from "./Grade";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";
import { propTypes } from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import { StudentDetails } from "../student/StudentDetails";

export const CourseStudents = () => {
  const { courseId, courseTitle } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [studentId, setStudentId] = useState(null);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const students = useSelector((state) => state.Courses.students);

  useEffect(() => {
    dispatch(getCourseStudents(courseId));
  }, [dispatch, courseId]);

  const createGrade = (studentId) => {
    setSelectedStudentId(studentId);
  };

  const closeGradeModal = () => {
    setSelectedStudentId(null);
  };

  const fetchStudent = (id, fName, lName) => {
    navigate(`/lesson_area/${courseId}/${courseTitle}/${id}/${fName}/${lName}`);
  };

  const showStudentProfile = (id) => {
    setStudentId(id);
  };

  const closeProfileModal = () => {
    setStudentId(null);
  }

  return (
    <div>
      <div>
        <h1>Students offering {courseTitle}</h1>
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
              onClick={() => {
                fetchStudent(student.id, student.first_name, student.last_name);
              }}
            >
              Private Exchanges
            </button>
            <button
              className="btn btn-primary"
              onClick={() => createGrade(student.id)}
            >
              Grade
            </button>
            <button
              className="btn btn-light ms-5"
              onClick={() => showStudentProfile(student.id)}
            >
              Profile
            </button>
          </article>
        ))}
        <button
          className="btn btn-primary mt-5"
          onClick={() => navigate("/assigned_courses")}
        >
          Back to assigned courses
        </button>
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
        {studentId && (
          <Modal show={true} onHide={closeProfileModal}>
            <Modal.Body>{<StudentDetails key={studentId} studentId={studentId} />}</Modal.Body>
          </Modal>
        )}
      </div>
    </div>
  );
};

CourseStudents.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }),
};
