import { useState } from "react";

export const ChatsForm = ({ lessonAreaId }) => {
  const [formData, setFormData] = useState({
    message: "",
    lesson_area_id: lessonAreaId,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
        onChange={handleChange}
      />
      <button className="btn btn-primary ms-3" type="submit">send</button>
    </form>
  );
};
