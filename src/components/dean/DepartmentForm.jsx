import { useState } from "react";
import { useEffect } from "react";
import { FaChevronRight, FaReadme } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getSchools } from "../../redux/dean/deanSlice";
import { addDepartments } from "../../redux/department/departmentSlice";

export const DepartmentForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const schools = useSelector((state) => state.Deans.schools);

  useEffect(() => {
    dispatch(getSchools());
  }, [dispatch]);

  const [data, setData] = useState({
    name: "",
    school_id: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!data.name || !data.school_id) {
      toast.warn("Supply all fields!");
      return;
    }
    dispatch(addDepartments(data));
    navigate("/departments");
    toast.success(`${data.name} department added succesfully!`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <section className="technical-pages-bg d-flex flex-column align-items-center w-100">
      <h1 className="tech-header">Department Form</h1>
      <form
        className="allotment-form d-flex justify-content-between w-75"
        onSubmit={handleSubmit}
      >
        <div className="d-flex alotment-input justify-content-between">
          <input
            type="text"
            placeholder="Department Name"
            className="form-control me-2"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
          <select
            value={data.school_id}
            className="form-control"
            name="school_id"
            onChange={handleChange}
          >
            <option value="">Schools</option>
            {schools.map((school) => (
              <option key={school.id} value={school.id}>
                {school.name}
              </option>
            ))}
          </select>
        </div>
        <div className="d-flex justify-content-center">
          <button className="course-form-button" type="submit">
            <FaReadme className="me-1" />
            Create
            <FaChevronRight className="ms-1" />
          </button>
        </div>
      </form>
    </section>
  );
};
