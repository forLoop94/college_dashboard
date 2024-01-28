import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourseGrades } from "../../redux/grade/gradeSlice";
import { getRecommendedCourses } from "../../redux/student/studentSlice";
import { gradeAlphabet, symbolColor } from "../../utils/gradeAlphabet";
import { gradePoint } from "../../utils/gradePoint";

export const Grades = () => {
  const dispatch = useDispatch();
  const gradesInfo = useSelector((state) => state.Grades.courseGrades);
  const recCourses = useSelector((state) => state.Students.recommended);

  useEffect(() => {
    dispatch(getCourseGrades());
    dispatch(getRecommendedCourses());
  }, [dispatch]);

  const gradePointCalculator = () => {
    const totalQualityPoints = gradesInfo.reduce(
      (total, num) =>
        total + gradePoint(gradeAlphabet(num.grade)) * num.credit_load,
      0
    );
    const totalCredit = gradesInfo.reduce(
      (total, num) => total + num.credit_load,
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
                Title <p className="text-center">{course.title}</p>
              </p>
              <p className="text-center">
                Code <p className="text-center">{course.code}</p>
              </p>
            </div>
            <div className="tech-grade-info">
              <p className="text-center">
                Credit Hours <p className="text-center">{course.credit_load}</p>
              </p>
              <p className="text-center">
                Score <p className="text-center">{course.grade}</p>
              </p>
            </div>
            <div className="tech-grade-info">
              <p className="text-center">
                Symbol
                <p
                  style={{
                    color: symbolColor(gradeAlphabet(course.grade)),
                  }}
                  className="text-center"
                >
                  {gradeAlphabet(course.grade)}
                </p>
              </p>
              <p className="text-center">
                Points
                <p className="text-center">
                  {gradePoint(gradeAlphabet(course.grade))}
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
