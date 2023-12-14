import { useNavigate } from "react-router-dom";
import "../../styles/lesson_area_form.css";

export const LessonAreaForm = ({ studentId, courseInfo, lecturerId, setShowForm, setArea }) => {
  const navigate = useNavigate();
  const data = {
    student_id: studentId,
    course_id: courseInfo.id,
    lecturer_id: lecturerId
  }

  const createlessonArea = async(body) => {
    const token = localStorage.getItem('token');
    const response = await fetch("http://localhost:4000/api/v1/lesson_area", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: token
      },
      body: JSON.stringify(body)
    })
    if (response.ok) {
      const result = await response.json();
      console.log(result);
      setArea(result);
      navigate("/assigned_courses");
      setShowForm(false)
      return result;
    }
  }

  return (
    <div className='modal-wrapper p-2'>
      <h5 className="text-white">Confirm you are not a robot</h5>
      <button className='btn btn-primary mt-4' onClick={() => createlessonArea(data)}>Confirm</button>
    </div>
  )
}
