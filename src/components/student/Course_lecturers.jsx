import { useState } from "react";
import { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { FaAngleLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCourseLecturers } from "../../redux/course/courseSlice";
import { LecturerDetails } from "../lecturer/LecturerDetails";

export const CourseLecturers = () => {
  const [lecturerId, setLecturerId] = useState(null);
  const navigate = useNavigate();
  const { courseId, courseTitle } = useParams();
  const dispatch = useDispatch();
  const lecturers = useSelector((state) => state.Courses.lecturers);

  useEffect(() => {
    dispatch(getCourseLecturers(courseId));
  }, [courseId, dispatch]);

  const closeProfileModal = () => {
    setLecturerId(null);
  };

  if (lecturers.length === 0) {
    return "This course has not been assigned a lecturer";
  }

  return (
    <section className="technical-pages-bg-v2">
      <h1 className="tech-header-v2">Course Lecturers</h1>
      <div className="d-flex flex-column align-items-center tech-card-container-v2">
        <small className="small-note-light m-4">
          Below are lecturers handling {courseTitle}
        </small>
        {lecturers.map((lecturer) => (
          <div
            className="tech-card-v2 d-flex mb-5 justify-content-between align-items-center h-25"
            key={lecturer.id}
          >
            <img
              src={lecturer.photo}
              alt={lecturer.first_name}
              width="80px"
              height="80px"
            />

            <div className="w-75 d-flex flex-column justify-content-between upper-details">
              <div className="d-flex details justify-content-between">
                <h5>
                  <span>{lecturer.first_name + " "}</span>
                  <span>{" " + lecturer.last_name}</span>
                </h5>
                <div>Gender: {lecturer.gender}</div>
                <div>Major: {lecturer.core_discipline}</div>
                <div>
                  Qualification: {lecturer.highest_academic_qualification}
                </div>
              </div>

              <div className="d-flex card-links">
                <div className="d-flex">
                  <div
                    className="false-links"
                    onClick={() => setLecturerId(lecturer.id)}
                  >
                    Profile
                    <span className="ms-2 me-2">|</span>
                  </div>
                  <div
                    className="false-links"
                    onClick={() =>
                      navigate(
                        `/lesson_area_lecturer/${courseId}/${courseTitle}/${lecturer.id}/${lecturer.first_name}/${lecturer.last_name}`
                      )
                    }
                  >
                    Lesson Area
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button
          className="inner-page-return"
          onClick={() => navigate("/recommended_courses")}
        >
          <FaAngleLeft />
        </button>
      </div>
      {lecturerId && (
        <Modal show={true} onHide={closeProfileModal}>
          <Modal.Body>
            {<LecturerDetails key={lecturerId} lecturerId={lecturerId} />}
          </Modal.Body>
        </Modal>
      )}
    </section>
  );
};
