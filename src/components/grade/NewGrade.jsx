import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addGrades, getTargetGrade } from '../../redux/grade/gradeSlice';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export const NewGrade = ({ studentId, courseId, onClose }) => {
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
      setWarning("Score cannot be empty");
      return;
    }
    dispatch(addGrades(formData)).then(() => {
      dispatch(getTargetGrade({ student_id: studentId, id: courseId }));
    })
    navigate("/assigned_courses");
    setFormData({
      value: ''
    })
    setWarning("");
    onClose();
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
      <small>{warning}</small>
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
        <Button variant='primary' type='submit'>Add</Button>
      </form>
    </section>
  )
}

NewGrade.propTypes = {
  studentId: PropTypes.number.isRequired,
  courseId: PropTypes.number.isRequired
}
