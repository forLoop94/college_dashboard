import { useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getLessonChats } from "../../../redux/student/studentSlice";
import "../../../styles/lesson_area.css";
import { ChatsForm } from "../../forms/ChatsForm";
import PropTypes from "prop-types";

export const Chats = ({ otherUserInfo, lessonAreaId, setLinkPages }) => {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.Students.chats);
  const { id, role, profile_id } = useSelector(
    (state) => state.user.currentUser
  );

  useEffect(() => {
    if (role === "student") {
      dispatch(
        getLessonChats({
          studentId: profile_id,
          courseId: otherUserInfo.course_id,
          lecturerId: otherUserInfo.id,
        })
      );
    } else {
      dispatch(
        getLessonChats({
          studentId: otherUserInfo.id,
          courseId: otherUserInfo.course_id,
          lecturerId: profile_id,
        })
      );
    }
  }, [dispatch, role, profile_id, otherUserInfo]);

  return (
    <section className="chats-page">
      <div className="chats">
        {chats.map((chat) => {
          if (chat.user_id === id) {
            return (
              <article key={chat.id} className="d-flex justify-content-end">
                <p className="old-message word-wrap-break-word text-end">
                  {chat.message}
                </p>
              </article>
            );
          } else {
            return (
              <article key={chat.id} className="d-flex justify-content-start">
                <p className="old-message word-wrap-break-word d-flex">
                  {chat.message}
                </p>
              </article>
            );
          }
        })}
        <ChatsForm
          lessonAreaId={lessonAreaId}
          courseId={otherUserInfo.course_id}
          otherUserId={otherUserInfo.id}
        />
      </div>
      <button
        className="inner-page-return"
        onClick={() =>
          setLinkPages({
            submission: false,
            chats: false,
          })
        }
      >
        <FaAngleLeft />
      </button>
    </section>
  );
};

Chats.propTypes = {
  otherUserInfo: PropTypes.shape({
    id: PropTypes.number,
    course_id: PropTypes.number,
  }),
  lessonAreaId: PropTypes.number,
  setLinkPages: PropTypes.func
};
