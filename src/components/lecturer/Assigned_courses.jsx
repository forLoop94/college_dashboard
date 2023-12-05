import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAssignedCourses } from "../../redux/lecturer/lecturerSlice";
import { CourseStudents } from "./Course_students";
import "../../styles/lecturers.css";
import { Button } from 'react-bootstrap';

export const Assigned_courses = () => {
  const dispatch = useDispatch();
  const assignedCourses = useSelector(
    (state) => state.Lecturers.assignedCourses
  );
  const [selectedCourse, setSelectedCourse] = useState({
    id: null,
    title: null
  })

  useEffect(() => {
    dispatch(getAssignedCourses());
  }, [dispatch]);

  const showStudents = (courseId, courseTitle) => {

    setSelectedCourse({
      id: courseId,
      title: courseTitle
    })
  };

  const hideAssignedCourses = {
    display: selectedCourse.id ? "none" : "block"
  };

  const showAssignedCourses = (toogle) => {
    if(toogle) {
      setSelectedCourse({
        id: null
      });
    }
  }

  return (
    <>
      <h1>Assigned Courses</h1>
      <small>
        Below are the courses you have been assigned by the department. There
        have been choosen from courses you elegible to handle
      </small>
      <main className="assigned_courses">
        <section style={hideAssignedCourses}>
          {assignedCourses.map((course) => (
            <article key={course.id}>
              <h3>{course.title}</h3>
              <div>{course.code}</div>
              <div>{course.level}</div>
              <div>{course.department_id}</div>
              <Button variant="primary" className="students-btn" type="button" onClick={() => showStudents(course.id, course.title)}>
                students offering
              </Button>
            </article>
          ))}
        </section>
        {selectedCourse.id && (
          <CourseStudents key={selectedCourse.id} course={selectedCourse} showAssignedCourses={showAssignedCourses} />
        )}
      </main>
    </>
  );
};
