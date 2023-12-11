import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLessonChats } from "../../../redux/student/studentSlice";
import "../../../styles/lesson_area.css";
import { ChatsForm } from "../../forms/ChatsForm";

export const Chats = ({ courseInfo, otherUserInfo, lessonAreaId }) => {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.Students.chats);
  const { id, role, profile_id } = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (role === 'student') {
      dispatch(
        getLessonChats({ studentId: profile_id, courseId: courseInfo.id, lecturerId: otherUserInfo.id })
      );
    } else {
      dispatch(
        getLessonChats({ studentId: otherUserInfo.id, courseId: courseInfo.id, lecturerId: profile_id })
      );
    }
  }, [dispatch, profile_id, courseInfo.id, otherUserInfo.id]);

  return (
    <section className="m-5">
      {chats.map((chat) => {
        if (chat.user_id === id) {
          return (
            <article key={chat.id} className="d-flex justify-content-end">
              <p className="w-50 word-wrap-break-word text-end">
                {chat.message}
              </p>
            </article>
          );
        } else {
          return (
            <article key={chat.id} className="d-flex justify-content-start">
              <p className="w-50 word-wrap-break-word d-flex text-start">
                {chat.message}
              </p>
            </article>
          );
        }
      })}
      <ChatsForm lessonAreaId={lessonAreaId} courseId={courseInfo.id} otherUserId={otherUserInfo.id} />
    </section>
  );
};
