import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLessonChats } from "../../redux/student/studentSlice";
import { FaCircleRight } from "react-icons/fa6";

export const ChatsForm = ({ lessonAreaId, otherUserId, courseId }) => {
  const dispatch = useDispatch();
  const { role, profile_id } = useSelector((state) => state.user.currentUser);

  const [formData, setFormData] = useState({
    message: "",
    lesson_area_id: lessonAreaId,
  });

  const CreateMessage = async (body) => {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:4000/api/v1/chats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log("nothingssss");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.message === "") {
      return;
    }
    CreateMessage(formData).then(() => {
      if (role === "student") {
        dispatch(
          getLessonChats({
            studentId: profile_id,
            courseId: courseId,
            lecturerId: otherUserId,
          })
        );
      } else {
        dispatch(
          getLessonChats({
            studentId: otherUserId,
            courseId: courseId,
            lecturerId: profile_id,
          })
        );
      }
    });
    setFormData({
      message: "",
      lesson_area_id: lessonAreaId,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className="d-flex chat-form" onSubmit={handleSubmit}>
      <input
        placeholder="Compose..."
        className="form-control message-bar"
        value={formData.message}
        name="message"
        onChange={handleChange}
      />
      <input
        type="hidden"
        name="lesson_area_id"
        value={formData.lesson_area_id}
      />
      <div className="send-container d-flex align-items-center ms-3">
        <button className="chat-submit" type="submit">
          <FaCircleRight className="send-btn" />
        </button>
      </div>
    </form>
  );
};
