import { useState } from "react";
import { useDispatch } from "react-redux";
import { getLessonChats } from "../../redux/student/studentSlice";

export const ChatsForm = ({ lessonAreaId, lecturerId, courseId }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    message: "",
    lesson_area_id: lessonAreaId,
  });

  const CreateMessage = async(body) => {
    const token = localStorage.getItem('token');
    const response = await fetch("http://localhost:4000/api/v1/chats", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify(body)
    })
    const data = await response.json()
    return data;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.message === '') {
      return;
    }
    CreateMessage(formData).then(() => {
      dispatch(getLessonChats({ courseId: courseId, lecturerId: lecturerId }));
    });
    setFormData({
      message: '',
      lesson_area_id: lessonAreaId,
    })
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <textarea
        className="form-control"
        value={formData.message}
        name="message"
        onChange={handleChange}
      ></textarea>
      <input
        type="hidden"
        name="lesson_area_id"
        value={formData.lesson_area_id}
      />
      <button className="btn btn-primary ms-3" type="submit">send</button>
    </form>
  );
};
