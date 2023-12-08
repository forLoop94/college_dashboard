import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLessonChats } from "../../../redux/student/studentSlice";
import "../../../styles/lesson_area.css";

export const Chats = ({ courseInfo, lecturerInfo }) => {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.Students.chats);
  const { id } = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    dispatch(
      getLessonChats({ courseId: courseInfo.id, lecturerId: lecturerInfo.id })
    );
  }, [dispatch]);

  if (chats.length === 0) {
    return "No one has sent a message yet, click here to be the first";
  } else {
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
      </section>
    );
  }
};
