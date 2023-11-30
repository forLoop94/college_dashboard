import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getDepartments } from '../../redux/department/departmentSlice';
import { addHod } from '../../redux/hod/hodSlice';

export const HodForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const departments = useSelector((state) => state.Departments.departments);

  useEffect(() => {
    dispatch(getDepartments());
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
    department_id: '',
    age: '',
    phone_number: '',
    lga_of_origin: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(addHod(formData));
    navigate("/");
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <>
      <h1>HOD's Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='First Name'
          value={formData.first_name}
          name='first_name'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Last Name'
          name='last_name'
          value={formData.last_name}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Gender'
          name='gender'
          value={formData.gender}
          onChange={handleChange}
        />
        <input
          type='number'
          placeholder='Years of Administrative Experience'
          name='years_of_admin_exp'
          value={formData.years_of_admin_exp}
          onChange={handleChange}
        />
        <input
          type='number'
          placeholder='Number of Publications'
          name='number_of_publications'
          value={formData.number_of_publications}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Highest Academic Qualification'
          name='highest_academic_qualification'
          value={formData.highest_academic_qualification}
          onChange={handleChange}
        />
         <input
          type='text'
          placeholder='Image URL'
          name='photo'
          value={formData.photo}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Rank'
          name='rank'
          value={formData.rank}
          onChange={handleChange}
        />
        <textarea
          name="bio"
          id="bio"
          cols="30"
          rows="10"
          placeholder='Short Bio'
          onChange={handleChange}>
        </textarea>
        <select
          value={formData.department_id}
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
          type='number'
          placeholder='Age'
          name='age'
          value={formData.age}
          onChange={handleChange}
        />
        <input
          type='number'
          placeholder='Phone number'
          name='phone_number'
          value={formData.phone_number}
          onChange={handleChange}
        />
         <input
          type='text'
          placeholder='L.G.A'
          name='lga_of_origin'
          value={formData.lga_of_origin}
          onChange={handleChange}
        />
        <button type='submit'>Create HOD</button>
        <Link to='/'>Home</Link>
      </form>
    </>
  )
}
