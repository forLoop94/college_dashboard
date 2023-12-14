import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getRecommendedCourses } from "../../redux/student/studentSlice";
import { CourseLecturers } from "./Course_lecturers";

export const Recommended_courses = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState({
    id: null,
    title: null,
  });
  const recCourses = useSelector((state) => state.Students.recommended);

  useEffect(() => {
    dispatch(getRecommendedCourses());
  }, [dispatch]);

  // const showCourseLecturers = (id, title) => {
  //   setSelectedCourse({
  //     id: id,
  //     title: title,
  //   });
  //   navigate(`/recommended_courses/${course.id}/${course.title}`)
  // };

  // const hideRecCourses = {
  //   display: selectedCourse.id ? "none" : "block"
  // }

  // const showRecCourses = (bool) => {
  //   if(bool) {
  //     setSelectedCourse({
  //       id: null
  //     })
  //   }
  // }

  return (
    <main>
      <section>
        <h1>Recommended Courses</h1>
        {recCourses.map((course) => (
          <article key={course.id}>
            <h3>{course.title}</h3>
            <div>{course.code}</div>
            <div>{course.level}</div>
            <div>{course.department.name}</div>
            <button
              className="btn btn-primary"
              onClick={() => navigate(`/recommended_courses/${course.id}/${course.title}`)}
            >
              Lecturers
            </button>
          </article>
        ))}
      </section>
      {/* <section>
        {selectedCourse.id && (
          <CourseLecturers
            key={selectedCourse.id}
            courseInfo={selectedCourse}
            showRecCourses={showRecCourses}
          />
        )}
      </section> */}
    </main>
  );
};
