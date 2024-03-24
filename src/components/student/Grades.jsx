import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudentGrades } from "../../redux/grade/gradeSlice";
import { getRecommendedCourses } from "../../redux/student/studentSlice";
import { gradeAlphabet, symbolColor } from "../../utils/gradeAlphabet";
import { gradePoint } from "../../utils/gradePoint";

export const Grades = () => {
  const dispatch = useDispatch();
  const gradesInfo = useSelector((state) => state.Grades.studentGrades);
  const recCourses = useSelector((state) => state.Students.recommended);
  const { profile_id } = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    dispatch(getStudentGrades({ id:profile_id }));
    dispatch(getRecommendedCourses());
  }, [dispatch]);

  const gradePointCalculator = () => {
    const totalQualityPoints = gradesInfo.reduce(
      (total, num) =>
        total + gradePoint(gradeAlphabet(num.value)) * num.course.credit_load,
      0
    );
    const totalCredit = gradesInfo.reduce(
      (total, num) => total + num.course.credit_load,
      0
    );
    const gpa = totalQualityPoints / totalCredit;
    return gpa.toFixed(2);
  };

  if (!gradesInfo) {
    return <div className="technical-pages-bg-v2 text-white d-flex justify-content-center align-items-center h-100">Loading...</div>
  }


  return (
    <section className="technical-pages-bg-v2">
      <h1 className="tech-header-v2">Grade Information</h1>
      <article className="d-flex flex-column align-items-center tech-card-container-v2">
        <small className="small-note-light mb-2">
          {`Grades available for ${gradesInfo.length} of ${recCourses.length} recommended courses`}
        </small>
        {gradesInfo.map((course) => (
          <div
            className="tech-card-v2 d-flex mb-5 justify-content-between align-items-center"
            key={course.id}
          >
            <div className="tech-grade-info">
              <p className="text-center">
                Title <p className="text-center">{course.course.title}</p>
              </p>
              <p className="text-center">
                Code <p className="text-center">{course.course.code}</p>
              </p>
            </div>
            <div className="tech-grade-info">
              <p className="text-center">
                Credit Hours <p className="text-center">{course.course.credit_load}</p>
              </p>
              <p className="text-center">
                Score <p className="text-center">{course.value}</p>
              </p>
            </div>
            <div className="tech-grade-info">
              <p className="text-center">
                Symbol
                <p
                  style={{
                    color: symbolColor(gradeAlphabet(course.value)),
                  }}
                  className="text-center"
                >
                  {gradeAlphabet(course.value)}
                </p>
              </p>
              <p className="text-center">
                Points
                <p className="text-center">
                  {gradePoint(gradeAlphabet(course.value))}
                </p>
              </p>
            </div>
          </div>
        ))}
      </article>
      <div className="position-absolute gpa">
        GPA: {gradePointCalculator()}
      </div>
    </section>
  );
};