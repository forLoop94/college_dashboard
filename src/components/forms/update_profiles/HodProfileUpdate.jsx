import { useEffect, useState } from 'react'
import { FaChevronRight, FaGraduationCap } from 'react-icons/fa';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { getDepartments } from '../../../redux/department/departmentSlice';
import { getHodDetails, updateHod } from '../../../redux/hod/hodSlice';
import PropTypes from 'prop-types';

export const HodProfileUpdate = ({ showProfile }) => {
  const dispatch = useDispatch();
  const hod = useSelector((state) => state.Hods.details);
  const [values, setValues] = useState({
    first_name: hod.first_name,
    last_name: hod.last_name,
    email: hod.email,
    nationality: hod.nationality,
    gender: hod.gender,
    years_of_admin_exp: hod.years_of_admin_exp,
    number_of_publications: hod.number_of_publications,
    highest_academic_qualification: hod.highest_academic_qualification,
    photo: hod.photo,
    rank: hod.rank,
    bio: hod.bio,
    department_id: hod.department_id,
    age: hod.age,
    phone_number: hod.phone_number,
    linkedIn: hod.linkedIn,
    facebook: hod.facebook,
    twitter: hod.twitter,
    instagram: hod.instagram,
    wellfound: hod.wellfound,
    medium: hod.medium
  });

  const departments = useSelector((state) => state.Departments.departments);

  useEffect(() => {
    dispatch(getDepartments());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateHod({ body: values, id: hod.id })).then(() => {
      dispatch(getHodDetails(hod.id));
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
          <h1 className="p-4 text-light">Update HOD Profile</h1>
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
              type="number"
              className="form-control"
              placeholder="Years of Administrative Experience"
              name="years_of_admin_exp"
              value={values.years_of_admin_exp}
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
          <div className="form-group col-md-4">
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
        <div className="d-flex mt-5 justify-content-center align-items-center">
          <button className="btn btn-primary" type="submit">
            <FaGraduationCap className="me-2" />
            Update Profile
            <FaChevronRight className="ms-2" />
          </button>
        </div>
      </form>
    </section>
  );
}

HodProfileUpdate.propTypes = {
  showProfile: PropTypes.func
};
