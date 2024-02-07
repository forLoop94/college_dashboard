import { useState } from "react";
import { useEffect } from "react";
import { FaChevronRight, FaReadme } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCourses } from "../../redux/course/courseSlice";
import {
  getDepartmentCourses,
  getDepartments,
} from "../../redux/department/departmentSlice";
import "../../styles/course_form.css";

export const CourseForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [success, setSuccess] = useState("");
  const departments = useSelector((state) => state.Departments.departments);

  useEffect(() => {
    dispatch(getDepartments());
  }, [dispatch]);

  const [data, setData] = useState({
    title: "",
    code: "",
    level: "",
    department_id: "",
    credit_load: "",
  });

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(addCourses(data)).then(() => {
      dispatch(getDepartmentCourses()).then(() => {
        navigate("/department_courses");
        setSuccess(
          `The course ${data.title.toUpperCase()} has been added successfully!`
        );
      });
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
    <section className="course-form-wrapper d-flex justify-content-center align-items-center h-100">
      <article>
        <h1>New Course Form</h1>
        <div className="mobile-header"></div>
        <small>{success}</small>
        <form className="d-flex flex-column" onSubmit={handlesubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Course title"
            name="title"
            value={data.title}
            onChange={handleChange}
          />
          <input
            type="number"
            className="form-control"
            placeholder="Course code"
            name="code"
            value={data.code}
            onChange={handleChange}
          />
          <select
            className="form-control"
            placeholder="level"
            name="level"
            value={data.level}
            onChange={handleChange}
          >
            <option className="select-placeholder">Level</option>
            <option className="select-placeholder">100</option>
            <option className="select-placeholder">200</option>
            <option className="select-placeholder">300</option>
            <option className="select-placeholder">400</option>
            <option className="select-placeholder">500</option>
          </select>
          <select
            className="form-control"
            value={data.department_id}
            name="department_id"
            onChange={handleChange}
          >
            <option className="select-placeholder">Department</option>
            {departments.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </select>
          <input
            type="number"
            className="form-control"
            placeholder="Credit hours"
            name="credit_load"
            value={data.credit_load}
            onChange={handleChange}
          />
          <div className="d-flex justify-content-center">
            <button className="course-form-button" type="submit">
              <FaReadme className="me-1" />
              Submit
              <FaChevronRight className="ms-1" />
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};
