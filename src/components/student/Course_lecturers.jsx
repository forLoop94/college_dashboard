import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCourseLecturers } from "../../redux/course/courseSlice";
import { LessonArea } from "./lesson_area/Lesson-area";

export const CourseLecturers = () => {
  const navigate = useNavigate();
  const { courseId, courseTitle } = useParams();

  const [lecturerDetails, setlecturerDetails] = useState({
    id: null,
    first_name: '',
    last_name: ''
  });
  const dispatch = useDispatch();
  const lecturers = useSelector((state) => state.Courses.lecturers);

  useEffect(() => {
    dispatch(getCourseLecturers(courseId));
  }, [dispatch]);

  const fetchLecturer = (id, fName, lName) => {
    setlecturerDetails({
      id: id,
      first_name: fName,
      last_name: lName
    });
  };

  const hideLecturer = {
    display: lecturerDetails.id ? 'none' : 'block'
  }

  const showLecturer = (bool) => {
    if(bool) {
      setlecturerDetails({
        id: null
      })
    }
  }

  if (lecturers.length === 0) {
    return "This course has not been assigned a lecturer";
  }

  return (
    <main>
      <section style={hideLecturer}>
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
      {/* <section>
        {lecturerDetails.id && <LessonArea key={lecturerDetails.id} lecturerInfo={lecturerDetails} courseInfo={courseInfo} showLecturer={showLecturer} />}
      </section> */}
    </main>
  );
};
