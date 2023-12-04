import { useEffect, useState } from "react";
import { FaChevronRight, FaGraduationCap } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getDepartments } from "../../redux/department/departmentSlice";
import { addLecturer } from "../../redux/lecturer/lecturerSlice";
import "../../styles/forms.css";

export const LecturerForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const departments = useSelector((state) => state.Departments.departments);

  useEffect(() => {
    dispatch(getDepartments());
  }, [dispatch]);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    core_discipline: "",
    number_of_publications: "",
    highest_academic_qualification: "",
    photo: "",
    rank: "",
    bio: "",
    department_id: "",
    age: "",
    phone_number: "",
    lga_of_origin: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(addLecturer(formData));
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className="d-flex justify-content-center vw-100 p-5 profile-form-wrapper">
      <form className="profile-form" onSubmit={handleSubmit}>
        <header className="d-flex d-flex justify-content-center align-items-center">
          <h1 className="p-4 text-light">Lecturers Profile Form</h1>
        </header>
        <div className="form-row d-flex justify-content-between">
          <div className="form-group col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              value={formData.first_name}
              name="first_name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="core_discipline"
              name="core_discipline"
              value={formData.core_discipline}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row d-flex justify-content-between">
          <div className="form-group col-md-3">
            <input
              type="number"
              className="form-control"
              placeholder="Number of Publications"
              name="number_of_publications"
              value={formData.number_of_publications}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Highest Academic Qualification"
              name="highest_academic_qualification"
              value={formData.highest_academic_qualification}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Image URL"
              name="photo"
              value={formData.photo}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row d-flex justify-content-between">
          <div className="form-group col-md-3">
            <select
              name="rank"
              className="form-control"
              value={formData.rank}
              onChange={handleChange}
            >
              <option value="">Rank</option>
              <option value="Intern">Intern</option>
              <option value="junior">Junior Lecturer</option>
              <option value="senior">Senior Lecturer</option>
              <option value="principal">Principal Lecturer</option>
              <option value="professor">Professor</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <input
              type="number"
              className="form-control"
              placeholder="Age"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-3">
            <input
              type="number"
              className="form-control"
              placeholder="Phone number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-3">
            <select
              value={formData.department_id}
              className="form-control"
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
          </div>
        </div>
        <div className="form-row d-flex justify-content-between">
          <div className="form-group col-md-8">
            <textarea
              name="bio"
              className="form-control"
              id="bio"
              value={formData.bio}
              placeholder="Short Bio"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="L.G.A"
              name="lga_of_origin"
              value={formData.lga_of_origin}
              onChange={handleChange}
            />
          </div>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <button className="btn btn-primary" type="submit">
            <FaGraduationCap className="me-2" />
            Create Profile
            <FaChevronRight className="ms-2" />
          </button>
        </div>
        <Link to="/">Home</Link>
      </form>
    </section>
  );
};
