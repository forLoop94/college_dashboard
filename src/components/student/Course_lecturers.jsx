import { useState } from "react";
import { useEffect } from "react";
import { Modal } from "react-bootstrap";
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
  }, [dispatch]);

  const showLecturerProfile = (id) => {
    setLecturerId(id);
  }

  const closeProfileModal = () => {
    setLecturerId(null);
  }

  if (lecturers.length === 0) {
    return "This course has not been assigned a lecturer";
  }

  return (
    <main>
      <section>
        {lecturers.map((lecturer) => (
          <article key={lecturer.id}>
            <h3>
              <span>{lecturer.first_name + " "}</span>
              <span>{" " + lecturer.last_name}</span>
            </h3>
            <div>{lecturer.photo}</div>
            <div>Gender: {lecturer.gender}</div>
            <div>Major: {lecturer.core_discipline}</div>
            <div>Qualification: {lecturer.highest_academic_qualification}</div>
            <button className="btn btn-light" onClick={() => showLecturerProfile(lecturer.id)}>Profile</button>
            <button
              className="btn btn-light mb-5"
              onClick={() => navigate(`/lesson_area_lecturer/${courseId}/${courseTitle}/${lecturer.id}/${lecturer.first_name}/${lecturer.last_name}`)}
            >
              Lesson Area
            </button>
          </article>
        ))}
        <button
          className="btn btn-primary mt-5"
          onClick={() => navigate("/recommended_courses")}
        >
          Back to Courses
        </button>
      </section>
      {lecturerId && (
        <Modal show={true} onHide={closeProfileModal}>
          <Modal.Body>{<LecturerDetails key={lecturerId} lecturerId={lecturerId} />}</Modal.Body>
        </Modal>
      )}
    </main>
  );
};
