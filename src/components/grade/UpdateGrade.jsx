import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const UpdateGrade = ({ studentId, courseId, targetGrade }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    value: '',
    student_id: studentId,
    course_id: courseId
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(targetGrade.value)
    // dispatch(addGrades(formData));
    // navigate("/")
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <section>
      <h1>Grade Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='number'
          placeholder={targetGrade.value}
          name='value'
          value={formData.value}
          onChange={handleChange}
        />
        <input
          type='hidden'
          name='student_id'
          value={formData.student_id}
          onChange={handleChange}
        />
        <input
          type='hidden'
          name='course_id'
          value={formData.course_id}
          onChange={handleChange}
        />
        <button type='submit'>Create</button>
      </form>
    </section>
  )
}
