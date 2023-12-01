import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSchools } from "../../redux/dean/deanSlice";
import { addDepartments } from "../../redux/department/departmentSlice";

export const DepartmentForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const schools = useSelector((state) => state.Deans.schools);

  useEffect(() => {
    dispatch(getSchools());
  }, []);

  const [data, setData] = useState({
    name: "",
    school_id: "",
  });

  const handleSubmit = (e) => {
    dispatch(addDepartments(data))
    navigate("/departments");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <section>
      <h1>Department Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Department Name"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
        <select
          value={data.school_id}
          name="school_id"
          onChange={handleChange}
        >
          <option value=''>Schools</option>
          {schools.map((school) => (
            <option key={school.id} value={school.id}>
              {school.name}
            </option>
          ))}
        </select>
        <button type="submit">Create</button>
      </form>
    </section>
  );
};
