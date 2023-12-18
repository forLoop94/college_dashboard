import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getRecommendedCourses } from "../../redux/student/studentSlice";

export const Recommended_courses = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const recCourses = useSelector((state) => state.Students.recommended);

  useEffect(() => {
    dispatch(getRecommendedCourses());
  }, [dispatch]);

  return (
    <main className="technical-pages-bg">
      <h1 className="tech-header">Recommended Courses</h1>
      <section className="d-flex flex-column align-items-center tech-card-container">
        {recCourses.map((course) => (
          <article className="tech-card d-flex mb-5 justify-content-between align-items-center" key={course.id}>
            <h3 className="tech-title">{course.title}</h3>
            <div className="tech-card-content">
              <div>Course code: {course.code}</div>
              <div className="text-center mt-2">Level: {course.level}</div>
            </div>
            <div className="tech-card-content d-flex flex-column align-items-center">
              <div className="mt-2">Department: {course.department.name}</div>
              <button
              className="tech-btn mt-2"
              onClick={() =>
                navigate(`/recommended_courses/${course.id}/${course.title}`)
              }
            >
              Lecturers
            </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};
