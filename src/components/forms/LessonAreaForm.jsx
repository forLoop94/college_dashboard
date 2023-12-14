import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../styles/lesson_area_form.css";

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
    const response = await fetch("http://localhost:4000/api/v1/lesson_area", {
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
          <br/> You'll never be asked to do this again
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
