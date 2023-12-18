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

  return (
    <section className="technical-pages-bg-v2">
      <h1 className="tech-header-v2">Grade Information</h1>
      <article className="d-flex flex-column align-items-center tech-card-container">
        {gradesInfo.map((course) => (
          <div
            className="tech-card-v2 d-flex mb-5 justify-content-between align-items-center"
            key={course.id}
          >
            <div>
              Title <p className="text-center">{course.title}</p>
            </div>
            <div>
              Code <p className="text-center">{course.code}</p>
            </div>
            <div>
              Credit Hours <p className="text-center">{course.credit_load}</p>
            </div>
            <div>
              Score <p className="text-center">{course.grade}</p>
            </div>
            <div>
              Symbol{" "}
              <p style={{
              color: symbolColor(gradeAlphabet(course.grade)),
            }} className="text-center">
                {gradeAlphabet(course.grade)}
              </p>
            </div>
            <div>
              Points{" "}
              <p className="text-center">
                {gradePoint(gradeAlphabet(course.grade))}
              </p>
            </div>
          </div>
        ))}
      </article>
      <small>
        Note:{" "}
        {`Grades are available for ${gradesInfo.length} of ${recCourses.length} recommended courses`}
      </small>
      <h2>GPA: {gradePointCalculator()}</h2>
    </section>
  );
};
