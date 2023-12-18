import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAssignedCourses } from "../../redux/lecturer/lecturerSlice";
import "../../styles/lecturers.css";
import { Button } from "react-bootstrap";
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
    <section className="technical-pages-bg">
      <h1 className="pt-1 tech-header">Assigned Courses</h1>
      <main className="assigned_courses">
        <section>
          <small>
            Below are the courses you have been assigned by the department.
            There have been choosen from courses you elegible to handle
          </small>
          {assignedCourses.map((course) => (
            <article key={course.id}>
              <h3>{course.title}</h3>
              <div>{course.code}</div>
              <div>{course.level}</div>
              <div>{course.department_id}</div>
              <Button
                variant="primary"
                className="students-btn"
                type="button"
                onClick={() => showStudents(course.id, course.title)}
              >
                students offering
              </Button>
            </article>
          ))}
        </section>
      </main>
    </section>
  );
};
