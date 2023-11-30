import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSchools } from "../../redux/dean/deanSlice";

export const DeanForm = () => {
  const dispatch = useDispatch();
  const schools = useSelector(state => state.Deans.schools);

  useEffect(() => {
    dispatch(getSchools());
  }, []);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    gender: '',
    years_of_admin_exp: '',
    number_of_publications: '',
    highest_academic_qualification: '',
    photo: '',
    rank: '',
    bio: '',
    school_id: '',
    age: '',
    phone_number: '',
    lga_of_origin: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <section>
      <h1>Dean's Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={formData.first_name}
          name="first_name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Years of Administrative Experience"
          name="years_of_admin_exp"
          value={formData.years_of_admin_exp}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Number of Publications"
          name="number_of_publications"
          value={formData.number_of_publications}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Highest Academic Qualification"
          name="highest_academic_qualification"
          value={formData.highest_academic_qualification}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Image URL"
          name="photo"
          value={formData.photo}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Rank"
          name="rank"
          value={formData.rank}
          onChange={handleChange}
        />
        <textarea
          name="bio"
          id="bio"
          cols="30"
          rows="10"
          placeholder="Short Bio"
          onChange={handleChange}
        ></textarea>
        <select
          value={formData.school_id}
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
        <input
          type="number"
          placeholder="Age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Phone number"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="L.G.A"
          name="lga_of_origin"
          value={formData.lga_of_origin}
          onChange={handleChange}
        />
        <button type="submit">Create Dean</button>
      </form>
    </section>
  );
};
