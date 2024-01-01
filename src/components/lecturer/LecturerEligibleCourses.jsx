import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLecturerEligibleCourses } from "../../redux/lecturer/lecturerSlice";
import { getCurrentUser } from "../../redux/user/userSlice";

export const LecturerEligibleCourses = () => {
  const dispatch = useDispatch();
  const { profile_id } = useSelector((state) => state.user.currentUser);
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getCurrentUser());

    if (profile_id) {
      dispatch(getLecturerEligibleCourses(profile_id));
    }
  }, [dispatch, profile_id, token]);

  const courses = useSelector((state) => state.Lecturers.eligibleCourses);

  return (
    <main className="technical-pages-bg-v2">
      <h1 className="tech-header-v2">Proficiences</h1>
      <section className="d-flex flex-column align-items-center tech-card-container-v2">
        <small className="small-note-light m-4">
          Below are courses you qualify to handle. This list will inform your assigned courses
        </small>
        {courses.map((course) => (
          <article className="tech-card-v2 d-flex mb-5 justify-content-between align-items-center h-25" key={course.id}>
            <h4>{course.title}</h4>
            <div>Course Code: {course.code}</div>
            <div>Level: {course.level}</div>
            <div>Department: {course.department.name}</div>
          </article>
        ))}
      </section>
    </main>
  );
};
