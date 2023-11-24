export const GradeInfo = ({ targetGrade }) => {
  return (
    <div>
      <span>Current Grade: {targetGrade.value}</span>
      <span>Name: {targetGrade.student.first_name}</span>
      <span>Course: {targetGrade.course.title}</span>
    </div>
  );
};
