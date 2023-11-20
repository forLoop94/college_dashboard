import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { addStudents } from '../redux/student/studentSlice';

export const StudentForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    photo: '',
    phone_number: '',
    level: '',
    gender: '',
    department_id: '',
    age: '',
    bio: '',
    lga_of_origin: '',
    user_id: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStudents(formData));
    navigate("/");
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <>
      <h1>Students Profile</h1>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='First Name'
          name='first_name'
          value={formData.first_name}
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
          placeholder='Image URL'
          name='photo'
          value={formData.photo}
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
          type='number'
          placeholder='Level'
          name='level'
          value={formData.level}
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
          placeholder='Department'
          name='department_id'
          value={formData.department_id}
          onChange={handleChange}
        />
         <input
          type='number'
          placeholder='Age'
          name='age'
          value={formData.age}
          onChange={handleChange}
        />
         <input
          type='text'
          placeholder='Short bio'
          name='bio'
          value={formData.bio}
          onChange={handleChange}
        />
         <input
          type='text'
          placeholder='L.G.A'
          name='lga_of_origin'
          value={formData.lga_of_origin}
          onChange={handleChange}
        />
         <input
          type='number'
          placeholder='user_id'
          name='user_id'
          value={formData.user_id}
          onChange={handleChange}
        />
        <button type='submit'>Create Student</button>
        <Link to="/students">Home</Link>
      </form>
    </>
  )
}
