import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDepartments } from "../../redux/department/departmentSlice";

export const CourseForm = () => {
  const dispatch = useDispatch();
  const departments = useSelector((state) => state.Departments.departments);

  useEffect(() => {
    dispatch(getDepartments());
  }, []);

  const [data, setData] = useState({
    title: "",
    code: "",
    level: "",
    department_id: "",
    credit_load: "",
  });

  const handlesubmit = () => {

  }

  const handleChange = () => {

  }

  return (
    <section>
      <h1>New Course Form</h1>
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
      </form>
    </section>
  );
};
