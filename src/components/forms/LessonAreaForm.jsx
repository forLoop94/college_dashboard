import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../styles/lesson_area_form.css";
import PropTypes from 'prop-types';

export const LessonAreaForm = ({
  studentCourseInfo,
  lecturerId,
  studentId,
  setShowForm,
  setArea,
}) => {
  const navigate = useNavigate();
  const { role } = useSelector(state => state.user.currentUser);
  const data = {
    student_id: role === "student" ? studentId : studentCourseInfo.id,
    course_id: studentCourseInfo.course_id,
    lecturer_id: role === "student" ? studentCourseInfo.id : lecturerId,
  };

  const createlessonArea = async (body) => {
    const token = localStorage.getItem("token");
    const response = await fetch("https://online-school-93yp.onrender.com/api/v1/lesson_area", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify(body),
    });
    if (response.ok) {
      const result = await response.json();
      console.log(result);
      setArea(result);
      if (role === "student") {
        navigate(
          `/recommended_courses/${studentCourseInfo.course_id}/${studentCourseInfo.course_title}`
        );
      } else {
        navigate(
          `/assigned_courses/${studentCourseInfo.course_id}/${studentCourseInfo.course_title}`
        );
      }
      setShowForm(false);
      return result;
    }
  };

  return (
    <div className="modal-wrapper p-2">
      <div>
        <small className="text-white text-sm">
          Create a private chat room for you and your lecturer
          <br/> You&apos;ll never be asked to do this again
        </small>
      </div>
      <button
        className="btn btn-primary mt-4"
        onClick={() => createlessonArea(data)}
      >
        Create
      </button>
    </div>
  );
};

LessonAreaForm.propTypes = {
  studentCourseInfo: PropTypes.shape({
    id: PropTypes.number,
    course_id: PropTypes.number,
    course_title: PropTypes.number,
  }),
  lecturerId: PropTypes.number,
  studentId: PropTypes.number,
  setShowForm: PropTypes.func,
  setArea: PropTypes.func
};
