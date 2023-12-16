import { useEffect, useState } from "react";
import { FaArrowLeft, FaChevronRight, FaGraduationCap } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getDeanDetails, getSchools, updateDean } from "../../../redux/dean/deanSlice";

export const DeanProfileUpdate = ({ showProfile }) => {
  const dispatch = useDispatch();
  const dean = useSelector((state) => state.Deans.details);
  const [values, setValues] = useState({
    first_name: dean.first_name,
    last_name: dean.last_name,
    gender: dean.gender,
    years_of_admin_exp: dean.years_of_admin_exp,
    number_of_publications: dean.number_of_publications,
    highest_academic_qualification: dean.highest_academic_qualification,
    photo: dean.photo,
    rank: dean.rank,
    bio: dean.bio,
    school_id: dean.school_id,
    age: dean.age,
    phone_number: dean.phone_number,
    lga_of_origin: dean.lga_of_origin,
  });

  const schools = useSelector((state) => state.Deans.schools);

  useEffect(() => {
    dispatch(getSchools());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateDean({ body: values, id: dean.id })).then(() => {
      dispatch(getDeanDetails(dean.id));
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
          <h1 className="p-4 text-light">Update Dean Profile</h1>
        </header>
        <FaArrowLeft
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
          <div className="form-group col-md-3">
            <input
              type="number"
              className="form-control"
              placeholder="Number of Publications"
              name="number_of_publications"
              value={values.number_of_publications}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Highest Academic Qualification"
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
              value={values.school_id}
              className="form-control"
              name="school_id"
              onChange={handleChange}
            >
              <option>School</option>
              {schools.map((school) => (
                <option key={school.id} value={school.id}>
                  {school.name}
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
              value={values.bio}
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
              value={values.lga_of_origin}
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
