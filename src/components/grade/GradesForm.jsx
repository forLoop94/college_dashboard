import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addGrades, getTargetGrade } from '../../redux/grade/gradeSlice'

export const GradesForm = ({ studentId, courseId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { targetGrade } = useSelector((state) => state.Grades);
  console.log(targetGrade)

  useEffect(() => {
    console.log(`student id:${studentId} course_id: ${courseId}`)
    dispatch(getTargetGrade({ student_id: studentId, id: courseId }));
  }, [])

  const [formData, setFormData] = useState({
    value: '',
    student_id: studentId,
    course_id: courseId
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    dispatch(addGrades(formData));
    navigate("/")
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  if(!targetGrade) {
    return null;
  }

  return (
    <section>
      <h1>Grade Form</h1>
      <div>
        <span>Current Grade: {targetGrade.value}</span>
        <span>Name: {targetGrade.student.first_name}</span>
        <span>Course: {targetGrade.course.title}</span>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type='number'
          placeholder='Enter score'
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
