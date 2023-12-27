import { useState } from "react";
import { useEffect } from "react";
import { FaChevronRight, FaReadme } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addAllotmentData,
  getAllotmentData,
} from "../../redux/allotment_data/allotmentSlice";
import {
  getDepartmentCourses,
  getDepartmentLecturers,
} from "../../redux/department/departmentSlice";

export const AllotmentData = () => {
  const dispatch = useDispatch();
  const allotmentInfo = useSelector((state) => state.Allotments.allotmentData);
  const { profile_id } = useSelector((state) => state.user.currentUser);
  const courses = useSelector((state) => state.Departments.departmentCourses);
  const lecturers = useSelector(
    (state) => state.Departments.departmentLecturers
  );
  const [data, setData] = useState({
    lecturer_id: "",
    course_id: "",
  });

  useEffect(() => {
    dispatch(getAllotmentData(profile_id));
    dispatch(getDepartmentCourses());
    dispatch(getDepartmentLecturers());
  }, [dispatch, profile_id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAllotmentData(data)).then(() => {
      dispatch(getAllotmentData(profile_id));
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <section className=" technical-pages-bg d-flex flex-column align-items-center w-100">
      <h2 className="tech-header">Allotment Form</h2>
      <form
        className="allotment-form d-flex justify-content-between w-75"
        onSubmit={handleSubmit}
      >
        <div className="d-flex alotment-input justify-content-between">
          <select
            value={data.lecturer_id}
            className="form-control me-2"
            name="lecturer_id"
            onChange={handleChange}
          >
            <option value="">Lecturers</option>
            {lecturers.map((lecturer) => (
              <option key={lecturer.id} value={lecturer.id}>
                {lecturer.first_name} {lecturer.last_name}
              </option>
            ))}
          </select>
          <select
            className="form-control"
            value={data.course_id}
            name="course_id"
            onChange={handleChange}
          >
            <option value="">Courses</option>
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.title}
              </option>
            ))}
          </select>
        </div>
        <div className="d-flex justify-content-center">
          <button className="course-form-button" type="submit">
            <FaReadme className="me-1" />
            Submit
            <FaChevronRight className="ms-1" />
          </button>
        </div>
      </form>
      <div className="w-100 p-5 tech-card-container">
        {allotmentInfo.length === 0 ? (
          <p>No allotments</p>
        ) : (
          <div className="">
            <h2>Course Allotment Table</h2>
            <div className="">
              {allotmentInfo.map((row) => (
                <div
                  className="tech-card-v3 alotment-card d-flex mb-2 w-100"
                  key={row.id}
                >
                  <div>{row.course.title}</div>
                  <div className="">
                    Lecturer: {row.lecturer.first_name} {row.lecturer.last_name}
                  </div>
                  <div className="d-flex justify-content-center mt-1 mb-1">
                    <button className="btn btn-danger">Cancel</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
