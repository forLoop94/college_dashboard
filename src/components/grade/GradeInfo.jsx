import PropTypes from 'prop-types';

const GradeInfo = ({ targetGrade }) => {
  return (
    <div>
      <p>{targetGrade.value}</p>
      <p>{targetGrade.student.first_name}</p>
      <p>{targetGrade.course.title}</p>
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
