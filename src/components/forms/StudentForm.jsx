import { useEffect, useState } from "react";
import { FaChevronRight, FaGraduationCap } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getDepartments } from "../../redux/department/departmentSlice";
import { addStudents } from "../../redux/student/studentSlice";
import { getCurrentUser } from "../../redux/user/userSlice";
import "../../styles/forms.css";

export const StudentForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const departments = useSelector((state) => state.Departments.departments);

  useEffect(() => {
    dispatch(getDepartments());
  }, [dispatch]);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    photo: "",
    nationality: "",
    phone_number: "",
    level: "",
    gender: "",
    department_id: "",
    age: "",
    bio: "",
    linkedIn: "",
    facebook: "",
    twitter: "",
    instagram: "",
    wellfound: "",
    medium: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStudents(formData)).then(() => {
      dispatch(getCurrentUser()).then(() => {
        navigate("/");
      })
    });

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
      <form action="#" className="profile-form" onSubmit={handleSubmit}>
        <header className="d-flex d-flex justify-content-center align-items-center">
          <h1 className="p-4 text-light">Students Profile Form</h1>
        </header>
        <div className="form-row d-flex justify-content-between">
          <div className="form-group col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              name="first_name"
              value={formData.first_name}
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
          <div className="form-group col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Image URL"
              name="photo"
              value={formData.photo}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-2">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row d-flex justify-content-between">
          <div className="form-group col-md-2">
            <select
              name="level"
              value={formData.level}
              className="form-control"
              onChange={handleChange}
            >
              <option value="">level</option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="400">400</option>
              <option value="500">500</option>
            </select>
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
        </div>
        <div className="form-row d-flex justify-content-between">
          <div className="form-group col-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="Phone"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="Facebook (optional)"
              name="facebook"
              value={formData.facebook}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="Instagram (optional)"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="Twitter (optional)"
              name="twitter"
              value={formData.twitter}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="linkedIn (optional)"
              name="linkedIn"
              value={formData.linkedIn}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row d-flex justify-content-between">
          <div className="form-group col-md-9">
            <textarea
              name="bio"
              className="form-control mb-5"
              id="bio"
              value={formData.bio}
              placeholder="Short Bio"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group col-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="Country"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn btn-primary" type="submit">
            <FaGraduationCap className="me-2" />
            Create Profile
            <FaChevronRight className="ms-2" />
          </button>
        </div>
      </form>
    </section>
  );
};
