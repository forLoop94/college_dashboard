import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAssignedCourses } from "../../redux/lecturer/lecturerSlice";
import "../../styles/lecturers.css";
import { useNavigate } from "react-router-dom";

export const Assigned_courses = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const assignedCourses = useSelector(
    (state) => state.Lecturers.assignedCourses
  );

  useEffect(() => {
    dispatch(getAssignedCourses());
  }, [dispatch]);

  const showStudents = (courseId, courseTitle) => {
    navigate(`/assigned_courses/${courseId}/${courseTitle}`);
  };

  return (
    <main className="technical-pages-bg">
      <h1 className="tech-header">Assigned Courses</h1>
      <section className="d-flex flex-column align-items-center tech-card-container">
        <small className="small-note-light mb-2">
          Below are the courses you have been assigned by the department. There
          have been choosen from courses you elegible to handle
        </small>
        {assignedCourses.map((course) => (
          <article
            className="assigned_courses tech-card d-flex mb-5 justify-content-between align-items-center"
            key={course.id}
          >
            <h3 className="tech-title">{course.title}</h3>
            <div className="tech-card-content">
              <div>Course code: {course.code}</div>
              <div className="text-center mt-2">Level: {course.level}</div>
            </div>
            <div className="tech-card-content d-flex flex-column align-items-center">
              {/* <div className="mt-2">Department: {course.department.name}</div> */}
              <button
                className="tech-btn mt-2"
                onClick={() => showStudents(course.id, course.title)}
              >
                Students
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};
