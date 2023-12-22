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
import { FaAngleLeft, FaX } from "react-icons/fa6";

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
  };

  return (
    <>
      <div className="technical-pages-bg-v2">
        <h1 className="tech-header-v2">Students</h1>
        <div className="d-flex flex-column align-items-center tech-card-container-v2">
          <small className="small-note-light m-4">
            Below are students offering {courseTitle}
          </small>
          {students.map((student) => (
            <div
              className="tech-card-v2 d-flex mb-5 justify-content-between align-items-center h-25"
              key={student.id}
            >
              <img
                src={student.photo}
                alt={student.first_name}
                width="80px"
                height="80px"
              />
              <div className="w-75 d-flex flex-column justify-content-between upper-details">
                <div className="d-flex details justify-content-between">
                  <h5>
                    <span>{student.first_name + " "}</span>
                    <span>{" " + student.last_name}</span>
                  </h5>
                  <div>Gender: {student.gender}</div>
                  <div>Age: {student.age}</div>
                  <div>Level: {student.level}</div>
                </div>
                <div className="d-flex card-links">
                  <div className="d-flex">
                    <div
                      className="false-links"
                      onClick={() => {
                        fetchStudent(
                          student.id,
                          student.first_name,
                          student.last_name
                        );
                      }}
                    >
                      Exchanges
                      <span className="ms-2 me-2">|</span>
                    </div>
                    <div
                      className="false-links"
                      onClick={() => createGrade(student.id)}
                    >
                      Grade
                      <span className="ms-2 me-2">|</span>
                    </div>
                    <div
                      className="false-links"
                      onClick={() => showStudentProfile(student.id)}
                    >
                      Profile
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="inner-page-return"
          onClick={() => navigate("/assigned_courses")}
        >
          <FaAngleLeft />
        </button>
        {selectedStudentId && (
          <Modal show={true} onHide={closeGradeModal}>
            <Modal.Body>
              {/* <FaX className="text-white menu-btn" /> */}
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
            <Modal.Body>
              {<StudentDetails key={studentId} studentId={studentId} />}
            </Modal.Body>
          </Modal>
        )}
      </div>
    </>
  );
};

CourseStudents.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }),
};
