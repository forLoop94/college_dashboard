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
    </main>
  );
};