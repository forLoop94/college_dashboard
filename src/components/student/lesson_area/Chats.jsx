import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLessonChats } from "../../../redux/student/studentSlice";
import "../../../styles/lesson_area.css";
import { ChatsForm } from "../../forms/ChatsForm";

export const Chats = ({ courseInfo, lecturerInfo, lessonAreaId }) => {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.Students.chats);
  const { id } = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    dispatch(
      getLessonChats({ courseId: courseInfo.id, lecturerId: lecturerInfo.id })
    );
  }, [dispatch]);

  return (
    <section className="m-5">
      {chats.map((chat) => {
        if (chat.user_id === id) {
          return (
            <article key={chat.id} className="d-flex justify-content-start">
              <p className="w-50 outgoing-chats word-wrap-break-word">
                {chat.message}
              </p>
            </article>
          );
        } else {
          return (
            <article key={chat.id} className="d-flex justify-content-end">
              <p className="w-50 incoming-chats word-wrap-break-word d-flex justify-content-end">
                {chat.message}
              </p>
            </article>
          );
        }
      })}
      <ChatsForm lessonAreaId={lessonAreaId} />
    </section>
  );
};
