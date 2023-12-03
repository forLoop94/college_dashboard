import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCourses } from "../../redux/course/courseSlice";
import { getDepartments } from "../../redux/department/departmentSlice";

export const CourseForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [success, setSuccess] = useState('');
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
    dispatch(addCourses(data));
    navigate("/department_courses");
    setSuccess(`The course ${data.title.toUpperCase()} has been added successfully!`)
  }

  const handleChange = (e) => {
    const { name, value } = e .target;
    setData({
      ...data,
      [name]: value
    })
  }

  return (
    <section>
      <h1>New Course Form</h1>
      <small>{success}</small>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Course title"
          name="title"
          value={data.title}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Course code"
          name="code"
          value={data.code}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="level"
          name="level"
          value={data.level}
          onChange={handleChange}
        />
        <select
          value={data.department_id}
          name="department_id"
          onChange={handleChange}
        >
          <option>Department</option>
          {departments.map((dept) => (
            <option key={dept.id} value={dept.id}>
              {dept.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Credit hours"
          name="credit_load"
          value={data.credit_load}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
