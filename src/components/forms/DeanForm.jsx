import { useState } from "react";
import { useEffect } from "react";
import { FaChevronRight, FaGraduationCap } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addDean, getSchools } from "../../redux/dean/deanSlice";
import { getCurrentUser } from "../../redux/user/userSlice";
import "../../styles/forms.css";

export const DeanForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const schools = useSelector((state) => state.Deans.schools);

  useEffect(() => {
    dispatch(getSchools());
  }, [dispatch]);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    nationality: "",
    gender: "",
    years_of_admin_exp: "",
    number_of_publications: "",
    highest_academic_qualification: "",
    photo: "",
    rank: "",
    bio: "",
    school_id: "",
    age: "",
    phone_number: "",
    linkedIn: "",
    facebook: "",
    twitter: "",
    instagram: "",
    wellfound: "",
    medium: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addDean(formData)).then(() => {
      dispatch(getCurrentUser()).then(() => {
        navigate("/");
      })
    });
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
          <h1 className="p-4 text-light">Heads of Schools Profile Form</h1>
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
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-3">
            <input
              type="number"
              className="form-control"
              placeholder="Years of Admin Exp"
              name="years_of_admin_exp"
              value={formData.years_of_admin_exp}
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
              value={formData.number_of_publications}
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
              placeholder="Highest Qualification"
              name="highest_academic_qualification"
              value={formData.highest_academic_qualification}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-2">
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
              value={formData.school_id}
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
          <div className="form-group col-md-2.5">
            <input
              type="text"
              className="form-control"
              placeholder="Facebook (optional)"
              name="facebook"
              value={formData.facebook}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-2.5">
            <input
              type="text"
              className="form-control"
              placeholder="Instagram (optional)"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-2.5">
            <input
              type="text"
              className="form-control"
              placeholder="Twitter (optional)"
              name="twitter"
              value={formData.twitter}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-2.5">
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
        <div className="d-flex mt-5 justify-content-center align-items-center">
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
