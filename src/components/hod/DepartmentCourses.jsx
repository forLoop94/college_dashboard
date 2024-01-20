import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deleteCourse } from "../../redux/course/courseSlice";
import { getDepartmentCourses } from "../../redux/department/departmentSlice";

export const DepartmentCourses = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.Departments.departmentCourses);

  useEffect(() => {
    dispatch(getDepartmentCourses());
  }, [dispatch]);

  const removeCourse = (id, title) => {
    dispatch(deleteCourse(id)).then(() => {
      dispatch(getDepartmentCourses());
      toast.success(`Course ${title} deleted successfully`);
    })
  }

  if (courses.length === 0) {
    return <h1 className="technical-pages-bg-v2 text-white d-flex justify-content-center p-5 h-100">No Courses yet!</h1>
  } else {
    return (
      <section className="technical-pages-bg">
        <h1 className="tech-header">Courses</h1>
        <div className="d-flex flex-column align-items-center tech-card-container">
          <small className="small-note-light">
            Courses in {courses[0].department.name} department
          </small>
          {courses.map((course) => (
            <article
              className="tech-card-v3 d-flex mb-5 align-items-center"
              key={course.id}
            >
              <h5>{course.title}</h5>
              <div className="small-fonts">Code: {course.code}</div>
              <div className="small-fonts">Level: {course.level}</div>
              <div className="small-fonts">
                Credit Hours: {course.credit_load}
              </div>
              <div className="small-fonts">
                Department: {course.department.name}
              </div>
              <div className="d-flex justify-content-center mt-1 mb-1">
                <button
                  className="btn btn-danger"
                  onClick={() => removeCourse(course.id, course.title)}
                >
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }
};
