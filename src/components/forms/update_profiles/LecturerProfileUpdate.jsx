import { useEffect, useState } from "react";
import { FaChevronRight, FaGraduationCap } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { getDepartments } from "../../../redux/department/departmentSlice";
import { getlecturerDetails, updateLecturer } from "../../../redux/lecturer/lecturerSlice";
import PropTypes from 'prop-types';
import { toast } from "react-toastify";

export const LecturerProfileUpdate = ({ showProfile }) => {
  const dispatch = useDispatch();
  const lecturer = useSelector((state) => state.Lecturers.details);
  const [values, setValues] = useState({
    first_name: lecturer.first_name,
    last_name: lecturer.last_name,
    email: lecturer.email,
    nationality: lecturer.nationality,
    gender: lecturer.gender,
    core_discipline: lecturer.core_discipline,
    number_of_publications: lecturer.number_of_publications,
    highest_academic_qualification: lecturer.highest_academic_qualification,
    photo: lecturer.photo,
    rank: lecturer.rank,
    bio: lecturer.bio,
    department_id: lecturer.department_id,
    age: lecturer.age,
    phone_number: lecturer.phone_number,
    linkedIn: lecturer.linkedIn,
    facebook: lecturer.facebook,
    twitter: lecturer.twitter,
    instagram: lecturer.instagram,
    wellfound: lecturer.wellfound,
    medium: lecturer.medium
  });

  const departments = useSelector((state) => state.Departments.departments);

  useEffect(() => {
    dispatch(getDepartments());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateLecturer({ body: values, id: lecturer.id })).then(() => {
      dispatch(getlecturerDetails(lecturer.id));
      toast.success('Profile update is successful');
    });
    showProfile(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <section className="d-flex justify-content-center p-5 profile-form-wrapper">
      <form className="profile-form" onSubmit={handleSubmit}>
        <header className="d-flex d-flex justify-content-center align-items-center">
          <h1 className="p-4 text-light">Update Lecturer Profile</h1>
        </header>
        <FaArrowLeftLong
          className="position-absolute top-0 start-0 mt-4 ms-5 pencil"
          onClick={() => showProfile(true)}
        />
        <div className="form-row d-flex justify-content-between">
          <div className="form-group col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              value={values.first_name}
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
              value={values.last_name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-2">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="core_discipline"
              name="core_discipline"
              value={values.core_discipline}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row d-flex justify-content-between">
          <div className="form-group col-md-2">
            <input
              type="number"
              className="form-control"
              placeholder="Publications"
              name="number_of_publications"
              value={values.number_of_publications}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="Gender"
              name="gender"
              value={values.gender}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Highest Qualification"
              name="highest_academic_qualification"
              value={values.highest_academic_qualification}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="Image URL"
              name="photo"
              value={values.photo}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row d-flex justify-content-between">
          <div className="form-group col-md-3">
            <select
              name="rank"
              className="form-control"
              value={values.rank}
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
              value={values.age}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-3">
            <input
              type="number"
              className="form-control"
              placeholder="Phone number"
              name="phone_number"
              value={values.phone_number}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-3">
            <select
              value={values.department_id}
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
          <div className="form-group col-md-2.3">
            <input
              type="text"
              className="form-control"
              placeholder="Facebook (optional)"
              name="facebook"
              value={values.facebook}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-2.3">
            <input
              type="text"
              className="form-control"
              placeholder="Instagram (optional)"
              name="instagram"
              value={values.instagram}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="Twitter (optional)"
              name="twitter"
              value={values.twitter}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="linkedIn (optional)"
              name="linkedIn"
              value={values.linkedIn}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row d-flex justify-content-between">
          <div className="form-group col-md-8">
            <textarea
              name="bio"
              className="form-control"
              id="bio"
              value={values.bio}
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
              value={values.nationality}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-5">
          <button className="btn btn-primary" type="submit">
            <FaGraduationCap className="me-2" />
            Update Profile
            <FaChevronRight className="ms-2" />
          </button>
        </div>
      </form>
    </section>
  );
};

LecturerProfileUpdate.propTypes = {
  showProfile: PropTypes.func
};
