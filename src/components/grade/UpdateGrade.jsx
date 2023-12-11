import { useState } from 'react'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getTargetGrade, updateGrade } from '../../redux/grade/gradeSlice';
import { Button } from 'react-bootstrap';

export const UpdateGrade = ({ studentId, targetGrade, onClose }) => {
  const { courseId, courseTitle } = useParams();
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
    navigate(`/assigned_courses/${courseId}/${courseTitle}`);
    setFormData({
      value: ''
    });
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
        <Button variant='primary' type='submit'>Update</Button>
      </form>
    </section>
  )
}

UpdateGrade.propTypes = {
  studentId: PropTypes.number.isRequired,
  courseId: PropTypes.number.isRequired,
  targetGrade: PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.number,
  }),
};