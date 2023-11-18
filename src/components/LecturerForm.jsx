import React from 'react'

export const LecturerForm = () => {
  return (
    <>
      <h1>Lecturers Form</h1>
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
          type='text'
          placeholder='Major'
          name='core_discipline'
          value={formData.core_discipline}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Number of Publications'
          name='nop'
          value={formData.nop}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Highest Academic Qualification'
          name='haq'
          value={formData.haq}
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
          placeholder='Short Bio'>
        </textarea>
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
         <input
          type='number'
          placeholder='user_id'
          name='user_id'
          value={formData.user_id}
          onChange={handleChange}
        />
        <button type='submit'>Create Student</button>
      </form>
    </>
  )
}
