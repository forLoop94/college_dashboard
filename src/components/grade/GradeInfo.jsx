import PropTypes from 'prop-types';

export const GradeInfo = ({ targetGrade }) => {
  return (
    <div className='d-flex flex-column justify-content-between'>
      <span>Grade: {targetGrade.value}</span>
      <span>Student: {targetGrade.student.first_name}</span>
      <span>Course: {targetGrade.course.title}</span>
    </div>
  );
};

GradeInfo.propTypes = {
  targetGrade: PropTypes.shape({
    value: PropTypes.number,
    student: PropTypes.shape({
      first_name: PropTypes.string,
    }),
    course: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

export default GradeInfo;
