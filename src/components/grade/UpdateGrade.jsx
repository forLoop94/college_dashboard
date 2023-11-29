import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getTargetGrade, updateGrade } from '../../redux/grade/gradeSlice';

export const UpdateGrade = ({ studentId, courseId, targetGrade }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [warning, setWarning] = useState('');

  const [formData, setFormData] = useState({
    value: '',
    student_id: studentId,
    course_id: courseId
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formData.value) {
      setWarning("Enter score to update");
      return;
    }
    dispatch(updateGrade({ body: formData, id: targetGrade.id  })).then(() => {
      dispatch(getTargetGrade({ student_id: studentId, id: courseId }));
    })
    navigate("/assigned_courses");
    setFormData({
      value: ''
    });
    setWarning("");
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
      <h1>Update Grade</h1>
      <small>{warning}</small>
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
        <button type='submit'>Update</button>
      </form>
    </section>
  )
}
